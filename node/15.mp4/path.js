const path = require('path');

var str = 'c:\\wamp\\www\\a.html';

var obj = path.parse(str);

// basename
// extname
// path
// pathname
console.log(obj);