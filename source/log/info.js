//  Namespace: __
//  Module: log
//  Method: info

exports.info = function (message) {
    if (enabled && message) { console.info(message); }
};
