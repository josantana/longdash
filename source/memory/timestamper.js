//  Namespace: __
//  Module: memory
//  Method: timestamper

//  Method to export current datetime in Timestamp Unix

var timestamper = function (time, unit) {
    return moment().add(time, unit).unix();
};
