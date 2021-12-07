const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const heroRouter = require('./hero.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/hero', heroRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
