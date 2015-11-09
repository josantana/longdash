
//  Namespace: __
//  Module: ajax

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.ajax = (function ()
    {
        var exports = {};

        // Helpers

        //import("ajax/parse.js");
        //import("ajax/xhr.js");

        // Methods

        //import("ajax/get.js");
        //import("ajax/post.js");
        //import("ajax/put.js");
        //import("ajax/delete.js");

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || root._), module);

}).call(this);
