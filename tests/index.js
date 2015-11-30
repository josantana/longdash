// These two scripts will be injected in remote DOM on every request

casper.options.clientScripts = [
    './node_modules/lodash/index.js',
    './node_modules/moment/moment.js',
    './dist/longdash.js'
];

describe('Tests', function() {
    before(function() {
        casper.start('./tests/index.html');

        casper.on('page.error', function(msg, trace) {
            this.echo('Error: ' + msg, 'ERROR');
        });
    });

    it('should have an element in DOM', function () {
        casper.waitForSelector('#start', function () {
            '#start'.should.be.inDOM;
        });
    });

    it('String: MD5', function () {
        // casper.then(function() {
            // response = this.evaluate(function() {
                // var longdash = casper.getGlobal('__');
                // var lodash = casper.getGlobal('_');
                // var moment = casper.getGlobal('moment');
                console.log(window);
                // console.log(__);
                // console.log(casper.getCurrentUrl());
                // console.log(longdash.string.md5('secret'));
                // console.log(longdash.ajax);
                expect('5ebe2294ecd0e0f08eab7690d2a6ee69').to.equal('5ebe2294ecd0e0f08eab7690d2a6ee69');
            // });
        // });
    });

});
