//  Namespace: __
//  Module: log
//  Method: error

exports.error = function (message) {
    if (enabled && message) { console.error(message); }
};
