//  Namespace: __
//  Module: string
//  Method: surround

exports.surround = function (string, wrapper) {

    string = convert(string);

    return [wrapper, string, wrapper].join('');

};
