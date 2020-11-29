// TODO
// @ts-ignore
import TS from 'typescript';

export default function (program: TS.Program): TS.TransformerFactory<TS.SourceFile> {
    return (context: TS.TransformationContext) => (file: TS.SourceFile) => {
        // console.log(file);
        return visitNodeAndChildren(file, program, context);
    };
}

function visitNodeAndChildren(node, program, context) {
    return TS.visitEachChild(visitNode(node, program), childNode => visitNodeAndChildren(childNode, program, context), context);
}

function visitNode(node, program) {
    console.log(node);
    return node;
}
