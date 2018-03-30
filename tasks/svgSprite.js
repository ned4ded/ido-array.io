const gulp = require('gulp');
const path = require('path');
const svgSprite = require('gulp-svg-sprite');
const config = require('../gulpfile.config');

module.exports = gulp.task('svgSprite', function() {
  return gulp.src('./src/assets/icons/*.svg')
    .pipe(svgSprite({
      shape: {
        transform: [
            {svgo: {
              plugins: [
                {removeViewBox: false},
                {removeDimensions: true},
                {removeAttrs: {attrs: 'fill'}},
              ]
            }}
        ]
      },
      mode: {
        symbol: {
          prefix: '.',
          dimensions: '%s',
          sprite: path.join(config.server.assets, 'sprite.svg'),
          bust: false,
          render: {
            scss: {
              dest: path.join(config.paths.stylesSvgSprite, '_sprite.scss'),
              template: config.paths.svgTemplate,
            },
          },
          example: false,
        },
      }
    }))
    .pipe(gulp.dest(path.join(__dirname, '..')))
});
