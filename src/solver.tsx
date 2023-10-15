function isSafe(board: number[][], row: number, col: number, num: number): boolean {
    // Check if the number is not in the current row and column
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    // Check if the number is not in the current 3x3 grid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(board: number[][]): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            // If the cell is empty, try placing digits from 1 to 9
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isSafe(board, row, col, num)) {
                        board[row][col] = num;

                        // Recur with the updated board
                        if (solveSudoku(board)) {
                            return true;
                        }

                        // If placing num in the current cell doesn't lead to a solution,
                        // backtrack and try the next number
                        board[row][col] = 0;
                    }
                }

                // If no number can be placed, backtrack to the previous state
                return false;
            }
        }
    }

    // If all cells are filled, the Sudoku puzzle is solved
    return true;
}

export default solveSudoku;