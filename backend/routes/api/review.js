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

// Edit a Hero
router.put('/edit/:id', reviewValidators, asyncHandler(async (req, res) =>{
    const { token } = req.cookies;
    const user = jwt.verify(token, secret)
    const {answer, rating} = req.body;
    const updatedReview = await Review.update({
      answer,
      rating
    }, {where: {userId: user.data.id}})
    const upToDateReview = await Review.findByPk(req.params.id)
    return res.json(upToDateReview)
}))

module.exports = router
