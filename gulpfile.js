/**
 * Created by lleohao on 2016/3/7.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('minijs', function () {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minicss', function () {
    gulp.src('src/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minicss', 'minijs']);

gulp.task('watch', function(){
    gulp.watch('src/*.*', ['minijs', 'minicss']);
});