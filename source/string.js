
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
        var exports = {};

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

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || root._), module);

}).call(this);
