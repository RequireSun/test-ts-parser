import fs from 'fs';
import path from 'path';
import * as docgen from 'react-docgen/dist/main.js';
// import * as resolver from 'react-docgen/dist/resolver';

const { parse } = docgen;
// const { findExportedComponentDefinition } = resolver;

const content = fs.readFileSync(path.resolve(__dirname, '../src/index.tsx'), {
    encoding: 'utf-8',
});

// TODO 这里可以借力 react-docgen 内部的方法把 extend 的两个 props 都解析出来
// const parsed = parse(content, (ast) => {
//     // console.log(111, ast.program.body.filter(node => node.type === 'ExportNamedDeclaration').map(node => node.declaration));
//     const exportedInterfaces = ast.program.body
//         .filter(node => node.type === 'ExportNamedDeclaration')
//         .map(node => node.declaration)
//         .filter(node => node.type === 'TSInterfaceDeclaration')
//         .map(node => ({
//             id: node.id.name,
//             extends: node.id.extends,
//         }));
//     return findExportedComponentDefinition(ast);
// }, undefined, {
//     filename: 'index.tsx',
// });

const parsed = parse(content, undefined, undefined, {
    filename: 'index.tsx',
});

console.log(JSON.stringify(parsed, undefined, 2));

// module.exports = function () {};
