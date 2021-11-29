import { useState } from 'react';
import Table from './Table';
import { easy } from '../utility/randomSudoku';
import { Bounce, Flip, toast } from 'react-toastify';
import getAnswer from '../utility/solveSudoku';
import { isComplete } from '../utility/validator';
const Action = () => {
    const blankSudoku = new Array(9);
    for (let i = 0; i < blankSudoku.length; i++) {
        blankSudoku[i] = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
    }
    const easySudoku = easy();
    const [sudoku, setSudoku] = useState(easySudoku);
    const [used, setUsed] = useState(true);
    const clearSudoku = () => {
        setUsed(false);
        document.getElementById('new').classList.remove('disabled');
        return setSudoku(blankSudoku);
    };
    const generateRandom = () => {
        setUsed(true);
        document.getElementById('new').classList.add('disabled');
        const newEasySudoku = easy();
        return setSudoku(newEasySudoku);
    };
    const checkAnswer = () => {
        if (isComplete(sudoku))
            return toast('🎉 HURRAYYYYEEEEEE!!!', {
                transition: Bounce,
                autoClose: 10000,
            });
        else
            return toast.error('You Suck! 💩 💩 💩 ', {
                transition: Flip,
                autoClose: 5000,
            });
    };
    return (
        <div id='action'>
            <div className='action-hero'>
                <div className='action-hero-heading'>
                    <h2>Fill the suDoKu</h2>
                </div>

                <Table sudoku={sudoku} setSudoku={setSudoku} />

                <div className='action-hero-btns'>
                    <div className='btn'>
                        <button id='check' onClick={checkAnswer}>
                            chEck
                        </button>
                    </div>
                    <div className='btn'>
                        <button id='clear' onClick={clearSudoku}>
                            clEar
                        </button>
                    </div>
                    <div className='btn'>
                        <button
                            id='solve'
                            onClick={() => getAnswer(sudoku, setSudoku)}
                        >
                            sOlve
                        </button>
                    </div>

                    <div className='btn'>
                        <button
                            id='new'
                            className='disabled'
                            disabled={used}
                            onClick={generateRandom}
                        >
                            {used ? 'Clear first for NEW SUDOKU' : 'nEw sudOku'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Action;
