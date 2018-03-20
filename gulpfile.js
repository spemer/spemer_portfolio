"use strict";
const gulp = require('gulp');
const minifyjs = require('gulp-js-minify');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const watch = require('gulp-watch');


// watch
gulp.task('stream-css', function () {
    // Endless stream mode
    return watch('public/css/tmp/stylesheet.css', { ignoreInitial: false })
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css/dist'));
});

gulp.task('callback-js', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('public/js/index/*.js', function () {
        gulp.src('public/js/index/*.js')
            .pipe(minifyjs())
            .pipe(gulp.dest('public/js/dist'));
    });
});

// mini css
gulp.task('mincss', () => {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('public/css/dist'));
});

gulp.task('watch', ['stream-css', 'callback-js', 'mincss'])



// js minify
const paths = {
    src: 'public',
    srcJS: 'public/js/index/*.js',
    tmp: 'public',
    tmpJS: 'public/js/tmp'
};
gulp.task('js', function(){
    return gulp.src(paths.srcJS)
    .pipe(minifyjs())
    .pipe(gulp.dest(paths.distJS));
});
gulp.task('jsmin', ['js']);


// css prefix
gulp.task('prefix', () =>
    gulp.src('public/css/tmp/*.css')
        .pipe(autoprefixer({
            cascade: false
    }))
    .pipe(gulp.dest('public/css/dist'))
);