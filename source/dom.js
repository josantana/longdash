
//  Namespace: __
//  Module: dom

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.dom = (function ()
    {
        var exports = {};

        // Methods

        //import("dom/get.js");
        //xmport("dom/classlist/many.js");
        //xmport("dom/classlist/arrays.js");

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || {}), module);

}).call(this);
