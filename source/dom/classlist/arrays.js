//  Namespace: __
//  Module: dom
//  Method: classList for Arrays

var ClassList = function (collection) {
    this.collection = collection;
};

var classListGetter = function () {
    return new ClassList(this);
};

var removeAttributeIfEmpty = function (element) {

    if (element.getAttribute('class') === '') {
        element.removeAttribute('class');
    }
};

var updateClassName = function (collection, method, token) {
    for (var i = 0; i < collection.length; i++) {

        // Perform classList method

        if (collection[i] instanceof Element) {
            collection[i].classList[method](token);
        }

        // Remove attribute if empty
        removeAttributeIfEmpty(collection[i]);
    }
};

ClassList.prototype.add = function (token) {
    updateClassName(this.collection, 'add', token);
};

ClassList.prototype.addMany = function (token) {
    updateClassName(this.collection, 'addMany', token);
};

ClassList.prototype.remove = function (token) {
    updateClassName(this.collection, 'remove', token);
};

ClassList.prototype.removeMany = function (token) {
    updateClassName(this.collection, 'removeMany', token);
};

ClassList.prototype.toggle = function (token, force) {
    for (var i = 0; i < this.collection.length; i++) {

        if (this.collection[i] instanceof Element) {

            // Toggle class

            var result = this.collection[i].classList.contains(token),
                method = result ? force !== true && 'remove' : force !== false && 'add';

            if (method) {
                this.collection[i].classList[method](token);
            }

            // Remove attribute if empty
            removeAttributeIfEmpty(this.collection[i]);
        }
    }
};

if (Object.defineProperty) {

    var propDesc = {
        get: classListGetter,
        enumerable: true,
        configurable: true
    };

    try {
        Object.defineProperty(Object.prototype, 'classList', propDesc);
    } catch (ex) { // IE 8 doesn't support enumerable:true
        if (ex.number === -0x7FF5EC54) {
            propDesc.enumerable = false;
            Object.defineProperty(Object.prototype, 'classList', propDesc);
        }
    }

} else if (Object.prototype.__defineGetter__) {
    Object.prototype.__defineGetter__('classList', classListGetter);
}
