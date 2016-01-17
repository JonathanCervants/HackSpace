var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');



var generarUsuario = function(){
	var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomCity = faker.address.city();
	var randomCompany = faker.company.companyName();
	var randomPhone= faker.phone.phoneNumber();
	
	return {
		nombre : randomName,
		email : randomEmail,
		city : randomCity,
		company : randomCompany,
		phone : randomPhone
		
	}
}

var generarPost = function(){
	var randomID = faker.random.uuid();
	var randomName = faker.name.findName();
	var randomContenido = faker.lorem.sentence();
	var randomDate= faker.date.recent();
	var randomImage = faker.image.avatar();
	return {
		id : randomID,
		nombre : randomName,
		contenido : randomContenido,
		date : randomDate,
		image : randomImage
	}
} 


app.get('/users', function (req,res){
	var cantidad = _.random(5,8)
	var usuarios = _.times(cantidad, generarUsuario)
	res.json(usuarios);
})

app.get('/posts', function (req,res){
	var cantidad = _.random(4,6)
	var posts = _.times(cantidad, generarPost)
	res.json(posts);
})


app.listen(3000);