var express = require('express');
var router = express.Router();

var photos = [];
photos.push({
    name: 'Node.js Logo',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
});

photos.push({
    name: 'Ryan Speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

router.get('/', function (req, res, next) {
    res.render('photos', {
        title: 'photos',
        photos: photos
    });
});

module.exports = router;