
var express = require('express');
var app = express();
process.env.NODE_ENV = 'development';
app.get('/', function (req, res) {
  res.send('hola mundo automatizando todo david');
});

app.listen(3000, function () {
  console.log('servidor en puerto 3000!');
});
