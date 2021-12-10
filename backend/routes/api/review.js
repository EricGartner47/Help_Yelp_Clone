const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const csrf = require('csurf')

const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config')
const { secret, expiresIn } = jwtConfig;
const { Hero, User, Review  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { route } = require('./hero');

const reviewValidators = [
    check('rating')
      .exists({checkFalsy: true})
      .withMessage('Please provide a rating'),
    check('answer')
      .exists({checkFalsy: true})
      .withMessage('Please provide a review'),
    handleValidationErrors
]

// Create a review
router.post('/', reviewValidators, asyncHandler(async (req, res) => {
    const {token} = req.cookies;
    const user = jwt.verify(token, secret);
    const {rating, answer} = req.body;
    const newReview = await Review.create({
        rating,
        answer,
        userId: user.data.id,
        heroId: hero.id
    })
    return res.json({newReview})
}))

module.exports = router
