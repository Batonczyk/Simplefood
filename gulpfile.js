const {
  src,
  dest,
  watch,
  parallel,
  series
} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const nunjucksRender = require('gulp-nunjucks-render');
const rename = require('gulp-rename');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function styles() {
  return src('app/scss/*.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}


function nunjucks() {
  return src('app/*.njk')
    .pipe(nunjucksRender())
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/mixitup/dist/mixitup.js',
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
      'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
      'node_modules/rateyo/src/jquery.rateyo.js',
      'node_modules/wow.js/dist/wow.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(dest('dist/images'))
}


function svgSprites() {
  return src('app/images/icons/*.svg')
    .pipe(plumber())
    .pipe(cheerio({
      run: ($) => {
        $("[fill]").removeAttr("fill");
        $("[stroke]").removeAttr("stroke");
        $("[style]").removeAttr("style");
      },
      parserOptions: {
        xmlMode: true
      },
    }))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest('app/images'));
}

function build() {
  return src([
      'app/**/*.html',
      'app/css/style.min.css',
      'app/js/main.min.js'
    ], {
      base: 'app'
    })
    .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}


function watching() {
  watch(['app/**/*.scss'], styles);
  watch(['app/*.njk'], nunjucks);
  watch(['app/images/icons/*.svg'], svgSprites);
  watch(['app/js/**/*,js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}




exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.uglify = uglify;
exports.watching = watching;
exports.images = images;
exports.nunjucks = nunjucks;
exports.svgSprites = svgSprites;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);

exports.default = parallel(nunjucks, svgSprites, styles, scripts, browsersync, watching);