const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: { // bundle은 하나 이상 설정할 수 있다.
        ['main.bundle']: path.resolve(__dirname, 'src', 'index.js'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"] // 순서는 뒤부터 로딩
            },
        ],
    },
    plugins: [ // 플러그인 추가
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
};