//  Namespace: __
//  Module: string
//  Method: serialize

exports.serialize = function (obj) {

    var data = '';

    for (var key in obj) {
        data += key + '=' + encodeURIComponent(obj[key]) + '&';
    }

    data = data.slice(0,-1);

    return data;

};
