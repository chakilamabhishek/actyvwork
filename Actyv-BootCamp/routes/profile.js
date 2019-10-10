const userController = require("../controller/index");

/**
 *Initializing the express router
 */
const express = require("express");
const router = express.Router();


router.get('/add', function(req, res, next) {

    res.render('addprofile');
  });



module.exports = router;