"use strict";
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      watch = require('gulp-watch'),
      minifyjs = require('gulp-js-minify'),
      cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();


/* ==============================
    static server
============================== */
gulp.task('browser-sync', function() {
    browserSync.init(['./public/*'], {
        files: [
            './*',
            './**/*',
            './**/**/*',
            '/public/js/index/*',
            '/public/articles/*',
            '/public/portfolio/*',
            '/public/css/scss/stylesheet.scss'
        ],
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch('*').on('change', browserSync.reload);
});


/* ==============================
    min js
============================== */
gulp.task('jsmin', function () {
    return watch('./public/js/index/*.js', function () {
        gulp.src('./public/js/index/*.js')
            .pipe(minifyjs())
            .pipe(gulp.dest('./public/js/dist'))
            .pipe(browserSync.reload({stream: true}));
    });
});


/* ==============================
    sass sync watch
============================== */
gulp.task('sass', function () {
    return gulp.src('./public/css/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/src'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/css/scss/*.scss', ['sass']);
});


/* ==============================
    css autoprefixer -> tmp to dist
============================== */
gulp.task('prefix-css', function () {
    return watch('./public/css/src/*.css', { ignoreInitial: false })
        .pipe(autoprefixer({
            browsers: ['cover 99.5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css/tmp'));
});


/* ==============================
    css minify
============================== */
gulp.task('mincss', () => {
    return gulp.src('./public/css/src/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('./public/css/dist'))
        .pipe(browserSync.reload({stream: true}));
});


/* ==============================
    watch tasks
============================== */
gulp.task('watch', [
                        'browser-sync',
                        'jsmin',
                        'sass:watch',
                        'prefix-css',
                        'mincss',
                    ])
