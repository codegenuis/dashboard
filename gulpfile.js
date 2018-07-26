const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')

gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
})

gulp.task('ImageMin', () =>
  gulp.src('src/images/*')
  .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function(){
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
})