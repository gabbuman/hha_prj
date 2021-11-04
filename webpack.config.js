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
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
