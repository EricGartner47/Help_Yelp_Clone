const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const csrf = require('csurf')

const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config')
const { secret, expiresIn } = jwtConfig;
const { Hero, User, Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// const csrfProtection = csrf({ cookie: true });

const heroValidators = [
  check('title')
    .exists({checkFalsy: true})
    .withMessage('Please provide a title'),
  check('description')
    .exists({checkFalsy: true})
    .withMessage('Please provide a description'),
  check('city')
    .exists({checkFalsy: true})
    .withMessage('Please provide a city'),
  check('powers')
    .exists({checkFalsy: true})
    .withMessage('Please provide a list of powers'),
  handleValidationErrors
]

const reviewValidators = [
  check('rating')
    .exists({checkFalsy: true})
    .withMessage('Please provide a rating'),
  check('answer')
    .exists({checkFalsy: true})
    .withMessage('Please provide a review'),
  handleValidationErrors
]

// List of Heros on Home Page
router.get('/', asyncHandler(async function( req, res) {
    const heros = await Hero.findAll();
    return res.json(heros);
}));

// Single Hero Page
router.get('/:id', asyncHandler(async function(req, res) {
  const hero = await Hero.findByPk(req.params.id)
  return res.json({hero})
}))

// Create a Hero
router.post('/', heroValidators, asyncHandler(async (req, res) => {
  const { token } = req.cookies;
  const user = jwt.verify(token, secret)
  const { title, description, city, powers} = req.body;
  const newHero = await Hero.create({
    title,
    description,
    city,
    powers,
    heroId: user.data.id
  })
  return res.json({newHero})
}))

// Edit a Hero
router.put('/edit/:id', heroValidators, asyncHandler(async (req, res) =>{
  const { token } = req.cookies;
  const user = jwt.verify(token, secret)
  const {title, description, city, powers} = req.body;
  const updatedHero = await Hero.update({
    title,
    description,
    city,
    powers,
  }, {where: {heroId: user.data.id}})
  const upToDateHero = await Hero.findByPk(req.params.id)
  return res.json(upToDateHero)
}))

// Delete a Hero
router.delete('/:id', asyncHandler(async (req, res) => {
  const deleteHero = await Hero.findByPk(req.params.id)
  await deleteHero.destroy()
  return res.json(deleteHero)
}))

// List all review for a hero
router.get('/:id/reviews', asyncHandler(async (req, res) => {
  const hero = await Hero.findByPk(req.params.id)
  const answer = await Review.findAll({where: {vigilanteId: hero.id}})
  return res.json({answer})
}))

// Create a review for a hero
router.post('/:id/create-review', reviewValidators, asyncHandler(async (req, res) => {
  const {token} = req.cookies;
  const user = jwt.verify(token, secret);
  const hero = await Hero.findByPk(req.params.id);
  const {rating, answer} = req.body;
  const newReview = await Review.create({
      rating,
      answer,
      userId: user.data.id,
      vigilanteId: hero.id
  })
  return res.json({newReview})
}))

//Search for a hero


module.exports = router
