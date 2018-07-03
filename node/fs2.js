var fs = require('fs');

fs.writeFile('bbb.txt', 'afdsfsad', function (err, data) {
    console.log(data);
});