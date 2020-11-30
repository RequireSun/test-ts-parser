// 照着抄的: https://github.com/kimamula/ts-transformer-keys/blob/master/transformer.ts
import * as fs from 'fs';
import * as path from 'path';
import * as TS from 'typescript';
import omit from 'lodash/omit';

const output = path.resolve(__dirname, '../output');
if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
}
const writer = fs.createWriteStream(path.resolve(__dirname, '../output/parsed.js'), {
    flags: 'w',
});

export default function (program: TS.Program): TS.TransformerFactory<TS.SourceFile> {
    return (context: TS.TransformationContext) => (file: TS.SourceFile) => {
        // console.log(file);
        return visitNodeAndChildren(file, program, context);
    };
}

function visitNodeAndChildren(node: TS.SourceFile, program: TS.Program, context: TS.TransformationContext): TS.SourceFile;
function visitNodeAndChildren(node: TS.Node, program: TS.Program, context: TS.TransformationContext): TS.Node | undefined;
function visitNodeAndChildren(node: TS.Node, program: TS.Program, context: TS.TransformationContext): TS.Node | undefined {
    return TS.visitEachChild(visitNode(node, program), childNode => visitNodeAndChildren(childNode, program, context), context);
}

function visitNode(node: TS.SourceFile, program: TS.Program): TS.SourceFile;
function visitNode(node: TS.Node, program: TS.Program): TS.Node | undefined;
function visitNode(node: TS.Node, program: TS.Program): TS.Node | undefined {
    if (node.kind === TS.SyntaxKind.SourceFile) {
        // root 不需要 log, 太大
    } else if (node.kind === TS.SyntaxKind.ImportDeclaration || node.kind === TS.SyntaxKind.ImportClause) {
        // import 暂时不看
    } else {
        writer.write(JSON.stringify(filterParent(node, 2), undefined, 2));
        writer.write('\r\n');
    }
    // console.log(omit(node, ['parent']));
    return node;
}

function filterParent(node, remain) {
    const filtered = omit(node, ['parent']);
    for (const key of Object.keys(filtered)) {
        if (typeof(filtered[key]) === 'object') {
            if (remain > 0) {
                filtered[key] = filterParent(node, remain - 1);
            } else {
                delete filtered[key];
            }
        }
    }
    return filtered;
}
