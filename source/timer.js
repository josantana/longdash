
//  Namespace: __
//  Module: timer

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.timer = (function ()
    {
        var exports = {};

        // Inner Methods

        //import("timer/start.js");
        //import("timer/stop.js");
        //import("timer/tick.js");

        // Main Method

        //import("timer/set.js");

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || {}), module);

}).call(this);
