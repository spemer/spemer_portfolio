"use strict";
const gulp = require('gulp');
const minifyjs = require('gulp-js-minify');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const urlMetadata = require("url-metadata");


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


urlMetadata('https://spemer.com/').then(
    function (metadata) { 
        console.log(metadata.author);
});