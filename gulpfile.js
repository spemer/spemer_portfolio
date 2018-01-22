"use strict";
const gulp = require('gulp');

//
// css auto prefix
const autoprefixer = require('gulp-autoprefixer');
gulp.task('prefix', () =>
    gulp.src('public/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/tmp/css'))
);

//
// css sort media query
const cmq = require('crlab-gulp-combine-media-queries');
gulp.task('cmq', function () {
    gulp.src('public/css/*.css')
        .pipe(cmq({
            log: true
        }))
        .pipe(gulp.dest('public/tmp/css'));
});

//
// css minify
const cleanCSS = require('gulp-clean-css');
gulp.task('mcss', () => {
  return gulp.src('public/tmp/css/*css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/dist/css'));
});

//
// js minify
const minifyjs = require('gulp-js-minify');
gulp.task('mjs', function(){
  gulp.src('public/js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('public/dist/js'));
});