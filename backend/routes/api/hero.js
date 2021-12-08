const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hero  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

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

// Create a Hero
router.post('/', heroValidators, asyncHandler(async (req, res ) => {
  const {user, title, description, city, powers} = req.body;
  const newHero = await Hero.create({
    title,
    description,
    city,
    powers,
    heroId: user.id
  })
  await setTokenCookie(res, user);
  return res.json({newHero})
}))

module.exports = router
