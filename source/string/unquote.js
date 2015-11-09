//  Namespace: __
//  Module: string
//  Method: unquote

exports.unquote = function (string) {

    if (root._.startsWith(string, '"' || "'") && root._.endsWith(string, '"' || "'")) {
        return string.slice(1, string.length - 1);
    } else {
        return string;
    }

};
