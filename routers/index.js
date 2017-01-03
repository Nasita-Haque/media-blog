const router = require('express').Router();

router.use('/post', require('./post-routes.js'));
router.use('/users', require('./user-routes.js'));
router.use('/tags', require('./tag-routes.js'));
router.use('/prefecture', require('./prefecture-routes.js'));

module.exports = router;