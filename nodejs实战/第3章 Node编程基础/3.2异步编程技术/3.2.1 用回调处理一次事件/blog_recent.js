var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if(req.url == '/') {
        // fs.readFile('./title.json', function (err, data) {
        //     if(err) {
        //         console.log(err);
        //         res.end('Server Error.');
        //     }
        //     else {
        //         var titles = JSON.parse(data.toString());
        //         fs.readFile('./index.html', function (err, data) {
        //             if(err) {
        //                 console.log(err);
        //                 res.end('Server Error');
        //             }
        //             else{
        //                 var tmpl = data.toString();

        //                 var html = tmpl.replace('%', titles.join('</li></li>'));
        //                 res.writeHead(200, {
        //                     'Content-Type': 'text/html'
        //                 });
        //                 res.end(html);
        //             }
        //         });
        //     }
        // });
    } 
})

server.listen(8888);