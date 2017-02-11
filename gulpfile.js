"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html:'./src/*.html',
        dist: './dist'
    }
}

gulp.task('connect',function(){
    connect.server({
        root : ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });

});

gulp.task('open',['connect'],function(){
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html',function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch(config.paths.html,['html']);
});

gulp.task('default',['html','open','watch']);