//  Namespace: __
//  Module: string
//  Method: slugfy

exports.slugfy = function (string) {

    var fromChar = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž',
        toChar   = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz';

    fromChar += fromChar.toUpperCase();
    toChar   += toChar.toUpperCase();

    // Trim whitespaces and convert to lowercase

    var slug = root._.trim(convert(string)).toLowerCase();

    // Replace special characters

    slug = slug.replace(/.{1}/g, function (character) {
        var index = fromChar.indexOf(character);
        return index === -1 ? character : toChar[index];
    });

    // Replace everything else with dashes and remove duplicated dashes

    slug = slug.replace(/[-_\s]+/g, '-').replace(/[^\w\s-]/g, '-').replace(/-+/g,'-');

    // Remove trailing dash

    if (root._.endsWith(slug, '-')) {
        slug = slug.slice(0, slug.length - 1);
    }

    return slug;
};
