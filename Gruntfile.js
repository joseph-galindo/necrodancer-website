module.exports = function(grunt) {
	
	//cfg of stock tasks
	grunt.initConfig({

		copy: {
			build: {
				cwd: 'src',
				src: ['**', '!markup/**', '!styles/**'],
				dest: 'dist',
				expand:true
			}
		},

		jade: {
			build: {
				options: {
					pretty:true,
					debug:false
				},
				files: [{
					cwd: 'src/markup/pages',
					dest: 'dist/',
					src: ['**/*.jade'],
					expand:true,
					filter: 'isFile',
					ext: '.html'
				}]
			}
		},

		sass: {
			build: {
		        options: {
		            style: 'expanded',
		            sourceMap: true
		        },
		        files: [{
		            expand: true,
		            src: ['**/*.scss', '!**/_*.scss'],
		            cwd: 'src/styles',
		            dest: 'dist/css',
		            ext: '.css'
		        }]
		    }
		},

		clean: {
			build: {
				src: ['dist']
			}
		},

		autoprefixer: {
			build: {
				expand:true,
				cwd: 'dist',
				src: ['**/*.css'],
				dest: 'dist'
			}
		},

		watch: {
		    options: {
		        dot: true,
		        interrupt: false,
		        livereload: true,
		        livereloadOnError: false,
		        spawn: false
		    },
		    markup: {
		        files: ['src/markup/**/*.jade', '!src/markup/pages/**/*.jade'],
		        tasks: ['markup:build']
		    },
		    markup_pages: {
		        files: ['src/markup/pages/**/*.jade'],
		        tasks: ['markup:watch']
		    },
		    styles: {
		        files: ['src/styles/**/*.scss'],
		        tasks: ['styles:build']
		    }
		},

		connect: {
			build: {
				options: {
				    hostname: '*',
				    // hostname: '<%= grunt.config.get("ip") %>',
				    port: 3000,
				    base: 'dist/',
				    target: 'http://localhost:3000',
				    appName: 'open',
				    open: true,
				    livereload: true
				}
			}
		}

	});

	//loading of stock tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-newer');

	//defining of custom tasks for CLI use
	grunt.registerTask('markup:build', ['jade']);
	grunt.registerTask('markup:watch', ['newer:jade']);

	grunt.registerTask('styles:build', ['sass', 'autoprefixer']);
	grunt.registerTask('styles:watch', ['newer:sass', 'newer:autoprefixer']);

	grunt.registerTask('default','Creates build and serves it for dev purposes', ['clean','copy', 'markup:build', 'styles:build', 'connect', 'watch']);
	grunt.registerTask('prod','Creates prod build in dist directory', ['clean','copy', 'markup:build', 'styles:build']);
};