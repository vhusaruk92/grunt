module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jshint:{
			options:{
			  curly: true,
			  eqnull: true,
			  immed:true,
			  latedef:true,
			  newcap:true,
			  noarg:true,
			  sub:true,
			  browser:true,
			  eqeqeq: true,
			  undef: true,
			  globals: {
			    jQuery: true,
			    console:true
			  }
			},
			'<%=pkg.name%>':{
				src:['js/**/*.js']
			},
		},
	    concat: {
			dist: {
			   src: ['js/one.js','js/two.js'],
			   dest: 'dist/build.js',
			},

			dist:{
				src:['css/style1.css','css/style2.css'],
				dest:'dist/build.css'
			}
		},

		uglify: {
			options: {
			 stripBanners: true,
			 banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
			        '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
		    build: {
		      src:'dist/build.js',
		      dest:'dist/build.min.js'
		    }
		},

		cssmin:{
				with_banner: {
  				    options: {
                    	banner: '/* bhjb */\n'
					},

					files:{
					  'dist/style.min.css':['dist/build.css']
					}
				}
		},

		watch: {
		  scripts: {
		    files: ['**/*.js'],
		    tasks: ['jshint','concat','uglify'],
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['jshint', 'concat', 'uglify', 'cssmin', 'watch']);
};