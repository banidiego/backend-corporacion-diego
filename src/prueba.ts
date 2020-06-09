var express = require('express');
var app = express();

var Url: string;

app.get('/', function (req: any, res: any) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  Url = fullUrl;
  res.send(fullUrl);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(app.settings.env);
});
