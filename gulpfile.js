"use strict";
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minifyjs = require('gulp-js-minify');

// minify
const paths = {
    src: 'public/js/index',
    srcJS: 'public/js/index/*.js',

    dist: 'public/js/dist',
    distJS: 'public/js/dist/*.js'
};
gulp.task('js', function(){
    return gulp.src(paths.srcJS)
    .pipe(minifyjs())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('min', ['js']);