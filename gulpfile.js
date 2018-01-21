"use strict";
const gulp = require('gulp');

//
// css auto prefix
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixer', () =>
    gulp.src('public/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
);

//
// css sort media query
const cmq = require('crlab-gulp-combine-media-queries');
 
gulp.task('cmq', function () {
    gulp.src('public/css/*.css')
        .pipe(cmq({
            log: true
        }))
        .pipe(gulp.dest('public/css'));
});