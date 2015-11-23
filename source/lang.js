
//  Namespace: __
//  Module: lang

(function()
{
    'use strict';

    // Declare root variable

    var root = window,
        module = {};

    module.lang = (function ()
    {
        var exports = {},
            methods = [
                'clone', 'cloneDeep', 'eq', 'gt', 'gte', 'isArguments',
                'isArray', 'isBoolean', 'isDate', 'isElement', 'isEmpty',
                'isEqual', 'isError', 'isFinite', 'isFunction', 'isMatch',
                'isNaN', 'isNative', 'isNull', 'isNumber', 'isObject',
                'isPlainObject', 'isRegExp', 'isString', 'isTypeArray',
                'isUndefined', 'lt', 'lte', 'toArray', 'toPlainObject'
            ];

        // Inherit Lodash Methods

        for (var i = 0; i < methods.length; i++) {
            exports[methods[i]] = root._[methods[i]];
        }

        return exports;

    })();

    // Export module to root Longdash object

    root.__ = root._.extend(root.__, module);

}).call(this);
