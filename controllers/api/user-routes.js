// much pulled from Bootcamp Main/UR-VIRT-FSF-PT-10-2022-U-LOLC/14-MVC/01-Activities/23-Ins_Auth-Review/controllers/api/userRoutes.js

const router = require('express').Router();
const {User} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/auth', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.UserName } });
    const validPassword = await userData.checkPassword(req.body.password);

    if (!userData || !validPassword) {
      console.log('Steve')
      
      res
        .status(400)
        .json({ message:'Incorrect UserName or password, please try again' });
      return;
    } else{

      console.log('Bob')

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
          
    res.render('postorcomment');
     });

  }} catch (err) {
    console.log('bad')
    res.status(400).json(err);
  }
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

  



module.exports = router;