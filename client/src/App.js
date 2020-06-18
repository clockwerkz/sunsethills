import React, { useState } from 'react';
import './App.css';
import EntryForm from './components/EntryForm';
import Buildings from './components/Buildings';

function App() {
  const [ list, setList ] = useState([]);
  const [ formActive, setFormActive ] = useState(true); 
  return (
    <div className="App">
      <h1>Sunset Hills Challenge</h1>
      {formActive && <EntryForm setList={setList} setFormActive={setFormActive}/>}
      <Buildings list={list}/>
    </div>
  );
}

export default App;
