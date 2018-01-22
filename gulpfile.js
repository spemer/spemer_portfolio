"use strict";
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minifyjs = require('gulp-js-minify');

// minify
const paths = {
    src: 'public',
    srcJS: 'public/js/index/*.js',

    dist: 'public',
    distJS: 'public/js/dist'
};
gulp.task('js', function(){
    return gulp.src(paths.srcJS)
    .pipe(minifyjs())
    .pipe(gulp.dest(paths.distJS));
});
gulp.task('min', ['js']);