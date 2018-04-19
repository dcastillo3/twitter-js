const express = require( 'express' );
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application

app.use('./', function (req, res, next) {
     res.send(200)
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})


app.use('/volleyball', function(req,res,next){
    res.send('You reached the special area!')
 });
// app.get('/volleyball', (req, res) => res.send('You reached the special area!'))

//this is a change
//this is another change added here.

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log(chalk.green('Twitter-js listening on port 3000!')))

