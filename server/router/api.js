const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// define the home page route
router.get('/signup', (req, res) => {
	res.send('signup');
});

// define the about route
router.post('/login', (req, res) => {

});

module.exports = router;
