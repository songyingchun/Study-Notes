const zlib = require('zlib');

const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('js/2.js');
const out = fs.createWriteStream('output/2.js.gz');

inp.pipe(gzip).pipe(out);