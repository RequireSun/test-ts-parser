import fs from 'fs';
import path from 'path';
import * as docgen from 'react-docgen/dist/main.js';

const { parse } = docgen;

const content = fs.readFileSync(path.resolve(__dirname, '../src/index.tsx'), {
    encoding: 'utf-8',
});

const parsed = parse(content, undefined, undefined, {
    filename: 'index.tsx',
});

console.log(parsed);

// module.exports = function () {};
