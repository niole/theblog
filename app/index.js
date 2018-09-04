const path = require('path');
const express = require('express')
const app = express()

app.use(express.static('static'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './index.html')));

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

app.listen(PORT, HOST, () => console.log(`serving at ${HOST}:${PORT}`));
