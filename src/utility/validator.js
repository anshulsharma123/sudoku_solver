export const isValid = (userInput) => {
    if (parseInt(userInput) > 9 || parseInt(userInput) < 0) {
        return false;
    }
    return true;
};
export const isPostionValid = (userInput, rowId, colId, sudoku) => {
    if (userInput === '0') return true;
    const row = sudoku[rowId];
    if (row.includes(userInput)) return false;
    let bool = false;
    sudoku.forEach((currentRow, i) => {
        if (currentRow[colId] === userInput) return bool = true;
    });
    if (bool) return false;
    let smi = (parseInt(rowId / 3)) * 3;
    let smj = (parseInt(colId / 3)) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[smi + i][smj + j] === userInput) {
                return false;
            }
        }
    }
    return true;
};

export const isComplete = (sudoku) => {
    let bool = true;
    sudoku.forEach((row) => {
        if (row.includes('0')) bool = false;
    });
    return bool;
};
