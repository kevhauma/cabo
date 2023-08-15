const GameService = require( "../services/GameService");

const GameController = (app) => {
  app.get("/games", (req, res) => {
    res.status(200).json(GameService.getGames());
  });

  app.get("/games/:id", (req, res) => {
    res.status(200).json(GameService.getGameById(req.params.id));
  });

  app.post("/games/create", (req, res) => {
    const createdGame = GameService.createGame();
    res.status(200).json(createdGame)
  });
  app.post("/games/join", (req, res) => {
    GameService.joinGame(req.body.gameId,req.body.playerId);
    res.status(200).send()
  });
  app.post("/games/start",(req, res) => {
    GameService.startGame(req.body.gameId);
    res.status(200).send()
  });

};

module.exports = GameController