import { isValid, isPostionValid } from '../utility/validator';
import disableScroll from '../utility/disableScroll';
import { Flip, toast } from 'react-toastify';
const Block = ({ id, sudoku, setSudoku }) => {
    const changeHandler = async (e) => {
        const userInput = e.target.value || '0';
        const tileId = e.target.id;
        if (!isValid(userInput)) {
            return toast.dark('Oops! Wrong Input', {
                transition: Flip,
                autoClose: 2000,
            });
        }
        const rowId = parseInt(tileId / 9);
        const colId = parseInt(tileId % 9);
        // if (occupiedPositions.includes(tileId)) remind to Clear to provide custom question
        const newSudoku = sudoku.map((row, i) => {
            return row.map((col, j) => {
                if (i === rowId && j === colId) {
                    return userInput;
                } else {
                    return sudoku[i][j];
                }
            });
        });
        setSudoku(newSudoku);
        if (!isPostionValid(userInput, rowId, colId, sudoku)) {
            changeColor(tileId, true);
            setTimeout(() => {
                changeColor(tileId, false);
                setSudoku(sudoku);
            }, 2000);
            return toast.dark('Alas! Not Possible', {
                transition: Flip,
                autoClose: 2000,
            });
        }
    };
    const changeColor = (tileId, error) => {
        const target = document.getElementById(tileId);
        if (error) target.classList.add('error');
        else target.classList.remove('error');
    };
    const getTileId = (block, row, col) => {
        return (parseInt(block / 3) * 3 + row) * 9 + ((id % 3) * 3 + col);
    };
    const getTileValue = (block, row, col) => {
        let val = sudoku[parseInt(block / 3) * 3 + row][(id % 3) * 3 + col];
        return val === '0' ? ' ' : val;
    };

    disableScroll();
    return (
        <div className={id % 2 === 0 ? 'block-even' : 'block-odd'}>
            <div className='col'>
                <div className='row'>
                    {/* id = (row) * 9 + (col) */}
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 0, 0)}
                        value={getTileValue(id, 0, 0)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 1, 0)}
                        value={getTileValue(id, 1, 0)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 2, 0)}
                        value={getTileValue(id, 2, 0)}
                    />
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 0, 1)}
                        value={getTileValue(id, 0, 1)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 1, 1)}
                        value={getTileValue(id, 1, 1)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 2, 1)}
                        value={getTileValue(id, 2, 1)}
                    />
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 0, 2)}
                        value={getTileValue(id, 0, 2)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 1, 2)}
                        value={getTileValue(id, 1, 2)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 2, 2)}
                        value={getTileValue(id, 2, 2)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Block;
