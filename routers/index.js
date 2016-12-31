const router = require('express').Router();

router.use('/post', require('./post-routes.js'));
router.use('/users', require('./user-routes.js'));
router.use('/tags', require('./tag-routes.js'));

module.exports = router;