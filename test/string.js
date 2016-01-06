
describe('String', function () {

    it('camelcase', function () {
        __.string.camelcase('-webkit-transition').should.be.equal('WebkitTransition');
    });

    it('count', function () {
        __.string.count('DC Comics', 'C').should.be.equal(2);
    });

    it('md5', function () {
        __.string.md5('secret').should.be.equal('5ebe2294ecd0e0f08eab7690d2a6ee69');
    });

    it('quote', function () {
        __.string.quote('Light').should.be.equal('"Light"');
    });

    it('reverse', function () {
        __.string.reverse('Batman').should.be.equal('namtaB');
    });

    it('serialize', function () {
        __.string.serialize({ batman: 'hero' }).should.be.equal('batman=hero');
    });

    it('slugfy', function () {
        __.string.slugfy('It\'s over now, Thor. I have your Mjölnir!').should.be.equal('it-s-over-now-thor-i-have-your-mjolnir');
    });

    it('swapcase', function () {
        __.string.swapcase('DC Comics').should.be.equal('dc cOMICS');
    });

    it('surround', function () {
        __.string.surround('hello', '--').should.be.equal('--hello--');
    });

    it('unquote', function () {
        __.string.unquote('"Light"').should.be.equal('Light');
    });

});
