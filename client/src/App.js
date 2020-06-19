import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import EntryForm from './components/EntryForm';
import Buildings from './components/Buildings';

function App() {
  const [ list, setList ] = useState([]);
  const [ formActive, setFormActive ] = useState(true); 

  const updateBldg = (index, val) => {
    setList(list.map((el, i)=> i === index  ? el + val : el));
  }

  const addBldg = (atFront) => {
    if (list.length >= 20) return;
    let arr = atFront ? [1].concat(list) : list.concat([1]);
    setList(arr);
  }

  const deleteBldg = (index) => {
    setList(list.slice(0, index).concat(list.slice(index+1)));
  }

  return (
    <div className="App">
      <NavBar />
      {formActive && <EntryForm setList={setList} setFormActive={setFormActive}/>}
      <Buildings list={list} updateBldg={updateBldg} formActive={formActive} addBldg={addBldg} deleteBldg={deleteBldg}/>
    </div>
  );
}

export default App;
