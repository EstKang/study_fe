const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');

module.exports = {
    entry: commonConfig.entry,
    output: {
        path: path.resolve(__dirname, 'bundle'),
    },
    module: commonConfig.module,
    plugins: [ // 플러그인 추가
        new CleanWebpackPlugin(),
		...commonConfig.plugins,
	],
};