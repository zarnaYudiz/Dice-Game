var validator = require('validator');
const validators = {};

validators.addPlayer = (req, res, next) => {
    const body = req.body
    if(validator.isEmpty(body.playerName)) return res.send("Player name is required.")
    if(!validator.isBoolean(body.sevenUp)) return res.send("State (true/false) is required.")
    if(!validator.isBoolean(body.sevenDown)) return res.send("State (true/false) is required.")
    if(!validator.isBoolean(body.seven)) return res.send("State (true/false) is required.")
    if(!validator.isNumeric(body.betAmount)) return res.send("Enter only amount to bet.")
    next();
};

module.exports = validators;