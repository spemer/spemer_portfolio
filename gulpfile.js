"use strict";
const gulp = require('gulp');
const minifyjs = require('gulp-js-minify');
const autoprefixer = require('gulp-autoprefixer');
// const uncss = require('gulp-uncss');
const cleanCSS = require('gulp-clean-css');

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

// mini css
gulp.task('mincss', () => {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('public/css/dist'));
  });

// unused css
// gulp.task('uncss', function () {
//     return gulp.src('public/css/stylesheet.css')
//         .pipe(uncss({
//             html: ['pubic/*.html', 'public/**/*.html', 'https://spemer.com/*.html', 'https://spemer.com/**/*.html']
//         }))
//         .pipe(gulp.dest('public'));
// });

// gulp.task('hello', function(){
//     console.log('\nHello world!\n');
// });