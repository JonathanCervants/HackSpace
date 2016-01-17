

//miServer js

var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

app.get('/', function (req,res){
	res.send("My first server with NodeJS!");
})

app.get('/nombre', function (req,res){
	res.send('Jonathan Jesús');
})

app.get('/edad', function (req,res){
	res.send('22');
})

var generarUsuario = function(){
	var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomImage = faker.image.avatar();
	return {
		nombre : randomName,
		email : randomEmail,
		imagen : randomImage
	}
}
app.get('/friends', function (req,res){
	var cantidad = _.random(2,3)
	var usuarios = _.times(cantidad, generarUsuario)
	res.json(usuarios);
})

app.get('/amigos', function (req,res){
	res.send('Mis amigos');
})


app.listen(3000);