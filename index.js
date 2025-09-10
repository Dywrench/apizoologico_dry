const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000

/*
    el '/' viene siendo la ruta
    el get es verbos http
    requ es la solicitud, res es la respuesta 
*/
app.get('/',(req,res)=>{
        res.send('Hello World! ')
});

app.listen(port,() =>{
    console.log('la aplicacion se esta ejecutando por el puerto'+{port})
});