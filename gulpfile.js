var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
gulp.task('watch', function() {

    browserSync.init({
        server: "./public"
    });
  
    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("views/*.handlebars").on('change', browserSync.reload);
  });
  
  gulp.task('sass', function() {
    return gulp.src("assets/scss/app.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("public/css"))
      .pipe(browserSync.stream());
  });
  
  gulp.task('default', ['sass', 'serve']);

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


