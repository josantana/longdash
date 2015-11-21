//  Namespace: __
//  Module: timer
//  Method: start

var start = function (time, unit) {

    var instance = this,
        tack = instance.tack;

    instance.enabled = true;

    if (instance.enabled) {
        instance.id = setInterval(tack, moment.duration(time, unit)._milliseconds);
    }

};
