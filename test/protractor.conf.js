/**
 * Created by 2500K on 13/09/2014.
 * Protractor configuration file.
 */
var HtmlReporter = require('protractor-html-screenshot-reporter');
var path = require('path');

exports.config = {
    /*seleniumAddress: 'http://localhost:4444/wd/hub',*/
    specs: ['e2e/*.e2e.js'],
    baseUrl: 'http://localhost:9000',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose : true,
        includeStackTrace : true
    },

    //screenshot html reporter config
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test/e2e/report/'
        }));
    }
}