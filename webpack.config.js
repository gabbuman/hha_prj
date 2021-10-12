const path = require('path');

module.exports = {
    entry: './hha_prj/frontend/src/index.js',
    module: {
        rules:[
            {
                test: /\.tsx$/,
                exclude: /\node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    // output: {
    //     library: 'modulename',
    //     libraryTarget: 'umd',
    //     filename: 'main.js',
    // },
}
