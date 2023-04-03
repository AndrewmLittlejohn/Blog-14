const router = require('express').Router();
const {Post, Comment, User} = require('../models/');

router.get('/',(req, res) => {
  res.render('home');

})

router.post('/signup', async (req, res) => {
  res.render('newuser');

})

router.get('/signin', async (req, res) => {
  
    res.render('signin');

})

router.get('/newuser', (req, res) => {
  res.render('newuser');

})

router.get

module.exports = router;