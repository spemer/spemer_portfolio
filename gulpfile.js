"use strict";
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      watch = require('gulp-watch'),
      postcss = require('gulp-postcss'),
      minifyjs = require('gulp-js-minify'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
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
            '/public/css/stylesheet.scss'
        ],
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch('*').on('change', browserSync.reload);
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
    css minify
============================== */
gulp.task('mincss', () => {
    return gulp.src('./public/css/src/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('./public/css/dist'))
        .pipe(browserSync.reload({stream: true}));
});


/* ==============================
    sass sync watch
============================== */
gulp.task('sass', function () {
    return gulp.src('./public/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/css/src'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/css/*.scss', ['sass']);
});


/* ==============================
    watch tasks
============================== */
gulp.task('watch', ['browser-sync',
                    'prefix-css',
                    'jsmin',
                    'mincss',
                    'sass:watch'])
