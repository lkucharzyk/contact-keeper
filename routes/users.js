const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')

const User = require('../models/User');

router.post('/', [
    check('name', 'name is required').not().isEmpty(), //.not().isEmpty() - check if name isnt empty
    check('email', 'plz include valid email').isEmail(),
    check('password', 'plz enter pasowrd with 6 or more chars').isLength({min: 6})
], (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    res.send('passed')
})

module.exports = router