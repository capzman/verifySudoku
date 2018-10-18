function verifyRow(sudoku,row) {
  let set = new Set();
  for (let i = 0; i < 9; i++) {
    if (set.has(sudoku[row][i])) return false;
    if (sudoku[row][i] !== -1) {
      set.add(sudoku[row][i]);
    }
  }
  return true;
}

function verifyColumn(sudoku, col) {
  let set = new Set();
  for(let i = 0; i < 9; i++) {
    if (set.has(sudoku[i][col])) return false;
    if (sudoku[i][col] !== -1) {
      set.add(sudoku[i][col]);
    }
  }
  return true;
}

function verifyBox(sudoku, row, col) {
  let set = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (set.has(sudoku[row + i][col + j])) return false;
      if (sudoku[row + i][col + j] !== -1) {
        set.add(sudoku[row + i][col + j]);
      }
    }
  }
  return true;
}

function verify(sudoku, row, col) {
  return (verifyRow(sudoku, row) && verifyColumn(sudoku, col) && verifyBox(sudoku, row - row % 3, col - col % 3));
}

function checkSudoku(sudoku) {

  for(let i = 0; i < 9; i++) {
    for(let j  =0; j < 9; j++) {
      // sudoku[i][j] == -1 (empty cell)
      if (sudoku[i][j]!=-1) {
        if(!verify(sudoku, i, j)) return false;
      }
    }
  }
  return true;
}

const sudoku = [
                [5,3,-1,-1,7,-1,-1,-1,-1],
                [6,-1,-1,1,9,5,-1,-1,-1],
                [-1,9,8,-1,-1,-1,-1,6,-1],
                [8,-1,-1,-1,6,-1,-1,-1,3],
                [4,-1,-1,8,-1,3,-1,-1,1],
                [7,-1,-1,-1,2,-1,-1,-1,6],
                [-1,6,-1,-1,-1,-1,2,8,-1],
                [-1,-1,-1,4,1,9,-1,-1,5],
                [-1,-1,-1,-1,8,-1,-1,7,9],
              ];
window.onload = function() { 
  console.log(checkSudoku(sudoku));
};