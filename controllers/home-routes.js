const router = require('express').Router();

router.get('/',(req, res) => {
  res.render('home');

})

router.get('/signin', async (req, res) => {
  
    res.render('signin');

})

router.get('/newuser', (req, res) => {
  res.render('newuser');

})

router.get

module.exports = router;