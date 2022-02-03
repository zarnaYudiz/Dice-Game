const router = require('express').Router();
const gameController = require('./gameController');
const validators = require('./validators');

router.post('/add-player', validators.addPlayer, gameController.addPlayers);
router.get('/start-game', gameController.startGame);



module.exports = router;