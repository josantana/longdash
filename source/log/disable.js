//  Namespace: __
//  Module: log
//  Method: disable

exports.disable = function () {
    __.memory.delete('DEV_MODE');
};
