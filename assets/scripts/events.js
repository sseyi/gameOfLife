const game = require('./game.js')

const onStartNewGame = event => {
  event.preventDefault()
  const mygame = new game.GameBoard ()
  setInterval (() => game.main(mygame), 200)
}

module. exports = {
  onStartNewGame
}
