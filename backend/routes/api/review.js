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





module.exports = router
