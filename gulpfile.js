var gulp            = require('gulp');
var less            = require('gulp-less');
var react           = require('gulp-react');
var browserify      = require('gulp-browserify');
var rename          = require("gulp-rename");
var reactify        = require('reactify');
var notify          = require("gulp-notify");
var browserSync     = require('browser-sync');

var minifyCss       = require('gulp-minify-css');
var closureCompiler = require('gulp-closure-compiler');
var minifyHTML      = require('gulp-minify-html');



var handleErrors = require('./gulp/handleErrors');


gulp.task('default', ['watch' , 'browser-sync']);

gulp.task('build', []);

gulp.task('compressJs' , [] , function() {
  return gulp.src('./app/js/bundle.js')

    .pipe(closureCompiler({
      compilerPath: './node_modules/google-closure-compiler/compiler.jar',
      fileName: 'bundlee.js',
      compilerFlags: {
        //compilation_level: 'ADVANCED_OPTIMIZATIONS',
        language_in : 'ECMASCRIPT5',
        warning_level: 'QUIET'
      }
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./prod/js'));

});

gulp.task('minify-css', function() {
  return gulp.src('app/style/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./prod/style'));
});

 
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('app/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./prod'));
});

gulp.task('prod' , ['less', 'compressJs', 'minify-css' , "minify-html" ] , function () {
})


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
