const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config')
const { secret, expiresIn } = jwtConfig;
const { Hero, User  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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

  // Edit a Hero
router.put('/:id', heroValidators, asyncHandler(async (req, res) =>{
    const { token } = req.cookies;
    const user = jwt.verify(token, secret)
    const {title, description, city, powers} = req.body;
    const updatedHero = await Hero.update({
      title,
      description,
      city,
      powers,
      heroId: user.data.id
    })
    return res.json({updatedHero, token})
}))

module.exports = router
