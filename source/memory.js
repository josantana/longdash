
//  Namespace: __
//  Element: memory

 (function()
 {
    'use strict';

    // Declare root variable - window in the browser, global on the server
    // Get already define BAT object (if available) or create a new object

    var root = window,
        module = {};

    module.memory = (function ()
    {
        var exports = {},
            storageType = ('localStorage' in window && window.localStorage !== null) ? 'localStorage' : 'cookie';

        // Method to export current datetime in Timestamp Unix

        var timestamper = function (time, unit) {
            return moment().add(time, unit).unix();
        };

        // Set a new data to be kept

        exports.set = function (name, value, time, unit) {

            if (value) {
                exports[storageType].set(name, value, time, unit);
            } else {
                console.log('LONGDASH: Memory: Can\'t store empty data.');
                return false;
            }
        };

        // Return data

        exports.get = function (name) {

            var data = exports[storageType].get(name, true);

            if (data) {

                // Hold default locale settings
                var tmpMomentLocale = moment.locale();
                moment.locale('en');

                console.log('LONGDASH: Memory: "' + name + '" will expire ' + moment().add(data.timestamp - moment().unix(), 'seconds').fromNow() + ' from ' + storageType + '.');

                // Return to the default locale settings
                moment.locale(tmpMomentLocale);

                return data.value;

            } else {
                return null;
            }
        };

        // Delete data

        exports.delete = function (name) {
            exports[storageType].delete(name);
        };

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

        exports.localStorage = {

            // Set a new data on localStorage

            set: function (name, value, time, unit) {

                try {

                    window.localStorage.setItem(name, JSON.stringify({
                        'value': value,
                        'timestamp': timestamper(time, unit)
                    }));

                } catch (e) {}

                console.log('LONGDASH: Memory: "' + name + '" [CREATED with localStorage]');
            },

            // Return localStorage data

            get: function (name) {

                var data = window.localStorage.getItem(name);

                if (data) {

                    data = JSON.parse(data);

                    var now = moment().unix(),
                        exp = data.timestamp;

                    if (exp > now) {
                        return data;
                    } else {
                        console.log('LONGDASH: Memory: "' + name + '" has expired.');
                        exports.delete(name);
                        return null;
                    }

                } else {
                    return null;
                }
            },

            // Detele localStorage data

            delete: function (name) {

                window.localStorage.removeItem(name);
                console.log('LONGDASH: Memory: "' + name + '" [DELETED from localStorage]');
            }
        };

        return exports;

    })();

    // Export module to root under(long)line object

    root.__ = root._.extend((root.__ || root._), module);

}).call(this);
