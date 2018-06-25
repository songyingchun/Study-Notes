var connect = require('connect');
var app = connect();
app.use('/foo', function fooMiddleware(req, res, next) {
    // req.url starts with "/foo"
    console.log('req.url starts with "/foo"');
    next();
});
app.use('/bar', function barMiddleware(req, res, next) {
    // req.url starts with "/bar"
    console.log('req.url starts with "/bar"');
    next();
});
app.listen(3000);
