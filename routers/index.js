const router = require('express').Router();

// router.use('/post', require('./post-routers.js'));
router.use('/users', require('./user-routes.js'));

module.exports = router;