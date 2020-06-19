import React, { useState } from 'react';
import './App.css';
import EntryForm from './components/EntryForm';
import Buildings from './components/Buildings';

function App() {
  const [ list, setList ] = useState([]);
  const [ formActive, setFormActive ] = useState(true); 

  const updateBldg = (index, val) => {
    setList(list.map((el, i)=> i === index  ? el + val : el));
  }

  const addBldg = (atFront) => {
    let arr = atFront ? [1].concat(list) : list.concat([1]);
    setList(arr);
  }

  return (
    <div className="App">
      <h1>Sunset Hills Challenge</h1>
      {formActive && <EntryForm setList={setList} setFormActive={setFormActive}/>}
      <Buildings list={list} updateBldg={updateBldg} formActive={formActive} addBldg={addBldg}/>
    </div>
  );
}

export default App;
