var express = require('express');
var router = express.Router();
var axios = require('axios');
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Get Homepage
router.get('/', ensureAuthenticated, async function(req, res){
	let albums = {};
	let photos = {};
	let id = req.query.albumId;

	await axios.get('albums')
		.then((response) => {
			albums = response.data.slice(0,10);
		});

	if (id) {
		await axios.get('albums/' + id + '/photos')
			.then((response) => {
				photos = response.data.slice(0,8);
			});
	}

	res.render('index', {
		albums: albums,
		photos: photos
	});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;