//  Namespace: __
//  Module: string
//  Method: param

exports.param = function (name, reverse) {

    var i,
        location = data.search,
        params = location.substring(1).split('&'),
        reverse = reverse || false;

    if (reverse) {
        params.reverse();
    }

    for (i = 0; i < params.length; i++) {

        var parts = params[i].split('=');

        if (name === parts[0]) {
           return parts[1];
        }
    }

    return null;
};
