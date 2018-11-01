var gulp = require('gulp'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    image = require('gulp-image'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss')

// server
gulp.task('server', function () {
    return connect.server({
        root: './', //設定開啟位置
        livereload: true, //開啟livereload
        port: 8787 //設定預設port為8787
    });
});
/*         dev         */
// pug
gulp.task('pug', function () {
    return gulp.src('./src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./build/'))
        .pipe(connect.reload());
});
// watch
gulp.task('watch', function () {
    gulp.watch('./src/*.pug', ['pug']);
    gulp.watch('./src/styles/*.scss', ['sass']);
    gulp.watch('./src/scripts/*.js', ['ConcatAndUglifyJs']);
});
// scss
gulp.task('sass', function () {
    var processors = [ // 定義 postCSS 所需要的元件
        autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7') // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
    ];
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/styles/'))
        .pipe(connect.reload());
});
// js
gulp.task('scripts', function () {
    return gulp.src('./src/scripts/*.js')
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/scripts'))
        .pipe(connect.reload());
});
// image
gulp.task('image', function () {
    return gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./build/images'));
});

/*         prod         */
// watch
gulp.task('prod_watch', function () {
    gulp.watch('./src/*.pug', ['prod_pug']);
    gulp.watch('./src/styles/*.scss', ['prod_sass']);
    gulp.watch('./src/scripts/*.js', ['prod_ConcatAndUglifyJs']);
});
// pug
gulp.task('prod_pug', function () {
    gulp.src('./src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./frontend_challenge/build/'))
        .pipe(connect.reload());
});
// scss
gulp.task('prod_sass', function () {
    gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./frontend_challenge/build/styles/'))
        .pipe(connect.reload());
});
gulp.task('prod_scripts', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./frontend_challenge/build/scripts'))
        .pipe(connect.reload());
});
// image
gulp.task('prod_image', function () {
    gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./frontend_challenge/build/images'));
});

// develope
gulp.task('dev', ['sass','pug','scripts','image']);
gulp.task('dev:watch', ['server','sass','pug','scripts','image','watch']);
// producation
gulp.task('prod', ['prod_sass','prod_pug','prod_scripts','prod_image']);
gulp.task('prod:watch', ['server','prod_sass','prod_pug','prod_scripts','prod_image','prod_watch']);
