import {
    getEasySudoku,
    getMediumSudoku,
    getHardSudoku,
} from 'fake-sudoku-puzzle-generator';

export const easy = () => {
    const Puzzle = getEasySudoku();
    return Puzzle.map((row, r) => {
        return row.map((col, c) => {
            return (Puzzle[r][c]) ? `${Puzzle[r][c]}` : '0';
        });
    });
};
export const medium = () => {
    const Puzzle = getMediumSudoku();
    return Puzzle.map((row, r) => {
        return row.map((col, c) => {
            return (Puzzle[r][c]) ? `${Puzzle[r][c]}` : '0';
        });
    });
};
export const hard = () => {
    const Puzzle = getHardSudoku();
    return Puzzle.map((row, r) => {
        return row.map((col, c) => {
            return (Puzzle[r][c]) ? `${Puzzle[r][c]}` : '0';
        });
    });
};
