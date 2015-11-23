
//  Namespace: __
//  Module: math

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.math = (function ()
    {
        var exports = {},
            methods = [ 'add', 'ceil', 'floor', 'max', 'min', 'round', 'sum' ];

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || {}), module);

}).call(this);
