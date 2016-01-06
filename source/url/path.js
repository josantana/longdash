//  Namespace: __
//  Module: string
//  Method: path

exports.path = function () {
    var path = data.pathname;

    // Removes initial/final slash

    if (root._.startsWith(path, '/')) {
        path = path.slice(1);
    }

    if (root._.endsWith(path, '/')) {
        path = path.slice(0, path.length - 1);
    }

    return path;
};
