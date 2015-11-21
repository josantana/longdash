//  Namespace: __
//  Module: log
//  Method: warn

exports.warn = function (message) {
    if (enabled && message) { console.warn(message); }
};
