const fs = require('fs');
const path = require('path');
const docgen = require('react-docgen/dist/main.js');

const content = fs.readFileSync(path.resolve(__dirname, '../src/index.tsx'), {
    encoding: 'utf-8',
});

const parsed = docgen.parse(content, undefined, undefined, {
    filename: 'index.tsx',
});

console.log(parsed);

// module.exports = function () {};
