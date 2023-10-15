import React, { useEffect } from "react";
import "../css/SudokuBoard.css";

interface props {
    board: number[][],
    setBoard: React.Dispatch<React.SetStateAction<number[][]>> | null
}

function SudokuBoard({ board, setBoard }: props) {

    useEffect(() => {
        for (let i=0; i<9; ++i) {
            for (let j=0; j<9; ++j) {
                document.getElementById(`row-${i}-column-${j}`)?.addEventListener('wheel', e => {
                    e.preventDefault();
                }, {passive: false});
            }
        }
    })

    return <div className="sudoku-board">
        {board.map((line, row) => {
            return <div key={row} className="line">
                {line.map((e, column) => {
                    return <div key={column} className="square">
                        <div>
                            <input type="number"
                                onChange={e => {                                                                        
                                    if (e.target.value.length > 1) {
                                        e.target.value = e.target.value.slice(0, 1); 
                                    } else {
                                        if (setBoard) {
                                            setBoard(previous => {
                                                previous[row][column] = +e.target.value;
                                                return previous;
                                            })
                                        }
                                    }
                                }}
                                defaultValue={board[row][column] === 0 ? "" : board[row][column]}
                                id={`row-${row}-column-${column}`}                            
                            />
                        </div>
                    </div>
                })}
            </div>
        })}
    </div>
}

export default SudokuBoard;