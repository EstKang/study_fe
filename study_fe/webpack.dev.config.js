const path = require('path');
const commonConfig = require('./webpack.common.config.js');

module.exports = {
    mode: 'development',
    entry: commonConfig.entry,
    plugins: [
        ...commonConfig.plugins,
    ],
    module: commonConfig.module,
    devServer: {
        open: true, // 브라우저를 자동으로 열어줍니다
        hot: true, // 스크립트 변경 시 번들링 후 브라우저를 새로고침 해줍니다
        static: {
            directory: path.join(__dirname, 'assets'), // 실제 정적 파일 경로
            publicPath: '/static', // 서버 정적 파일 경로
        }
    },
};