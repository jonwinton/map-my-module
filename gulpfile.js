'use strict';

var gulp = require('gulp');
var typescript = require('gulp-tsc');
var tslint = require('gulp-tslint');

gulp.task('compile', function() {
  gulp.src(['src/**/*.ts', '!src/**/*.test.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('dist/'))
});

/**
 * Lint
 *
 * `gulp-tslint` automatically searches for the
 * `tslint.json` file in the same directory, so there's
 * no need to provide an explicit path.
 */
gulp.task('lint', function() {
  gulp.src(['src/**/*.ts', '!src/**/*.test.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
});

/**
 * Watch
 *
 * Watches files for changes and re-compiles.
 */
gulp.task('watch', function() {
  gulp.watch(['src/**/*.ts', '!src/**/*.test.ts'], ['compile']);
});
