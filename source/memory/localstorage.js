//  Namespace: __
//  Module: memory
//  Method: localstorage

exports.localStorage = {

    // Set a new data on localStorage

    set: function (name, value, time, unit) {

        try {

            window.localStorage.setItem(name, JSON.stringify({
                'value': value,
                'timestamp': timestamper(time, unit)
            }));

        } catch (e) {}

        __.log.info('LONGDASH: Memory: "' + name + '" [CREATED with localStorage]');
    },

    // Return localStorage data

    get: function (name) {

        var data = window.localStorage.getItem(name);

        if (data) {

            data = JSON.parse(data);

            var now = moment().unix(),
                exp = data.timestamp;

            if (exp > now) {
                return data;
            } else {
                __.log.warn('LONGDASH: Memory: "' + name + '" has expired.');
                exports.delete(name);
                return null;
            }

        } else {
            return null;
        }
    },

    // Detele localStorage data

    delete: function (name) {

        window.localStorage.removeItem(name);
        __.log.warn('LONGDASH: Memory: "' + name + '" [DELETED from localStorage]');
    }
};
