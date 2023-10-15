import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import './App.css';
import MainPage from '../MainPage';
import SolvingPage from '../SolvingPage';


function App() {

  const [currentPage, setCurrentPage] = useState(0);
  // 0 -> main page
  // 1 -> solving page


  return (
    <div className="App">
      {currentPage === 0 && <MainPage setCurrentPage={setCurrentPage} />}
      {currentPage === 1 && <SolvingPage />}
    </div>
  );
}

export default App;
