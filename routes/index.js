var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.writeHead(200,{'Content-Type':'application/json'});
    var json = fs.createReadStream('../json/json.json');
    json.pipe(res);
});

module.exports = router;
