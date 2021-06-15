// import dependencies and initialize the express router
const express = require('express');
const { body, validationResult } = require('express-validator');
const FarmerController = require('../controllers/farmer-controller');

const router = express.Router();

// standardized validation error response
const validate = validations => {
    return async(req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

// define routes
router.post('/login', validate([]), FarmerController.login);
router.post('', validate([
    body('name').isAlphanumeric(),
    body('password', "Password must be min 8 character long and at least include 1 lowercase char, 1 uppercase char, 1 number and 1 symbol").isStrongPassword(),
    // body('lots').isArray(),
    // body("lots.id").isAlphanumeric(),
    // body("lots.crops").isArray(),
    // body("lots.crops.id").isAlphanumeric(),
    // body("lots.crops.planted").isISO8601(),
    // body("lots.crops.harvested").isISO8601(),
]), FarmerController.addFarmer);

module.exports = router;
