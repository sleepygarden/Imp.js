var gulp = require('gulp');

var merge = require('merge-stream');
var concat = require('gulp-concat');
var tap = require('gulp-tap');
var gulpif = require('gulp-if');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

var cssMin = require('gulp-cssmin');
var cssConcat = require('gulp-concat-css');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');

var httpServer = require('http-server');

var config = {
    srcDir : './src',
    buildDir : './build',
    uglify : false
};

// injects a plumber() shim into the stream, which can catch unhandled errors and allow the stream to continue
gulp.plumbedSrc = function( ){
    return gulp.src.apply( gulp, arguments )
    .pipe( plumber() );
};

gulp.task('serve', function(){
    httpServer.createServer({
        root : config.buildDir,
        cache : -1
    }).listen(8080);
});

gulp.task('copy',function(){
    // copy everything which isnt in the src/js or src/css folder
    gulp.plumbedSrc([config.srcDir + '/*.{html,json,txt}']).
    pipe(gulp.dest(config.buildDir));
    gulp.plumbedSrc([config.srcDir + '/images/*.*']).
    pipe(gulp.dest(config.buildDir + '/images/'));
});

// rebuild css and scss files, trigger live reload
gulp.task('sass', function() {
    gulp.plumbedSrc(config.buildDir + '/css/bundle.{min.css,css}', {read: false})
    .pipe(clean());
    gulp.plumbedSrc(config.srcDir + '/css/*.{css,scss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssConcat('bundle.css'))
    .pipe(gulpif(config.uglify, cssMin()))
    .pipe(gulpif(config.uglify, rename('bundle.min.css')))
    .pipe(gulp.dest(config.buildDir + '/css'));
});

// browserify + bableify (+ optional uglify), concat lib js with our bundled JS
gulp.task('browserify', function() {
    gulp.plumbedSrc(config.buildDir + '/js/bundle.{min.js,js}', {read: false})
    .pipe(clean());

    var libStream = gulp.plumbedSrc(config.srcDir + '/js/lib/*.js');
    var compiledStream = gulp.plumbedSrc(config.srcDir + '/js/main.js', {read: false}) // no need of reading file because browserify does.
    .pipe(tap(function (file) {
        file.contents = browserify(file.path, {debug: true})
        .transform("babelify", {presets: ["es2015"]})
        .bundle();
    }))
    .pipe(buffer())
    .pipe(gulpif(config.uglify, sourcemaps.init({loadMaps: true})))
    .pipe(gulpif(config.uglify, uglify()))
    .on('error', gutil.log);

    merge(libStream, compiledStream)
    .pipe(concat('bundle.js'))
    .pipe(gulpif(config.uglify, rename('bundle.min.js')))
    .pipe(gulp.dest(config.buildDir + '/js'));
});

// watch files for changes and appearance (doesn't cover deletion) which match glob patterns, on match, run task
gulp.task('watch', function () {
    gulp.watch('js/*.js', {cwd: config.srcDir}, ['browserify']);
    gulp.watch('js/imp/*.js', {cwd: config.srcDir}, ['browserify']);
    gulp.watch('css/*.{css,scss}', {cwd: config.srcDir}, ['sass']);
    gulp.watch('*.html',{cwd: config.srcDir},['copy']);
});

// erase all files in build dir
gulp.task('clean', function(callback){
    return gulp.plumbedSrc(config.buildDir, {read: false})
    .pipe(clean());
});

gulp.task('build', function(){
    runSequence(['browserify', 'sass', 'copy']);
});
// gulp tasks are async by default, for cleanup to resolve before starting to repopulate build dir
gulp.task('default', function(){
    runSequence('clean', 'build', 'serve', 'watch');
});
