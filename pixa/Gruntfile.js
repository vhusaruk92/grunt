module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

	    concat: {
			dist: {
			   src: ['js/lightslider.js','js/index.js'],
			   dest: 'js/concat.js',
			},
		},

		uglify: {
			options: {
			 stripBanners: true,
			 banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
			        '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
		    build: {
		      src:'js/concat.js',
		      dest:'js/concat.min.js'
		    }
		},

		less: {
		  development: {
		    options: {
		      paths: ['assets/css']
		    },
		    files: {
		      'css/result.css': 'css/*.less'
		    }
		  },
		  production: {
		    options: {
		      paths: ['assets/css'],
		      plugins: [
		        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
		        new (require('less-plugin-clean-css'))
		      ],
		    },
		    files: {
		      'css/result.css': 'css/*.less'
		    }
		  }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.registerTask('default',['concat', 'uglify', 'less']);
};