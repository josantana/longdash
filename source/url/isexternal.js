//  Namespace: __
//  Module: string
//  Method: hash

exports.isExternal = function (string) {
    return string.match(data.hostname) ? true : false;
};
