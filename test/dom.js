
describe('DOM', function () {

    it('get', function () {
        __.dom.get('#test').id.should.be.equal('test');
    });

    it('addMany', function () {
        __.dom.get('#test').classList.addMany('one two three');
        __.dom.get('#test').classList.length.should.be.equal(3);
    });

    it('removeMany', function () {
        __.dom.get('#test').classList.removeMany('one two three');
        __.dom.get('#test').classList.should.be.empty;
    });

    it('[ ].add', function () {
        __.dom.get('#test li').classList.add('tests');
        __.dom.get('.tests').length.should.be.equal(3);
    });

    it('[ ].remove', function () {
        __.dom.get('#test li').classList.remove('tests');
        expect(__.dom.get('.tests')).to.be.empty;
    });

    it('[ ].addMany', function () {
        __.dom.get('#test li').classList.addMany('multiple tests');
        __.dom.get('.tests').length.should.be.equal(3);
    });

    it('[ ].removeMany', function () {
        __.dom.get('#test li').classList.removeMany('multiple tests');
        expect(__.dom.get('.tests')).to.be.empty;
    });

    it('[ ].toggle', function () {
        __.dom.get('#test li').classList.toggle('tests');
        __.dom.get('.tests').length.should.be.equal(3);
        __.dom.get('#test li').classList.toggle('tests');
        expect(__.dom.get('.tests')).to.be.empty;
    });

});
