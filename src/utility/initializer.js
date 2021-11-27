export const getQuestion = (sudoku) => {
    const question = new Array(9);
    for (let i = 0; i < 9; i++)
        question[i] = [false, false, false, false, false, false, false, false, false];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] !== '0') question[i][j] = true;
        }
    }
    return question;
}