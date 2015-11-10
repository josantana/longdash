//  Namespace: __
//  Module: string
//  Method: subdomain

exports.subdomain = function () {

    var response = data.hostname.split('.');

    if (response.length > 2) {
        response = response[0];
    } else {
        response = null;
    }

    return response;
};
