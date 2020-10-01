import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { testAction } from './store/appSlice';

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(testAction());
  };
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleClick}>
          Run Test Action
        </button>
      </header>
    </div>
  );
}

export default App;
