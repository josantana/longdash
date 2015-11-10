//  Namespace: __
//  Module: string
//  Method: TLD

exports.tld = function (exact) {

    var i,
        match,
        host = data.hostname,
        tlds = [];

    exact = exact || true;

    if (host.split('.').length < 3) {

        return host.split('.')[0];

    } else {

        var parts = host.split('.').reverse();

        // Get global and regional TLDs

        if (exact) {

            for (i = 0; i < parts.length; i++) {

                var part = ('.' + parts[i]);

                match = part.match(regionalTLDs) || part.match(globalTLDs);

                if (match) {
                    tlds.push(match[0].replace('.', ''));
                }

                if (tlds.length > 1) break;
            }

        } else {

            for (i = 0; i < parts.length; i++) {

                match = ('.' + parts[i]).match(wildcardTLDs);

                if (match) {
                    tlds.push(match[0].replace('.', ''));
                }

                // Break if the elements has more than 4 letters (probably, a domain name)

                if (tlds.length > 1 || parts[i].length > 4) break;
            }

        }

        return tlds;
    }
};

//  domain.com
//  www.domain.com
//  www.sub.domain.com
//  domain.co.jp
//  www.domain.co.jp
//  www.sub.domain.co.jp
