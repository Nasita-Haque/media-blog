const postRoutes = require('express').Router();
const sequelize = require('../models/index.js');
const models = require('../models');

//Get all posts
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
		res.status(500).send('Error. Check routes.')
		console.log('Error=>', error)
	})
});


//Get all posts from a user 
let getUserPost = ((req, res)=>{
	models.Post.findAll({
		where: {UserId: req.params.userId},
		include: [{model: models.Comment}],
		include: [{model: models.Prefecture}],
		include: [{model: models.Tag}]
	})
	.then((post)=>{
		res.send(post)
	})
	.catch((error)=>{
		res.status(500).send('Error. Check routes.')
		console.log('Error=>', error)
	})
})


//Create a post under a user: 
	// title:
	// userId:
	// prefecture:
	// body:
	// tag:
let postPost = ((req, res)=>{
	let postId; 
	models.Prefecture.findOrCreate({
		where: {
			prefecture: req.body.prefecture
		}
	})
	.then((prefecture)=>{
		return models.Post.create({
			title: req.body.title,
			body: req.body.body,
			UserId: req.body.userId,
			PrefectureId: prefecture[0].id
		})
	})
	.then((post)=>{
		console.log('post=>', post)
		 postId = post.id
	})
	.then(()=>{
		console.log('postId=>', postId)
		models.Tag.findOrCreate({
			where: {
				tag: req.body.tag,
				PostId: postId
			}
		})
	})
	.then(()=>{
		res.status(200).send('Post successfully created.')
	})
	.catch((error)=>{
		res.status(500).send('Error. Check routes.')
		console.log('Error=>', error)
	})
});


//Delete a user post
let deletePost = ((req, res)=>{
	models.Post.destroy({
		where: {
			id: req.params.id
		}
	})
})

postRoutes.route('/')
	.get(getPost)
	.post(postPost)

postRoutes.route('/:userId')
	.get(getUserPost)

postRoutes.route('/:id')
	.delete(deletePost)


module.exports = postRoutes; 




