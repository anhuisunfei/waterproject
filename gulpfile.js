var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');


var port = process.env.APP_PORT | 3001;


gulp.task('connect', function() {
    connect.server({ 
        livereload: true,
        port: port
    });
});
gulp.task('open', function() {

    var options = {
        uri: "http://localhost:" + port
    }
    gulp.src('./index.html')
        .pipe(
            open(options)
        );
})


gulp.task('reload', function() {
    gulp.src(['./*.*', './resources/*.*', './resources/**/*.*'])
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch(['./*.*', './resources/*.*', './resources/**/*.*'], ['reload']);

});

gulp.task('default', ['connect', 'watch', 'open']);
