//  Namespace: __
//  Module: log
//  Method: trace

exports.trace = function (object) {
    if (enabled && object) { console.trace(object); }
};
