"use strict";
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const minifyjs = require('gulp-js-minify');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


/* ==============================
    css autoprefixer -> tmp to dist
============================== */
gulp.task('prefix-css', function () {
    return watch('public/css/tmp/stylesheet.css', { ignoreInitial: false })
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css/dist'));
});


/* ==============================
    min js
============================== */
gulp.task('jsmin', function () {
    return watch('public/js/index/*.js', function () {
        gulp.src('public/js/index/*.js')
            .pipe(minifyjs())
            .pipe(gulp.dest('public/js/dist'));
    });
});


/* ==============================
    css minify
============================== */
gulp.task('mincss', () => {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('public/css/dist'));
});


/* ==============================
    sass sync watch
============================== */
gulp.task('sass', function () {
    return gulp.src('public/css/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('public/css/tmp'));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/css/*.scss', ['sass']);
});


/* ==============================
    watch tasks
============================== */
gulp.task('watch', ['prefix-css', 'jsmin', 'mincss', 'sass:watch'])



// js minify
// const paths = {
//     src: 'public',
//     srcJS: 'public/js/index/*.js',
//     tmp: 'public',
//     tmpJS: 'public/js/tmp'
// };
// gulp.task('js', function(){
//     return gulp.src(paths.srcJS)
//     .pipe(minifyjs())
//     .pipe(gulp.dest(paths.distJS));
// });
// gulp.task('jsmin', ['js']);


// css prefix
// gulp.task('prefix', () =>
//     gulp.src('public/css/tmp/*.css')
//         .pipe(autoprefixer({
//             cascade: false
//     }))
//     .pipe(gulp.dest('public/css/dist'))
// );