const ejs = require('ejs');

ejs.renderFile('./views/6.ejs', {}, function (err, data) {
    console.log(data)
});

