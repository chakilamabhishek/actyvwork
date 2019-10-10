var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/search/', function(req, res, next) {
  res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"})
});
router.get('/add/', function(req, res, next) {
  res.render('addbook');
});
router.get('/add/:id/:bookname/:authorname', function(req, res, next) {
  const {id,bookname,authorname} = req.params
	console.info(id,bookname,authorname);
	res.status(200).json({ message:  "Book Saved Successfully" });
});
router.post('/add', function (req, res, next) {
	console.info({...req.body});
	res.status(200).json({ message:  "Book Saved Successfully" });
}); 
router.get('/find/:id', function (req, res, next) {
	const {id} = req.params
	console.info(id);
	res.status(200).json({ message:  "Book Found" });
});
module.exports = router;
