"use strict";
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const minifyjs = require('gulp-js-minify');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init(['public/*'], {
        server: {
            baseDir: "./public"
        }
    });
});


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
            .pipe(gulp.dest('public/js/dist'))
            .pipe(browserSync.reload({stream: true}));
    });
});


/* ==============================
    css minify
============================== */
gulp.task('mincss', () => {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('public/css/dist'))
        .pipe(browserSync.reload({stream: true}));
});


/* ==============================
    sass sync watch
============================== */
gulp.task('sass', function () {
    return gulp.src('public/css/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('public/css/tmp'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/css/*.scss', ['sass']);
});


/* ==============================
    watch tasks
============================== */
gulp.task('watch', ['browser-sync', 'prefix-css', 'jsmin', 'mincss', 'sass:watch'])
