//  Namespace: __
//  Module: memory
//  Method: set

exports.set = function (name, value, time, unit) {

    if (value) {
        exports[storageType].set(name, value, time, unit);
    } else {
        __.log.warn('LONGDASH: Memory: Can\'t store empty data.');
        return false;
    }
};
