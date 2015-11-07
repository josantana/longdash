
var concat      = require('gulp-concat'),
    changed     = require('gulp-changed'),
    gulp        = require('gulp'),
    header      = require('gulp-header'),
    notify      = require("gulp-notify"),
    plumber     = require('gulp-plumber'),
    pkg         = require('./package.json'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify');

var js = [ 'source/*.js' ];

var devInfo =
[
    '/*!',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.url %>',
    ' * @license <%= pkg.license %>',
    ' */',
    '',
    ''
].join('\n');

gulp.task('scripts', function()
{
    return gulp.src(js)
    .pipe(plumber())
    .pipe(changed('dist'))
    .pipe(sourcemaps.init())
    .pipe(header(devInfo, { pkg: pkg }))
    .pipe(concat('longdash.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(notify('Longdash: Build'));
});

gulp.task('default', function ()
{
    gulp.watch(js, ['scripts']);
});
