const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// user schema
const playerSchema = new mongoose.Schema({
    playerName: String,
    sevenUp: String,
    sevenDown: String,
    seven: String,
    betAmount: String,
    wonAmount: Number,
    result: String,
})
const Player = mongoose.model("player", playerSchema);

module.exports = Player;