const tagRoutes = require('express').Router();
const sequelize = require('../models/index.js');
const models = require('../models');

// Get all tags
let getTag = ((req, res)=>{
	models.Tag.findAll()
	.then((tag)=>{
		res.send(tag);
	})
	.catch((error)=>{
		res.status(500).send('Error. Check routes.')
		console.log('Error=>', error)
	})
});

//Get top 5 tags <-UNSURE ABOUT THIS: ASK! 
// let getTop5Tag = ((req, res)=>{
// 	models.Tag.findAndCountAll()
// 	.then((tag)=>{
// 		res.send(tag);
// 	})
// 	.catch((error)=>{
// 		res.status(500).send('Error. Check routes.')
// 		console.log('Error=>', error)
// 	})
// });

tagRoutes.route('/')
	.get(getTag)

// tagRoutes.route('/getTop5Tag')
// 	.get(getTop5Tag)

module.exports = tagRoutes;
