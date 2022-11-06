import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
            <h1>My Articles</h1>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>

        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
