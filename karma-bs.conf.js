module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',

        // frameworks to use
        frameworks: ['mocha', 'chai', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            'tests/*.spec.js',
            'app/*.html'
        ],

        browserify: {
            watch: true,
            debug: false
        },

        preprocessors: {
            'tests/*.spec.js': ['browserify'],
            'app/*.html': 'html2js'
        },

        // list of files to exclude
        exclude: [
        ],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        browsers: ['bs_ff_mac', 'bs_ch_mac'],

        reporters: ['dots'],

        // global config of your BrowserStack account
        browserStack: {
            username: 'mynewsdeskdev',
            accessKey: process.env.BROWSERSTACK_KEY
        },

        customLaunchers: {
            bs_ff_mac: {
                base: 'BrowserStack',
                browser: 'firefox',
                browser_version: 'latest',
                os: 'Windows',
                os_version: 'XP'
            },
            bs_ch_mac: {
                base: 'BrowserStack',
                browser: 'chrome',
                browser_version: 'latest',
                os: 'OS X',
                os_version: 'Lion'
            }
        },

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-browserify',
            'karma-browserstack-launcher',
            'karma-html2js-preprocessor'
        ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
