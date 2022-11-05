import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
            <h1>My Articles</h1>
        </nav>

        <Route path='/'>
        <Home />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
