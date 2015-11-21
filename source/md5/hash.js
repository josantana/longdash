//  Namespace: __
//  Module: MD5
//  Method: return

hash = function (string) {

    var blocks = hasUTF8(string) ? new UTF8toBlocks(string) : new ASCIItoBlocks(string),
        h0 = 0x67452301,
        h1 = 0xEFCDAB89,
        h2 = 0x98BADCFE,
        h3 = 0x10325476;

    for (var i = 0, length = blocks.length;i < length;i += 16) {
        var a = h0,
            b = h1,
            c = h2,
            d = h3,
            f, g, tmp, x, y;

        for (var j = 0; j < 64; ++j) {

            if (j < 16) {
                // f = (b & c) | ((~b) & d);
                f = d ^ (b & (c ^ d));
                g = j;
            } else if (j < 32) {
                // f = (d & b) | ((~d) & c);
                f = c ^ (d & (b ^ c));
                g = (5 * j + 1) % 16;
            } else if (j < 48) {
                f = b ^ c ^ d;
                g = (3 * j + 5) % 16;
            } else {
                f = c ^ (b | (~d));
                g = (7 * j) % 16;
            }

            tmp = d;
            d = c;
            c = b;

            // leftrotate
            x = (a + f + K[j] + blocks[i + g]);
            y = R[j];
            b += (x << y) | (x >>> (32 - y));
            a = tmp;
        }

        h0 = (h0 + a) | 0;
        h1 = (h1 + b) | 0;
        h2 = (h2 + c) | 0;
        h3 = (h3 + d) | 0;
    }

    return toHexString(h0) + toHexString(h1) + toHexString(h2) + toHexString(h3);
};
