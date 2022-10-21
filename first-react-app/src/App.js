import './App.css';

function App() {
  let name = 'Mario'

  const updateName = () => {
    name = 'Luigi';
    console.log(name);
  }

  return (
    <div className="App">
      <p>My name is: {name}</p>
      <button onClick={updateName}>Change my name</button>
    </div>
  );
}

export default App;
