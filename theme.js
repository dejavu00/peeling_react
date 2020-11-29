const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
    stylesDir: path.join(__dirname, './src/styles'),
    antDir: path.join(__dirname, './node_modules/antd'),
    varFile: path.join(__dirname, './src/theme.less'),
    mainLessFile: path.join(__dirname, './src/index.less'),
    themeVariables: [
        //需要动态切换的主题变量
        '@primary-color',
        '@layout-sider-background',
        '@layout-footer-background',
        '@borderColor',
        '@progress-default-color'
      ],
    indexFileName: 'index.html',
    outputFilePath: path.join(__dirname, './public/theme.less'),
}

generateTheme(options).then(less => {
    console.log('Theme generated successfully');
}).catch(error => {
    console.log('Error', error);
});