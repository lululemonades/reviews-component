const express = require('express');
//const axios = require('axios');
//const path = require('path')

const app = express();
app.use('/', express.static('./public'));
// app.use(express.static('../dist'))

// app.get('/hello', function(req, res){
//   res.send('gets work');
// })

app.listen(3000, () => console.log('Listening on port 3000....'));