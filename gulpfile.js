var gulp = require('gulp');
var less = require('gulp-less');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var reactify = require('reactify');
var notify = require("gulp-notify");
var browserSync = require('browser-sync');


var handleErrors = require('./gulp/handleErrors');


gulp.task('default', ['watch' , 'browser-sync']);

gulp.task('build', []);

gulp.task('watch' , ['less', 'react'], function(){

    gulp.watch('app/style/*.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/components/*.jsx', ['react',  browserSync.reload]);
    gulp.watch('app/js/*.jsx', ['react' ,  browserSync.reload]);
    gulp.watch('app/js/actions/*.js', ['react',  browserSync.reload]);
    gulp.watch('app/js/constants/*.js', ['react',  browserSync.reload]);
    gulp.watch('app/js/dispatcher/*.js', ['react',  browserSync.reload]);
    gulp.watch('app/js/stores/*.js', ['react',  browserSync.reload]);
    gulp.watch('app/js/api/*.js', ['react',  browserSync.reload]);

})
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('less', function () {
    gulp.src('app/style/main.less') // path to your file
    .pipe(less({strictMath: true}).on('error', handleErrors))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('app/style/'));

});


gulp.task('react', function () {

    gulp.src('app/js/app.jsx')
        .pipe(browserify({
            transform: [reactify]
    }) .on('error', handleErrors))

    .pipe(rename("app/js/bundle.js"))
    .pipe(gulp.dest(''));

});
