/* eslint-env node, script */
/* eslint "strict": "off" */

'use strict';

var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var mocha  = require('gulp-mocha');

gulp.task('eslint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function() {
  gulp.src(['./test/**/*.js'], {read: false})
    .pipe(mocha({reporter: 'list'}));
});
