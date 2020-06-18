import React, { useState } from 'react';
import './App.css';
import EntryForm from './components/EntryForm';

function App() {
  const [ list, setList ] = useState([]);
  const [ formActive, setFormActive ] = useState(true); 
  return (
    <div className="App">
      {formActive && <EntryForm />}
    </div>
  );
}

export default App;
