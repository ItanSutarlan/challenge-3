const express = require('express');
const router = express.Router();

// static users data
const users = require('../db/users.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.info(users);
  res.json(users);
});

module.exports = router;
