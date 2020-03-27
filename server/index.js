const express = require('express');
const path = require('path');

const port = 3000 || process.env.PORT;

const app = express();


app.use('/', express.static(path.join(__dirname, './../client/dist')));

app.get('/api/test', (req, res) => {


  res.end();
})

app.listen(port, ()=> (console.log('listening to port: ', port)));
