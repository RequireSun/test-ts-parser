const path = require('path');
const InterfaceTransformer = require('./scripts/transformer').default;

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: program => ({
                        before: [
                            InterfaceTransformer(program),
                        ],
                    }),
                },
            },
        ],
    },
};
