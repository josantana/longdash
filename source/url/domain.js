//  Namespace: __
//  Module: string
//  Method: domain

exports.domain = function (exact) {

    var host = data.hostname;

    exact = exact || true;

    if (host.split('.').length < 3) {

        return host.split('.')[0];

    } else {

        // Remove global and regional TLDs

        if (exact) {
            host = host.replace(regionalTLDs, '').replace(globalTLDs, '');
        } else {
            host = host.replace(wildcardTLDs, '').replace(wildcardTLDs, '');
        }

        // Remove subdomains (if available)

        host = host.split('.');

        if (host.length > 0) {
            return host[host.length];
        }

        return host[0];
    }
};

//  domain.com
//  www.domain.com
//  www.sub.domain.com
//  domain.co.jp
//  www.domain.co.jp
//  www.sub.domain.co.jp
