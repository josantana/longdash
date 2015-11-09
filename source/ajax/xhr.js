//  Namespace: __
//  Module: ajax
//  Method: xhr

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

    options.url = ((options.url || location.href) + '').replace(/#.*$/, '').replace(/^\/\//, location.protocol + '//');

    // Glue parameters

    if (options.params) {
        var glue = options.url.match(/\?/g) ? '&' : '?';
        options.url = options.url + glue + root.__.string.serialize(options.params);
    }

    // Open connection

    request.open(type, options.url, true);

    // If method is POST or PUT

    if (type.match(/POST|PUT/g)) {
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    // If we got headers, set them

    if (options.headers) {

        for (var key in options.headers) {
            request.setRequestHeader(key, options.headers[key]);
        }
    }

    // Set status response

    request.onreadystatechange = function () {

        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
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
            return callbacks;
        },
        error: function (callback) {
            methods.error = callback;
            return callbacks;
        }
    };

    return callbacks;
};
