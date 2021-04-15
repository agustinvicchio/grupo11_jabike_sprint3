const express = require('express');
const color = require('colors');
const path = require('path');
const app = express();




//Config
app.use(express.static('public'));

app.set('view engine', 'ejs');

//Rutas
app.get('/', (req, res) => {
   res.render('index');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/carrito', (req, res) => {
    res.render('carrito')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});


//Levantamos servidor y por si nos dan un puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log("Server on port".trap.random, app.get('port'));