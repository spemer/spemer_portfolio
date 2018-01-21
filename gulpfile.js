const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixer', () =>
    gulp.src('public/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
);