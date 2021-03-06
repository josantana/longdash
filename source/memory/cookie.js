//  Namespace: __
//  Module: memory
//  Method: cookie

exports.cookie = {

    // Set a new cookie

    set: function (name, value, time, unit) {

        var value = '=' + value + ';',
            expiresValue = timestamper(time, unit),
            expires = time ? ('expires=' + expiresValue + ';') : '',
            path = 'path=/;',
            domain = 'domain=' + (__.url.domain() === 'localhost' ? 'localhost' : ('.' + __.url.domain() + '.' + __.url.tld())) + ';';

        // Set value/timestamp cookie

        expiresValue = '=' + expiresValue + ';';

        document.cookie = name + value + expires + path + domain;
        document.cookie = name + '-expires' + expiresValue + expires + path + domain;

        if (time !== -1) { __.log.info('LONGDASH: Memory: "' + name + '" [CREATED with cookies]'); }
    },

    // Return the cookie

    get: function (name, inside) {

        var i,
            data = {},
            expirationName = name + '-expires=',
            realName = name + '=',
            cookies = document.cookie.split(';');

        for (i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i];

            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }

            // Get expiration datetime

            if (cookie.indexOf(expirationName) === 0) {
                data.timestamp = cookie.substring(expirationName.length, cookie.length);
            }

            // Get value

            if (cookie.indexOf(realName) === 0) {
                data.value = cookie.substring(realName.length, cookie.length);
                return inside ? data : data.value;
            }
        }

        return null;
    },

    // Delete a cookie

    delete: function (name) {

        // Delete both cookies

        exports.cookie.set(name, '', -1);

        __.log.warn('LONGDASH: Memory: "' + name + '" [DELETED from cookies]');
    }
};
