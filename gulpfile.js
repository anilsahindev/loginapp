var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'assets/scss/*.scss',
        ])
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest('build/css/app.css'))
  });
  gulp.task('js', function(){
    return gulp.src('assets/javascript/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/js'))
  });