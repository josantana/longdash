
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
        //import("dom/classlist/many.js");
        //import("dom/classlist/arrays.js");

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || root._), module);

}).call(this);
