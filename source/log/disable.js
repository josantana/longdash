//  Namespace: __
//  Module: log
//  Method: disable

exports.disable = function () {
    __.memory.localStorage.delete('DEV_MODE');
    enabled = false;
};
