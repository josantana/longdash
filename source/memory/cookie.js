//  Namespace: __
//  Module: memory
//  Method: cookie

exports.cookie = {

    // Set a new cookie

    set: function (name, value, time, unit) {

        var expires;

        if (time) {
            expires = '; expires=' + timestamper(time, unit);
        } else {
            expires = '';
        }

        // Set value/timestamp cookie

        document.cookie = name + '-expires=' + timestamper(time, unit) + '; path=/';
        document.cookie = name + '=' + value + expires + '; path=/';

        console.log('LONGDASH: Memory: "' + name + '" [CREATED with cookies]');
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

        exports.set(name + '-expires', '', -1);
        exports.set(name, '', -1);

        console.log('LONGDASH: Memory: "' + name + '" [DELETED from cookies]');
    }
};
