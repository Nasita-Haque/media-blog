const prefectureRoutes = require('express').Router();
const sequelize = require('../models/index.js');
const models = require('../models');


//Get prefectures
let getPrefecture = ((req, res)=>{
	models.Prefecture.findAll()
	.then((post)=>{
		res.send(post);
	})
	.catch((error)=>{
		res.status(500).send('Error. Check routes.')
		console.log('Error=>', error)
	})
});

prefectureRoutes.route('/')
	.get(getPrefecture)

module.exports = prefectureRoutes; 
