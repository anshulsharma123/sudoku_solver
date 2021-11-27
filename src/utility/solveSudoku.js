import { toast, Flip } from "react-toastify";

const solveSudoku = (sudoku, setSudoku) => {
    const mySudoku = new Array(9);
    for (let i = 0; i < mySudoku.length; i++) {
        mySudoku[i] = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
    }
    for (let i = 0; i < mySudoku.length; i++) {
        for (let j = 0; j < mySudoku.length; j++) {
            mySudoku[i][j] = `${parseInt(sudoku[i][j])}`;
        }
    }
    const n = mySudoku.length;
    if (dfs(mySudoku, n)) setSudoku(mySudoku);
    else return toast.error('No Possible answer with this input 🚫', {
        transition: Flip,
        autoClose: 5000,
    });
}
export default solveSudoku;

function dfs(mySudoku, n) {
    // for every cell in the mySudoku
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            // if its empty
            if (mySudoku[row][col] !== '0') continue;
            // try every number 1-9
            for (let i = 1; i <= 9; i++) {
                const c = i.toString();
                // if that number is valid
                if (isValid(mySudoku, row, col, n, c)) {
                    mySudoku[row][col] = c;
                    // continue search for that mySudoku, ret true if solution is reached
                    if (dfs(mySudoku, n)) return true;
                }
            }
            // solution wasnt found for any num 1-9 here, must be a dead end...
            // set the current cell back to empty
            mySudoku[row][col] = '0';
            // ret false to signal dead end 
            return false;
        }
    }
    // all cells filled, must be a solution
    return true;
}

function isValid(mySudoku, row, col, n, c) {
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < n; i++) {
        if (mySudoku[row][i] === c || mySudoku[i][col] === c) return false;
        const curRow = blockRow + Math.floor(i / 3);
        const curCol = blockCol + Math.floor(i % 3);
        if (mySudoku[curRow][curCol] === c) return false;
    }
    return true;
}