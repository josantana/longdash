
describe('Memory', function () {

    it('cookie.set', function () {
        __.memory.cookie.set('memory', 'test', 1, 'minute');
        __.memory.cookie.get('memory').should.be.equal('test');
    });

    it('cookie.get', function () {
        __.memory.cookie.get('memory').should.be.equal('test');
    });

    it('cookie.delete', function () {
        __.memory.cookie.delete('memory');
        expect(__.memory.cookie.get('memory')).to.be.empty;
    });

    it('localstorage.set', function () {
        __.memory.localStorage.set('memory', 'test', 1, 'minute');
        __.memory.localStorage.get('memory').should.be.an('object');
    });

    it('localstorage.get', function () {
        __.memory.localStorage.get('memory').value.should.be.equal('test');
    });

    it('localstorage.delete', function () {
        __.memory.localStorage.delete('memory');
        expect(__.memory.localStorage.get('memory')).to.be.null;
    });

});
