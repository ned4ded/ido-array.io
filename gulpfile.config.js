const path = require('path');

module.exports = {
  server: {
    serveFolder: path.join(__dirname, 'www'),
    assets: path.join(__dirname, 'www/assets'),
    host: '192.168.1.130',
    port: 3000,
  },
  paths: {
    styles: path.join(__dirname, 'src/styles/'),
    stylesSvgSprite: path.join(__dirname, 'src/styles/svg-sprite/'),
    stylesAll: path.join(__dirname, 'src/styles/**/*.scss'),
    stylesBase: path.join(__dirname, 'src/styles/base.scss'),
    scripts: path.join(__dirname, 'src/scripts/**/*.js'),
    pages: path.join(__dirname, 'src/pages/*.html'),
    icons: path.join(__dirname, 'src/assets/icons/*.svg'),
    svgTemplate: path.join(__dirname, 'src/templates/svg-sprite.mustache'),
    svgDefs: path.join(__dirname, 'src/assets/defs.svg')
  }
};
