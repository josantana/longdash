
/*!
 *      @namespace __
 *      @element   ajax
 *      @homepage  underlinejs.github.io
 *
 *      @status    beta
 *      @version   0.0.1
 *      @author    Jo Santana
 *      @license   Released under the MIT license
 *
 *      @usage:
 *
 *      __.ajax.get('/endpoint').success(function (data, xhr) { ... }).error(function (data, xhr) { ... });
 *      __.ajax.post('/endpoint', data).success(function (data, xhr) { ... }).error(function (data, xhr) { ... });
 *      __.ajax.put('/endpoint', data).success(function (data, xhr) { ... }).error(function (data, xhr) { ... });
 *      __.ajax.delete('/endpoint').success(function (data, xhr) { ... }).error(function (data, xhr) { ... });
 *
*/

(function()
{
    'use strict';

    // Declare root variable - window in the browser, global on the server
    // Get already define BAT object (if available) or create a new object

    var root = this,
    __ = root.__ || _.extend({}, _);

    __.ajax = (function ()
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

        var xhr = function (type, url, data, callback) {

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

            // Remove hash and add protocol if not provided (prefilters might expect it)
            // We also use the url parameter if available

            url = ((url || location.href) + '').replace(/#.*$/, '').replace(/^\/\//, location.protocol + '//');

            // Open connection

            request.open(type, url, true);

            // If method is POST or PUT

            if (type.match(/POST|PUT/g)) {
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
            }

            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status >= 200 && request.status < 400) {
                        methods.success.apply(methods, parse(request));
                    } else {
                        methods.error.apply(methods, parse(request));
                    }
                }
            };

            return {
                success: function (callback) {
                    methods.success = callback;
                    return methods;
                },
                error: function (callback) {
                    methods.error = callback;
                    return methods;
                }
            };
        };

        exports.get = function (url, callback) {
            return xhr('GET', url, null, callback);
        };

        exports.put = function (url, data) {
            return xhr('PUT', url, data);
        };

        exports.post = function (url, data) {
            return xhr('POST', url, data);
        };

        exports.delete = function (url) {
            return xhr('DELETE', url);
        };

        return exports;

    })();

}).call(this);
