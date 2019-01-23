

 class GameBoard {
   constructor () {
     this.array = this.makeRandomArray ()
     this.rowLength = 125
   }

makeRandomArray (){
  const randArr = []
  for (let i = 0; i < 15625; i++) {
    randArr.push(Math.random () >= 0.5)
  }
  return randArr
}

 updateBoard () {
   this.array = this.array.map((val, index ) => this.updateCell(index))
 }

 updateCell (index) {
   const neighbors = this.findNeighbors (index)
   if (neighbors <2 || neighbors > 3) {
     return false
   } else if (neighbors === 3) {
     return true

   } else {
     return this.array [index]
   }
 }

displayMe (board) {
  let HTML = ''
 board. forEach ((alive, index) => {
    alive ? HTML += `<div id=${index} class="alive"></div>` : HTML += `<div id=${index} class="dead"></div>`
    if (index !==0 && (index + 1 ) % this.rowLength ===0) {
       HTML += `<div style="clear: left;"></div>`
    }
  })
  $('#table').html(HTML)
}

findNeighbors (index) {
  const neighborsArray = this.getNeighborsArray (index)
  return neighborsArray.reduce ((acc, spot)=> this.array[spot] ? acc + 1 :acc, 0)
}

getNeighborsArray (index) {
  const rowLength = this.rowLength
  if ( index % rowLength === 0) {
    return [index + 1, index - rowLength, index + rowLength, index - rowLength + 1, index + rowLength + 1]
  } else if (( index + 1 ) % rowLength === 0) {
    return [index - 1, index - rowLength, index + rowLength, index - rowLength - 1, index + rowLength - 1]
  } else {
      return [index - 1, index + 1, index - rowLength, index + rowLength, index - rowLength - 1, index - rowLength + 1, index + rowLength + 1, index + rowLength - 1]
  }
}
}

const main = myGame =>{
   myGame.displayMe(myGame.array)
   myGame.updateBoard()
 }

module.exports = {
GameBoard,
main
}
