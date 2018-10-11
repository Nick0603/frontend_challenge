var gulp = require('gulp'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    image = require('gulp-image')


// server
gulp.task('server', function () {
    connect.server({
        root: 'build', //設定開啟位置
        livereload: true, //開啟livereload
        port: 8787 //設定預設port為8787
    });
});

// pug
gulp.task('pug', function(){
    gulp.src('./src/*.pug')
    .pipe(pug({
        pretty:true
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});
// scss
gulp.task('sass', function () { 
    gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/styles/'))
        .pipe(connect.reload());
});

// js
gulp.task('defaultJs', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('./build/scripts'))
        .pipe(connect.reload());
});
gulp.task('ConcatAndUglifyJs', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
        .pipe(connect.reload());
});
// image
gulp.task('image', function () {
    gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./build/images'));
});


// watch
gulp.task('watch', function () {
    gulp.watch('./src/*.pug',['pug']);
    gulp.watch('./src/styles/*.scss', ['sass']);
    gulp.watch('./src/scripts/*.js', ['ConcatAndUglifyJs']);
});

// develope
gulp.task('dev', ['sass','pug','defaultJs','image']);
gulp.task('dev:watch', ['server','sass','pug','defaultJs','image','watch']);
// producation
gulp.task('pro', ['sass','pug','ConcatAndUglifyJs','image']);
gulp.task('pro:watch', ['server','sass','pug','ConcatAndUglifyJs','image','watch']);
