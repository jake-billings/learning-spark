/**
 * Created by jakebillings on 4/28/17.
 */
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('build', function () {
    return gulp.src('./app/**/*')
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});