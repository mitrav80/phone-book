const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static(path.join(__dirname, './') ));
app.get('/save', (req, res) => res.send('save'))