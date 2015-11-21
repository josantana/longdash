//  Namespace: __
//  Module: timer
//  Method: stop

var stop = function () {

    var instance = this;
    instance.enabled = false;

    clearInterval(instance.id);

};
