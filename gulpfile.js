var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('connect', [ ], function(){
	connect.server({
		livereload: true
	});
});

gulp.task('reload', [ ], function(){
	gulp.src('./**/*.*')
		.pipe(connect.reload());

});

//runs the reload command when it notices when something changes
gulp.task('watch', [ ], function(){
	gulp.watch('./**/*.*', ['reload']);
});


gulp.task('default', ['connect', 'watch']);
