//  Namespace: __
//  Module: string
//  Method: TLDs

var globalTLDs = new RegExp(/\.(asia|aero|arpa|biz|com|co|edu|gov|guru|info|int|jobs|mil|mobi|name|net|org|pro|site|tel|work|web)(?:\.|$)/g),
    regionalTLDs = new RegExp(/\.(ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cw|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|krd|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zr|zw)$/g),
    wildcardTLDs = new RegExp(/\.(([a-z]{2,4})|()\.[a-z]{2,3})(?:\.|$)/g);

// regionalTLDs  = /\.(ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az)/;
// regionalTLDs += /\.(ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz)/;
// regionalTLDs += /\.(ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cw|cx|cy|cz)/;
// regionalTLDs += /\.(dd|de|dj|dk|dm|do|dz)/;
// regionalTLDs += /\.(ec|ee|eg|eh|er|es|et|eu)/;
// regionalTLDs += /\.(fi|fj|fk|fm|fo|fr)/;
// regionalTLDs += /\.(ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy)/;
// regionalTLDs += /\.(hk|hm|hn|hr|ht|hu)/;
// regionalTLDs += /\.(id|ie|il|im|in|io|iq|ir|is|it)/;
// regionalTLDs += /\.(je|jm|jo|jp)/;
// regionalTLDs += /\.(ke|kg|kh|ki|km|kn|kp|kr|krd|kw|ky|kz)/;
// regionalTLDs += /\.(la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly)/;
// regionalTLDs += /\.(ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz)/;
// regionalTLDs += /\.(na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz)/;
// regionalTLDs += /\.(om)/;
// regionalTLDs += /\.(pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py)/;
// regionalTLDs += /\.(qa)/;
// regionalTLDs += /\.(re|ro|rs|ru|rw)/;
// regionalTLDs += /\.(sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz)/;
// regionalTLDs += /\.(tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz)/;
// regionalTLDs += /\.(ua|ug|uk|us|uy|uz)/;
// regionalTLDs += /\.(va|vc|ve|vg|vi|vn|vu)/;
// regionalTLDs += /\.(wf|ws)/;
// regionalTLDs += /\.(ye|yt|yu)/;
// regionalTLDs += /\.(za|zm|zr|zw)/;
