const mongoose = require('mongoose')
const Player = require('../models/player');
const gameController = {};
const playerResult = []

gameController.addPlayers = async (req,res) => {
    const newPlayer = await Player.create({
        playerName: req.body.playerName,
        sevenUp: req.body.sevenUp,
        sevenDown: req.body.sevenDown,
        seven: req.body.seven,
        betAmount: req.body.betAmount
    });
    if (!newPlayer) res.send("Error in player creation")
    res.json({message:"Player added successfully", newPlayer})
}

gameController.startGame = async (req,res) => {
    // get all players
    const players = await Player.find();
    if (!players) res.send("Error. Start again")
    
    // calculate dice number total
    const randomDice1 = Math.floor(6*Math.random())+1;  
    const randomDice2 = Math.floor(6*Math.random())+1;  
    const totalDiceNumber = randomDice1 + randomDice2

    players.map((player) => {
        let message = ""
        if (totalDiceNumber === 7 && player.seven === true) {
            message = "Congratulations. You won 4 times of your bet amount..!"
            gameController.playersResult(player, 4, message)
        } else if (totalDiceNumber > 7 && player.sevenUp === true) {
            message = "Congratulations. You won 2 times of your bet amount..!"
            gameController.playersResult(player, 2, message)
        } else if (totalDiceNumber < 7 && player.sevenDown === true) {
            message = "Congratulations. You won 2 times of your bet amount..!"
            gameController.playersResult(player, 2, message)
        } else {
            message = "Oops..! Better luck next time."
            gameController.playersResult(player, 0, message)
        }
    })
    res.json({diceNumber: totalDiceNumber, playerResults: playerResult})
} 

gameController.playersResult = (player, amountMultiplyBy, message) => {
    let wonAmount = player.betAmount * amountMultiplyBy;
    player.wonAmount = wonAmount
    player.result = message
    playerResult.push(player)
}

module.exports = gameController;