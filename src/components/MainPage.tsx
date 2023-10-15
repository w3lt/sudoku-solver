import React, { useCallback, useEffect, useState } from "react";
import "../css/MainPage.css";
import SudokuBoard from "./SudokuBoard";

const sudoku = [
    [7, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0, 9, 0],
    [0, 0, 8, 2, 4, 0, 0, 0, 6],
    [4, 0, 0, 5, 2, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 2],
    [0, 0, 5, 0, 0, 9, 0, 0, 0],
    [0, 0, 4, 8, 6, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 5, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 7, 0, 0]
];

interface props {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

function MainPage({ setCurrentPage }: props) {
    const [isBigEnough, setIsBigEnough] = useState(window.innerWidth >= 954);

    useEffect(() => {

        const handleResize = () => {
            setIsBigEnough(window.innerWidth >= 954);
            console.log(window.innerWidth);
            
        };

        window.addEventListener('resize', handleResize);
    }, []);

    return <div className={`main-page ${isBigEnough ? "is-big" : "is-not-big"}`}>
        {!isBigEnough && <div className="title-container">
            <div className="title">Sudoku Solver</div>
            <div>Solve all sudoku!</div>
        </div>}
        <div id="sudoku-board">
            <div>
                <SudokuBoard board={sudoku} setBoard={null} />
            </div>
        </div>
        {isBigEnough ? <div className="right-container">
            <div className="title">Sudoku Solver</div>
            <div>Solve all sudoku!</div>
            <div className="start-btn-container">
                <div>
                    <div className="start-btn" onClick={() => {setCurrentPage(1)}}>Start</div>
                </div>
            </div>
        </div> : 
        <div>
            <div className="start-btn-container">
                <div>
                    <div className="start-btn" onClick={() => {setCurrentPage(1)}}>Start</div>
                </div>
            </div>
        </div>}
        
    </div>
}

export default MainPage;