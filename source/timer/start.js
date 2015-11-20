//  Namespace: __
//  Module: timer
//  Method: start

var start = function (time, unit) {

    var tack = this.tack;
    this.enabled = true;

    if (this.enabled) {
        this.id = setInterval(tack, moment.duration(time, unit)._milliseconds);
    }

};
