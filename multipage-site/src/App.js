import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Contact from './pages/Contact';

import './App.css';

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
        <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/article/:id'>
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
