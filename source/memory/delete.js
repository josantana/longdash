//  Namespace: __
//  Module: memory
//  Method: delete

exports.delete = function (name) {
    exports[storageType].delete(name);
};
