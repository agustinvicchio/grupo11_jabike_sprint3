const express = require('express');
const color = require('colors');
const path = require('path');
const app = express();
app.use(express.static('public'));





//Los gerentes de ruteo
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productosRouter');
const userRouter = require('./routes/userRouter');
//Config de engine y sistema de ruteo

app.set('view engine', 'ejs');



//llamado a rutas
app.use('/' , indexRouter);
app.use('/product' , productRouter);
app.use('/login' , userRouter);



//Rutas
/*
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

*/


//Levantamos servidor y por si nos dan un puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log("Server on port".trap.random, app.get('port'));