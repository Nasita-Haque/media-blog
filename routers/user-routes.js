const userRoutes = require('express').Router()
const sequelize = require('../models/index.js');
const models = require('../models');

//Getting all user accounts
let getUsers = ((req, res)=>{
	models.User.findAll({
		include: [models.Post]
	})
	.then((post)=>{
		res.send(post);
	})
	.catch((error)=>{
		console.log('Error =>', error)
	})
});

//Creating user account
let postUsers = ((req, res)=>{
	models.User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	})
	.then((post)=>{
		res.send(post);
	})
	.catch((error)=>{
		console.log(error)
	})
});

//Deleting user account
let deleteUser = ((req, res)=>{
	models.User.destroy({
		where: {
			id: req.params.id
		}
	})
	.then((post)=>{
		res.sendStatus(200)
	})
	.catch((error)=>{
		console.log(error)
	})
});

userRoutes.route('/')
	.get(getUsers)
	.post(postUsers);

userRoutes.route('/:id')
	.delete(deleteUser)

module.exports = userRoutes;