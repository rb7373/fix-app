'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var $ = require('gulp-load-plugins')({lazy: true});

var options = {
  src: 'src/client',
  dist: 'dist/client',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    exclude: [/jquery/]
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

/**
 * --verbose  : Various tasks will produce more output to the console.
 */

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
