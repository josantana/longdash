//  Namespace: __
//  Module: timer
//  Method: start

exports.set = function (instance, callback) {

    // Enables our helper methods on this new instance

    this[instance] = (function ()
    {
        var exports = {};

        exports.start = start;
        exports.stop = stop;
        exports.tick = tick;
        exports.tack = callback || null;

        return exports;

    })();

};
