module.exports = function(grunt) {

    grunt.initConfig({

        accessibility: {
            options : {
                accessibilityLevel: 'WCAG2A'
            },
            test : {
                src: ['html/test.html']
            }
        }

    });

    grunt.loadNpmTasks('grunt-accessibility');

    grunt.registerTask('default', ['accessibility']);
};