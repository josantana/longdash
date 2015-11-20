//  Namespace: __
//  Module: timer
//  Method: stop

var stop = function () {

    this.enabled = false;
    clearInterval(this.id);

};
