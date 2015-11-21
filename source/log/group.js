//  Namespace: __
//  Module: log
//  Method: group

exports.group = function (name) {
    if (enabled && name) { console.group(name); }
};
