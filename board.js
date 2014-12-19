var Board = function(){
  this.board = [
  ['','','','','','',''],
  ['','','','','','',''],
  ['','','','','','',''],
  ['','','','','','',''],
  ['','','','','','',''],
  ['','','','','','','']]
}

Board.prototype = {
  drop: function(columnNum,color) {
    for(var i = 5; i >= 0; i--) {
      if(this.board[i][columnNum] === '') {
        this.board[i][columnNum] = color
        if (this.checkDraw()) {
          return 'draw'
        }
        else {
          return this.checkWin({row: i, column: columnNum, color: color})
        }
      }
    }

  },

  checkDraw: function() {
    var flatBoard = [].concat.apply([],this.board)
    if ($.inArray('', flatBoard) === -1) {
      return true
    }
    else { return false }
  },

  checkWin: function(chipData) {
    return this.checkRow(chipData) || this.checkColumn(chipData) || this.checkDiagonal(chipData);
  },

  checkRow: function(chipData) {
    var i = 1
    var row = chipData.row

    for (var counter = 1; counter < 4; counter++) {
      var column = chipData.column + counter
      if (column < 7 && column >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { i ++ }
      }
    }

    for (var counter = 1; counter < 4; counter++) {
      var column = chipData.column - counter
      if (column < 7 && column >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { i ++ }
      }
    }
    if (i >= 4) {
      return true
    }
    return false
  },

  checkColumn: function(chipData) {
    var i = 1
    var column = chipData.column
    for (var counter = 1; counter < 4; counter++) {
      var row = chipData.row + counter
      if (row < 6 && row >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { i ++ }
      }
    }
    if (i >= 4) {
      return true
    }
    return false
  },

  checkDiagonal: function(chipData) {
    var i = 1
    var j = 1
    for (var counter = 1; counter < 4; counter++) {
      var row = chipData.row - counter
      var column = chipData.column + counter
      if (row < 6 && row >= 0 && column < 7 && column >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { i ++ }
      }
    }
    for (var counter = 1; counter < 4; counter++) {
      var row = chipData.row + counter
      var column = chipData.column - counter
      if (row < 6 && row >= 0 && column < 7 && column >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { i ++ }
      }
    }
    for (var counter = 1; counter < 4; counter++) {
      var row = chipData.row + counter
      var column = chipData.column + counter
      if (row < 6 && row >= 0 && column < 7 && column >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { j ++ }
      }
    }
    for (var counter = 1; counter < 4; counter++) {
      var row = chipData.row - counter
      var column = chipData.column - counter
      if (row < 6 && row >= 0 && column < 7 && column >= 0) {
        if(this.board[row][column] != chipData.color) {
          break
        }
        else { j ++ }
      }
    }
    if (i >= 4 || j >= 4) {
      return true
    }
    return false
  }
}
