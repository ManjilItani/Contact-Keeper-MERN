// registering stuff

const express = require('express');

const router = express.Router();

const User = require('../models/User');

const { check, validationResult } = require('express-validator');

// @route   POST api/users
//@desc     Register a user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.status(200).json({ msg: 'user registered succesfully' });
  }
);

module.exports = router;
