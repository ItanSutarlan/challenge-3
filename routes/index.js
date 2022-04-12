const express = require('express');
const router = express.Router();

const registerRouter = require('./register');
const loginRouter = require('./login');
const gameRouter = require('./game');
const usersRouter = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'LandingPage||Express' });
});

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/game', gameRouter);
router.use('/users', usersRouter);

module.exports = router;
