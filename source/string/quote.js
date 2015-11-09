//  Namespace: __
//  Module: string
//  Method: quote

exports.quote = function (string, quote) {

    return exports.surround(string, quote || '"');

};
