
//  Namespace: __
//  Module: collection

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.collection = (function ()
    {
        var exports = {},
            methods = [
                'all', 'any', 'at', 'collect', 'contains', 'countBy', 'detect',
                'each', 'eachRight', 'every', 'filter', 'find', 'findlast',
                'findWhere', 'foldl', 'foldr', 'forEach', 'forEachRight',
                'groupBy', 'include', 'includes', 'indexBy', 'inject', 'invoke',
                'map', 'partition', 'pluck', 'reduce', 'reduceRight', 'reject',
                'sample', 'select', 'shuffle', 'size', 'some', 'sortBy',
                'sortByAll', 'sortByOrder', 'where'
            ];

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend(root.__, module);

    // Shortcut

    root.__.col = root.__.collection;

}).call(this);
