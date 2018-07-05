const gulp = require('gulp'),
      path = require('path'),
      autoPrefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      csslint = require('gulp-csslint'),
      standard = require('gulp-standard');


const scssSettings = {
  input: 'scss/**/*.scss',
};

const logger = (type, msg) => {
  console.log(type, msg);
};

const supressError = (err) => {
  console.log(err.toString);
};

// Scss task
gulp.task('scss', () => {
  return gulp
    .src(scssSettings.input)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }).on('error', function(err) {
      console.log(err.toString());
      }))
    .pipe(autoPrefixer({
      browsers: ['last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(gulp.dest('./'))
    .resume();
});


// Watch task
gulp.task('watch', () => {
  gulp.watch(scssSettings.input, ['scss']);
});

// Default task
gulp.task('default', ['scss','watch']);
