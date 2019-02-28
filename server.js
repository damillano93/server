
var express = require('express');
var app = express();
process.env.NODE_ENV = 'development';
app.get('/', function (req, res) {
  res.send('hola mddundo como estamos!');
});

app.listen(3000, function () {
  console.log('aplicacion en puerto 3000!');
});
