import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Mario')

  const updateName = () => {
    setName('Luigi');
    console.log(name);
  }

  return (
    <div className="App">
      <p>My name is: {name}</p>
      <button onClick={updateName}>Change name</button>
    </div>
  );
}

export default App;
