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

                match = '.' + (parts[i].match(regionalTLDs) || parts[i].match(globalTLDs));

                console.log(parts[i], parts[i].match(regionalTLDs));
                console.log(parts[i], parts[i].match(globalTLDs));

                if (match) {
                    tlds.push(match.replace('.', ''));
                }

                console.log(tlds);

                if (tlds.length > 1) break;
            }

        } else {

            for (i = 0; i < parts.length; i++) {

                match = '.' + parts[i].match(wildcardTLDs);

                if (match) {
                    tlds.push(match);
                }

                if (tlds.length > 1) break;
            }

        }

        return tlds;
    }




    // var exact = exact || true,
    //     host = data.hostname,
    //     hostArr = response.split('.');
    //
    // if (responseArr.length < 3) {
    //
    //     // return responseArr[1];
    //
    // } else {
    //
    //     // Global and regional TLDs
    //
    //     // response.replace(globalTLDs, '').replace(regionalTLDs, '');
    //     //
    //     // if (!exact) {
    //     //     response.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), '');
    //     // }
    //     //
    //     // return response;
    //
    //     // for (var i = (responseArr.length - 1); i >= 0; i--) {
    //     //     console.log(responseArr[i], responseArr[i].match(regionalTLDs));
    //     //     if (responseArr[i].match(regionalTLDs)) {
    //     //         console.log('MATCH');
    //     //     }
    //     // }
    // }







    // if (response.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
    //     return response.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))[0].replace(new RegExp(/^\./i), '');
    // } else if (response.match(new RegExp(/\.[a-z]{2,4}$/i))) {
    //     return response.match(new RegExp(/\.[a-z]{2,4}$/i))[0].replace(new RegExp(/^\./i), '');
    // }
    //
    // return null;
};

//  domain.com
//  www.domain.com
//  www.sub.domain.com
//  domain.co.jp
//  www.domain.co.jp
//  www.sub.domain.co.jp
