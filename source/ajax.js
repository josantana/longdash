
//  Namespace: __
//  Element:   ajax

(function()
{
    'use strict';

    // Declare root variable - window in the browser, global on the server
    // Get already define BAT object (if available) or create a new object

    var root = this,
        module = {};

    module.ajax = (function ()
    {
        var exports = {};

        var parse = function (req) {
            var result;

            try {
                result = JSON.parse(req.responseText);
            } catch (e) {
                result = req.responseText;
            }

            return [result, req];
        };

        var xhr = function (type, options) {

            var methods = {
                success: function () {},
                error: function () {}
            };

            var XHR = function () {
                try {
                    return new window.XMLHttpRequest() || ActiveXObject;
                } catch (error) {};
            };

            var request = new XHR('MSXML2.XMLHTTP.3.0');

            // It options is a string, we assume it is the url

            if (typeof options === 'string') {

                var url = options;
                options = {};
                options.url = url;

            }

            // Remove hash and add protocol if not provided (prefilters might expect it)
            // We also use the url parameter if available

            options.url = ((options.url || location.href) + '').replace(/#.*$/, '').replace(/^\/\//, location.protocol + '//');

            // Open connection

            request.open(type, url, true);

            // If method is POST or PUT

            if (type.match(/POST|PUT/g)) {
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
            }

            // If we got headers, set them

            if (options.headers && options.headers.length) {

                for (var key in options.headers) {
                    request.setRequestHeader(key, options.headers[key]);
                }
            }

            // Set status response

            request.onreadystatechange = function () {

                if (request.readyState === 4) {
                    if (request.status >= 200 && request.status < 400) {
                        methods.success.apply(methods, parse(request));
                    } else {
                        methods.error.apply(methods, parse(request));
                    }
                }
            };

            request.send(options.data);

            var callbacks = {
                success: function (callback) {
                    methods.success = callback;
                    return methods;
                },
                error: function (callback) {
                    methods.error = callback;
                    return methods;
                }
            };

            return callbacks;
        };

        exports.get = function (options) {
            return xhr('GET', options);
        };

        exports.put = function (options) {
            return xhr('PUT', options);
        };

        exports.post = function (options) {
            return xhr('POST', options);
        };

        exports.delete = function (options) {
            return xhr('DELETE', options);
        };

        return exports;

    })();

    // Export module to root under(long)line object

    root.__ = root._.extend((root.__ || _), module);

}).call(this);
