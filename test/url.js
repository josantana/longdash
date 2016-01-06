
describe('URL', function () {

    it('address', function () {
        __.url.address().should.be.equal('http://localhost:8000/test/?testing=1#tests');
    });

    it('domain', function () {
        __.url.domain().should.be.equal('localhost');
    });

    it('hash', function () {
        __.url.hash().should.be.equal('tests');
    });

    it('isExternal', function () {
        __.url.isExternal(__.dom.get('#test a').href).should.be.true;
    });

    it('param', function () {
        __.url.param('testing').should.be.equal('1');
    });

    it('path', function () {
        __.url.path().should.be.equal('test');
    });

    it('protocol', function () {
        __.url.protocol().should.be.equal('http');
    });

    it('search', function () {
        __.url.search().should.be.equal('testing=1');
    });

});
