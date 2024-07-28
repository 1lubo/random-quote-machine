import React from 'react';
import './App.css';
import Button from "./components/button";

function App() {
    function nextQuoteClickHandler() {
        console.log('Hello World!');
    }
  return (
    <div className="App" id="quote-box">
      <Button buttonDisplayName="Next Quote" clickHandler={nextQuoteClickHandler} />
    </div>
  );
}

export default App;
