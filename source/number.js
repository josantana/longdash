
//  Namespace: __
//  Module: number

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.number = (function ()
    {
        var exports = {},
            methods = [ 'inRange', 'random' ];

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend(root.__, module);

    // Shortcut

    root.__.num = root.__.number;

}).call(this);
