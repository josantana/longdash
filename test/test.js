function isOdd (val) {
    return val % 2 === 1;
}

test('isOdd()', function() {
    ok(isOdd(1), 'One is an odd number');
    ok(isOdd(3), 'Three is an odd number');
    ok(!isOdd(0), 'Zero is not odd number');
});
