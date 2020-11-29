const InterfaceTransformer = require('./scripts/transformer').default;

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: './dist'
    },
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
            }
        ],
    },
};
