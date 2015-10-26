
//  Namespace: __
//  Element: string

(function()
{
    'use strict';

    // Declare root variable - window in the browser, global on the server
    // Get already define BAT object (if available) or create a new object

    var root = window,
        module = {};

    module.string = (function ()
    {
        var exports = {};

        exports.serialize = function (obj) {

            var data = '';

            for (var key in obj) {
                data += key + '=' + encodeURIComponent(obj[key]) + '&';
            }

            data = data.slice(0,-1);

            return data;

        };

        exports.slugfy = function (string, noWhitespace) {

            var slug = string.toLowerCase();

            noWhitespace = noWhitespace ? noWhitespace : false;

            slug = slug.replace(new RegExp(/\s/g),'-');
            slug = slug.replace(new RegExp(/[àáâãäå]/g),'a');
            slug = slug.replace(new RegExp(/æ/g),'ae');
            slug = slug.replace(new RegExp(/ç/g),'c');
            slug = slug.replace(new RegExp(/[èéêë]/g),'e');
            slug = slug.replace(new RegExp(/[ìíîï]/g),'i');
            slug = slug.replace(new RegExp(/ñ/g),'n');
            slug = slug.replace(new RegExp(/[òóôõö]/g),'o');
            slug = slug.replace(new RegExp(/œ/g),'oe');
            slug = slug.replace(new RegExp(/[ùúûü]/g),'u');
            slug = slug.replace(new RegExp(/[ýÿ]/g),'y');

            if (noWhitespace) {
                slug = slug.replace(new RegExp(/\W/g),'');
            }

            return slug;
        }

        return exports;

    })();

    // Export module to root under(long)line object

    root.__ = root._.extend((root.__ || root._), module);

}).call(this);
