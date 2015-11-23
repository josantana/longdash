
//  Namespace: __
//  Module: collection

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.array = (function ()
    {
        var exports = {},
            methods = [
                'chunk', 'compact', 'difference', 'drop', 'dropRight',
                'dropRightWhile', 'dropWhile', 'fill', 'findIndex',
                'findLastIndex', 'first', 'flatten', 'flattenDeep', 'head',
                'indexOf', 'initial', 'intersection', 'last', 'lastIndexOf',
                'object', 'pull', 'pullAt', 'remove', 'rest', 'slice',
                'sortedIndex', 'sortedLastIndex', 'tail', 'take', 'takeRight',
                'takeRightWhile', 'takeWhile', 'union', 'uniq', 'unique',
                'unzip', 'unzipWith', 'without', 'xor', 'zip', 'zipObject',
                'zipWith'
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

    root.__.arr = root.__.array;

}).call(this);
