//  Namespace: __
//  Module: log
//  Method: trace

exports.trace = function (message) {
    if (enabled && message) { console.trace(message); }
};
