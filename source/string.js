
//  Namespace: __
//  Module: string

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.string = (function ()
    {
        var exports = {},
            methods = [
                'camelCase', 'capitalize', 'deburr', 'endsWith', 'escape',
                'escapeRegExp', 'kebabCase', 'pad', 'padLeft', 'padRight',
                'parseInt', 'repeat', 'snakeCase', 'startCase', 'startsWith',
                'template', 'trim', 'trimLeft', 'trimRight', 'trunc',
                'unescape', 'words'
            ];

        // Helpers

        //import("string/convert.js");
        //import("string/characters.js");

        // Methods

        //import("string/camelcase.js");
        //import("string/count.js");
        //import("string/md5.js");
        //import("string/quote.js");
        //import("string/reverse.js");
        //import("string/serialize.js");
        //import("string/slugfy.js");
        //import("string/surround.js");
        //import("string/swapcase.js");
        //import("string/unquote.js");

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend(root.__, module);

}).call(this);
