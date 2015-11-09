//  Namespace: __
//  Module: string
//  Method: count

exports.count = function (string, substring, caseInsensitive) {

    string = convert(string);
    substring = convert(substring);
    caseInsensitive = caseInsensitive || false;

    var result;

    if (string.length === 0 || substring.length === 0) {
        return 0;
    }

    if (caseInsensitive) {
        result = string.toLowerCase().split(substring.toLowerCase()).length - 1;
    } else {
        result = string.split(substring).length - 1;
    }

    return result;

};
