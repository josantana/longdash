
//  Namespace: __
//  Module: utility

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.utility = (function ()
    {
        var exports = {},
            methods = [
                'attempt', 'callback', 'constant', 'identity', 'iteratee',
                'matches', 'matchesProperty', 'method', 'methodOf', 'mixin',
                'noConflict', 'noop', 'property', 'propertyOf', 'range',
                'runInContext', 'times', 'uniqueId'
            ];

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend((root.__ || {}), module);

    // Shortcut

    root.__.util = root.__.utility;

}).call(this);
