const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// user schema
const playerSchema = new mongoose.Schema({
    playerName: {type:String},
    sevenUp: String,
    sevenDown: String,
    seven: String,
    betAmount: String,
})
const Player = mongoose.model("player", playerSchema);

module.exports = Player;