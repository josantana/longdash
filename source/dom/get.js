//  Namespace: __
//  Module: dom
//  Method: get

exports.get = function (selector) {

    if (selector) {
        var response = document.querySelectorAll(selector);
        return (response.length > 1) ? response : response[0];
    }
};
