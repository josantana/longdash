//  Namespace: __
//  Module: dom
//  Method: classList.addMany/removeMany

var manyClassNames = function (element, method, tokens) {

    tokens = tokens.trim().split(' ');

    for (var i = 0; i < tokens.length; i++) {
        element[method](tokens[i]);
    }
};

DOMTokenList.prototype.addMany = function (tokens) {
    manyClassNames(this, 'add', tokens);
};

DOMTokenList.prototype.removeMany = function (tokens) {
    manyClassNames(this, 'remove', tokens);
};
