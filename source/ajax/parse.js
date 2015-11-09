//  Namespace: __
//  Module: ajax
//  Method: parse

var parse = function (req) {

    var result;

    try {
        result = JSON.parse(req.responseText);
    } catch (e) {
        result = req.responseText;
    }

    return [result, req];
};
