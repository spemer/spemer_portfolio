"use strict";


const gulp = require('gulp'),
      sass = require('gulp-sass'),
      watch = require('gulp-watch'),

      uglifyjs = require('uglify-js'),
      uglify = require('gulp-uglify'),
      composer = require('gulp-uglify/composer'),
      pump = require('pump'),
      minify = composer(uglifyjs, console),

      cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();


const { src, dest, lastRun, series } = require("gulp");

// const imagemin = require("gulp-imagemin");
// const imageminGifsicle = require("imagemin-gifsicle");
// const imageminJpegtran = require("imagemin-jpegtran");
// const imageminOptipng = require("imagemin-optipng");
// const imageminSvgo = require("imagemin-svgo");

// const options = [
//   imageminGifsicle({
//     interlaced: true
//   }),
//   imageminJpegtran({
//     progressive: true,
//     arithmetic: true
//   }),
//   imageminOptipng({
//     optimizationLevel: 7,
//     bitDepthReduction: true,
//     colorTypeReduction: true,
//     paletteReduction: true
//   }),
//   imageminSvgo({
//     plugins: [{ removeViewBox: true }, { cleanupIDs: true }]
//   })
// ];


/* ==============================
    static server
============================== */
function browser_sync() {
    browserSync.init(['./public/*'], {
        files: [
            './*',
            './**/*',
            './**/**/*',
            '/public/js/src/*',
            '/public/js/dist/*',
            '/public/articles/*',
            '/public/portfolio/*',
            '/public/css/scss/stylesheet.scss'
        ],
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch('*').on('change', browserSync.reload);
}


/* ==============================
    minify js
============================== */
function compress(cb) {
    return gulp.src('./public/js/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/dist'))
        .pipe(browserSync.reload({stream: true}));
}


/* ==============================
    sass sync watch
============================== */
function sass_before() {
    return gulp.src('./public/css/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/src'))
}

function sass_watch() {
    gulp.watch('./public/css/scss/*.scss', ['sass_before']);
}


/* ==============================
    css autoprefixer -> tmp to dist
============================== */
function prefix_css() {
    return watch('./public/css/src/*.css', { ignoreInitial: false })
        .pipe(autoprefixer({
            browsers: ['cover 99.5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css/tmp'));
}


/* ==============================
    css minify
============================== */
function mincss() {
    return gulp.src(["./public/css/src/*.css"]
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('./public/css/dist'))
        .pipe(browserSync.reload({stream: true})));
}
  
  
// exports
exports.default = series(
    browser_sync,
    compress,
    sass_watch,
    prefix_css,
    mincss
);
