//  Namespace: __
//  Module: string
//  Method: hash

exports.isExternal = function (url) {
    return url.match(data.hostname) ? true : false;
};
