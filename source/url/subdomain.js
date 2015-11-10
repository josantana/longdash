//  Namespace: __
//  Module: string
//  Method: subdomain

exports.subdomain = function () {

    var host = data.hostname;

    if (host.split('.').length < 3) {

        return host.split('.')[0];

    } else {

        // Remove global and regional TLDs

        host = host.replace(regionalTLDs, '').replace(globalTLDs, '');

        // Remove subdomains (if available)

        host = host.split('.').shift();

        return host;
    }
};
