
//  Namespace: __
//  Module: function

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.function = (function ()
    {
        var exports = {},
            methods = [
                'after', 'ary', 'backflow', 'before', 'bind', 'bindAll',
                'bindKey', 'compose', 'curry', 'curryRight', 'debounce',
                'defer', 'delay', 'flow', 'flowRight', 'memoize', 'modArgs',
                'negate', 'once', 'partial', 'partialRight', 'rearg',
                'restParam', 'spread', 'throttle', 'wrap'
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

    root.__.func = root.__.function;

}).call(this);
