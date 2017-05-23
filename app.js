//Express Server

const express = require('express');
const app = express();
const router = express.Router;

app.use(express.static('public'));

app.get('/', () => {
    res.sendfile('./public/index.html');
});

app.listen(8080);