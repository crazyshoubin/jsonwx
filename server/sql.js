/**
 * Created by liushoubin on 19/5/17.
 */
var http = require('http');
var fs = require('fs');
var url = require('./config').url;

http.get(url,function (res) {
    var html = '';

    res.on('data',function (data) {
        html += data;

    })
    res.on('end',function () {
        write(html);
    })
}).on('error',function () {
    console.log('shibai')
})

function write(data) {
    fs.writeFile('../json/json.json',data,function (err) {
        if(err){
            console.log(err)
        }else{
            console.log('写入成功')
        }
    })
}

