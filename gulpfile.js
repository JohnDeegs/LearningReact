//gulpfile

const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const gulpbabel = require('gulp-babel');

gulp.task('default', ['browser-sync'], () => {

});

gulp.task('browser-sync', ['nodemon'], () => {
    browserSync.init(null,  {
        proxy: "http://localhost:8080",
        files: ["public/**/*.*"],
        port: 5000
    });
});

gulp.task('nodemon', ['babel'], (cb) => {
	
	let started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('babel', () => {
    return gulp.src("public/jsx/*.jsx")
        .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
        .pipe(gulp.dest("public/js/"))
});