import React, { useEffect, useState } from "react";
import SudokuBoard from "./SudokuBoard";

import "../css/SolvingPage.css";
import solveSudoku from "../solver";



function SolvingPage() {

    const resetBoard = () => {
        setBoardContent(previous => {
            for (let i=0; i<9; ++i) {
                for (let j=0; j<9; ++j) {
                    previous[i][j] = 0;
                }
            }

            return previous;
        })
    }

    const [boardContent, setBoardContent] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    const [isBigEnough, setIsBigEnough] = useState(window.innerWidth >= 954);

    useEffect(() => {

        const handleResize = () => {
            setIsBigEnough(window.innerWidth >= 954);
            console.log(window.innerWidth);
            
        };

        window.addEventListener('resize', handleResize);
    }, []);

    const [isSolved, setIsSolved] = useState(false);

    return <div className={`solving-page ${isBigEnough ? "" : "is-small"}`}>
        <div id="sudoku-board">
            <SudokuBoard board={boardContent} setBoard={setBoardContent} />
        </div>
        <div className="right-container">
            {!isSolved ? <div className="solve-btn-container">
                <div>
                    <div className="solve-btn" onClick={() => {
                        const sudoku = [...boardContent];
                        setIsSolved(solveSudoku(boardContent));
                        setBoardContent(sudoku);                        
                    }}>Solve</div>
                </div>
            </div> :
            <div>
                <div>Solved!</div>
                <div className="resolve-btn-container">
                    <div>
                        <div className="resolve-btn"
                            onClick={() => {
                                resetBoard();
                                setIsSolved(false);
                            }}
                        >
                            Resolve
                        </div>
                    </div>
                </div>
            </div>}
            
        </div>
    </div>
}

export default SolvingPage;