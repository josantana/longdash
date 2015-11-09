//  Namespace: __
//  Module: string
//  Method: camelcase

exports.camelcase = function (string) {
    
    string = convert(string);
    
    return root._.trim(string).replace(/[-_\s]+(.)?/g, function(match, character) {
        return character ? character.toUpperCase() : '';
    });

};