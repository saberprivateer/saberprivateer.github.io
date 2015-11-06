var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('scripts', function () {
    return gulp.src([
        'js/vendor/modernizr.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-foundation/mm-foundation-tpls.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'js/foundation.min.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('default', ['scripts'], function () {
    // place code for your default task here
});
