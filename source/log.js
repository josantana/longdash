
//  Namespace: __
//  Module: log

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.log = (function ()
    {
        var exports = {};

        // Helpers

        //import("log/setup.js");
        //import("log/enable.js");
        //import("log/disable.js");

        // Methods

        //import("log/info.js");
        //import("log/trace.js");
        //import("log/warn.js");
        //import("log/error.js");
        //import("log/group.js");
        //import("log/ungroup.js");

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || root._), module);

}).call(this);
