const { GAME_STATE } = require( "../model/GameState");
const DeckService = require( "./DeckService");

const games = [];

const getGames = () => {
  return games;
};
const getGameById = (id) => {
  return games.find((game) => game.id === id);
};

const createGame = () => {
  const createdGame= { state: GAME_STATE.PRE_START, players: [], activePlayer: null }
  games.push(createdGame);
  return createdGame
};

const joinGame = (gameId, playerId) => {
  const game = getGameById(gameId);
  game.players.push({ id: playerId, cards: [] });
};

const startGame = (id) => {
  const game = getGameById(id);

  let deck = DeckService.getNewShuffledDeck();

  Array.from({ length: 4 }).forEach(() => {
    game.players.forEach((player) => {
      const { card, remainingDeck } = DeckService.takeOne(deck);
      player.cards.push(card);
      deck = remainingDeck;
    });
  });

  game.state = GAME_STATE.PREPARE;
  game.activePlayer = game.players[0].id;
};
module.exports = { getGames, getGameById, createGame, joinGame, startGame };
