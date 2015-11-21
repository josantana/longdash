//  Namespace: __
//  Module: log
//  Method: enable

exports.enable = function () {
    __.memory.localStorage.set('DEV_MODE', true, 1, 'day');
    enabled = true;
};
