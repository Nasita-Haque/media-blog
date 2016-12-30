const postRoutes = require('express').Routes()
const sequelize = require('../models/index.js');
const models = require('../models');

let getPost = ((req, res)=>{
	models.Post.findAll({
		include: [models.Comment],
		include: [models.Prefecture],
		include: [models.Tag]
	})
	.then((post)=>{
		res.send(post);
	})
	.catch((error)=>{
		res.error('Error =>', error)
	})
});

let postPost = ((req, res)=>{
	models.Post.create({
		title: req.body.title
		body: req.body.body
	})
})

let deletePost = 





