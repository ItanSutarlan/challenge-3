const createError = require('http-errors');
const express = require('express');
const router = express.Router();

// static users data
const Users = require('../db/users.json');

router.get('/', function (req, res) {
  res.render('login');
});

router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  const user = Users.find((user) => user.username === username);
  if (user) {
    return user.password === password
      ? res.redirect('/game')
      : next(createError(400, 'Wrong Password'));
    // : res.status(400).json({ message: 'wrong password' });
  }
  next(createError(404, 'User Not Found'));
  // res.status(404).json({ message: 'User is Not Found' });
});

module.exports = router;
