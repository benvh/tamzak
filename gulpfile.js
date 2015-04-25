var gulp        = require('gulp');
var config      = require('./gulp.config.json');

var plug        = require('gulp-load-plugins')();
var del         = require('del');
var browsersync = require('browser-sync').create();

var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var env         = require('minimist')(process.argv.slice(2));




gulp.task('build', ['lint', 'js', 'html', 'styles']);
gulp.task('run', ['watch', 'browsersync']);

gulp.task('clean', function(cb) {
    del(config.buildpath, cb);
});




/********************/
/*    JAVASCRIPT    */
/********************/
gulp.task('lint', function() {
    gulp.src('src/app/**/*.js')
        .pipe(plug.jshint({ browserify: true }))
        .pipe(plug.jshint.reporter('default'));
});

gulp.task('js', function() {
    var bundleStream = browserify(config.js, { debug: true }).bundle();

    bundleStream
        .pipe(source('tamzak.js'))
        .pipe(plug.streamify( plug.sourcemaps.init({loadMaps: true}) ))
        .pipe(plug.streamify( plug.uglify({ mangle: false }) ))
        .pipe(plug.streamify( plug.sourcemaps.write() ))
        .pipe(plug.rename('app.bundled.js'))
        .pipe(gulp.dest(config.buildpath + '/js'))

        .pipe(browsersync.reload( { stream: true } ));
});






/********************/
/*       HTML       */
/********************/
gulp.task('html', function() {
    gulp.src(config.html, { base: 'src/app' })
        .pipe(plug.plumber())
        .pipe(gulp.dest(config.buildpath))

        .pipe(browsersync.reload( { stream: true } ));
});




/********************/
/*      STYLES      */
/********************/
gulp.task('styles', function() {
    gulp.src(config.styles)
        .pipe(plug.plumber())
        .pipe(plug.sass( { includePaths: config.sassIncludePaths }))
        .pipe(plug.concat('app.css'))
        .pipe(plug.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.buildpath + '/css'))

        .pipe(browsersync.reload( { stream: true} ));
});




/****************************/
/*    BROWSERSYNC SERVER    */
/****************************/
gulp.task('browsersync', function() {
    browsersync.init({
        server: {
            baseDir: './build'
        }
    });
});




/********************/
/*     WATCHERS     */
/********************/
gulp.task('watch', function() {
    gulp.watch(config.html, ['html']);
    gulp.watch('src/**/*.js', ['lint', 'js']);
    gulp.watch(config.styles, ['styles']);
});