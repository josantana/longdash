
//  Namespace: __
//  Module: chain

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.chain = (function ()
    {
        var exports = {},
            methods = [ 'chain', 'tap', 'thru' ];

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend(root.__, module);

}).call(this);
