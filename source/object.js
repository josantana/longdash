
//  Namespace: __
//  Module: object

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.object = (function ()
    {
        var exports = {},
            methods = [
                'assign', 'create', 'defaults', 'defaultsDeep', 'extend',
                'findKey', 'findLastKey', 'forIn', 'forInRight', 'forOwn',
                'forOwnRight', 'functions', 'get', 'has', 'invert', 'keys',
                'keysIn', 'mapKeys', 'mapValues', 'merge', 'methops',
                'omit', 'pairs', 'pick', 'result', 'set', 'transform',
                'values', 'valuesIn'
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

    root.__.obj = root.__.object;

}).call(this);
