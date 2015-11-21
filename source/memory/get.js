//  Namespace: __
//  Module: memory
//  Method: get

exports.get = function (name, logging) {

    var data = exports[storageType].get(name, true);

    logging = logging || true;

    if (data) {

        // Hold default locale settings
        var tmpMomentLocale = moment.locale();
        moment.locale('en');

        if (logging) {
            __.log.info('LONGDASH: Memory: "' + name + '" will expire ' + moment().add(data.timestamp - moment().unix(), 'seconds').fromNow() + ' from ' + storageType + '.');
        }

        // Return to the default locale settings
        moment.locale(tmpMomentLocale);

        return data.value;

    } else {
        return null;
    }
};
