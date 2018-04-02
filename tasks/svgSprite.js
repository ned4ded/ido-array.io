const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const svgSprite = require('gulp-svg-sprite');
const config = require('../gulpfile.config');
const DOMParser = require('xmldom').DOMParser;
const XMLSerializer = require('xmldom').XMLSerializer;

module.exports = gulp.task('svgSprite', function() {
  return gulp.src('./src/assets/icons/*.svg')
    .pipe(svgSprite({
      shape: {
        transform: [{
          svgo: {
            plugins: [{
                removeViewBox: false
              },
              {
                removeDimensions: true
              },
              {
                removeAttrs: {
                  attrs: 'fill'
                }
              },
            ]
          }
        }, ]
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
          example: {
            dest: path.join( config.server.serveFolder, 'example.html'),
          },
        },
      },
      // svg: {
      //   transform: [
      //     function(svg) {
      //       const s = new XMLSerializer();
      //
      //       const exportFile = fs.readFileSync('src/assets/defs.svg', 'utf8');
      //       const parsedDefs = new DOMParser().parseFromString(exportFile,"image/svg+xml");
      //
      //       const defs = parsedDefs.documentElement
      //         .getElementsByTagName('defs')
      //         .item(0);
      //
      //       const parsedSvg = (new DOMParser().parseFromString(svg,"image/svg+xml"));
      //       const firstEl = parsedSvg.documentElement.firstChild;
      //
      //       parsedSvg.documentElement.insertBefore(defs, firstEl);
      //
      //       return s.serializeToString(parsedSvg);
      //     }
      //   ]
      // }
    }))
    .pipe(gulp.dest(path.join(__dirname, '..')))
});
