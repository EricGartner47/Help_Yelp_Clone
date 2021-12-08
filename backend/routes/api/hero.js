const express = require('express');
const asyncHandler = require('express-async-handler');
// const csrf = require('csurf')

const { Hero  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();
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
  const {user, title, description, city, powers} = req.body;
  const { token } = req.cookies
  const newHero = await Hero.create({
    title,
    description,
    city,
    powers,
    heroId: user.id
  })
  return res.json({newHero, token})
}))

module.exports = router
