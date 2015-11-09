//  Namespace: __
//  Module: string
//  Method: swapcase

exports.swapcase = function (string) {
    
    string = convert(string);

    return string.replace(/\S/g, function (character) {
        return character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
    });

};