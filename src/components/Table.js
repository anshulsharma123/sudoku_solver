import Block from './Block';

const Table = ({ sudoku, setSudoku }) => {

    return (
        <div className='table'>
            <Block id='0' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='1' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='2' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='3' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='4' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='5' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='6' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='7' sudoku={sudoku} setSudoku={setSudoku} />
            <Block id='8' sudoku={sudoku} setSudoku={setSudoku} />
        </div>
    );
};

export default Table;
