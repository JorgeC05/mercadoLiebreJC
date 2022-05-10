const express = require('express');
const res = require('express/lib/response');
const app = express();

const path = require('path');

const port = 4000;


// Utilizar la carpeta public
app.use(express.static('public'))

//rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});


// Servidor
app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
});