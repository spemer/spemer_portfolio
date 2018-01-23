"use strict";
const gulp = require('gulp');
const minifyjs = require('gulp-js-minify');
const autoprefixer = require('gulp-autoprefixer');
const uncss = require('gulp-uncss');

// js minify
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
gulp.task('jsmin', ['js']);

// css prefix
gulp.task('prefix', () =>
    gulp.src('public/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('public/css'))
);

// unused css
gulp.task('uncss', function () {
    return gulp.src('public/css/stylesheet.css')
        .pipe(uncss({
            html: ['pubic/*.html', 'public/**/*.html', 'https://spemer.com/*.html', 'https://spemer.com/**/*.html']
        }))
        .pipe(gulp.dest('public'));
});