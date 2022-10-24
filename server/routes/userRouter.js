const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getUser, (req, res, next) => {
  res.status(200).json(res.locals.user);          //
});

module.exports = router;
