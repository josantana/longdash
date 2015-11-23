
//  Namespace: __
//  Module: memory

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.memory = (function ()
    {
        var exports = {};

        // Helpers

        //import("memory/type.js");
        //import("memory/timestamper.js");

        // Methods

        //import("memory/set.js");
        //import("memory/get.js");
        //import("memory/delete.js");
        //import("memory/cookie.js");
        //import("memory/localstorage.js");

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || {}), module);

    // Shortcut

    root.__.mem = root.__.memory;

}).call(this);
