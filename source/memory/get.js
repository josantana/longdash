//  Namespace: __
//  Module: memory
//  Method: get

exports.get = function (name) {

    var data = exports[storageType].get(name, true);

    if (data) {

        // Hold default locale settings
        var tmpMomentLocale = moment.locale();
        moment.locale('en');

        __.log.info('LONGDASH: Memory: "' + name + '" will expire ' + moment().add(data.timestamp - moment().unix(), 'seconds').fromNow() + ' from ' + storageType + '.');

        // Return to the default locale settings
        moment.locale(tmpMomentLocale);

        return data.value;

    } else {
        return null;
    }
};
