'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			compile: {
				files: {
					'public/scss/style.css': 'public/scss/style.scss'
				}
			},
			concat: {
				files: {
					'public/scss/style.css': [
						'public/scss/style.scss',
					]
				}
			}
		},
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['clean', 'sass']);
};