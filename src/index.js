const express = require('express');
const app = express();
const path = require('path')

app.set('port', 4000)//colocamos el puerto a donde se va a conectar
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs');//manejador de vistas para fronted
app.set('views', path.join(__dirname, 'views'))//direccion de consulta para frontend

//settings

app.get('/', (req, res) => {
    res.render('index.html', { title: 'First website' })
})
//Middlewares


//routes

app.use(require('./routes/index'));
//static file

//Listening
app.listen(app.get('port'), () => {
    console.log("Bienvenido al servidor", app.get('port'))
});