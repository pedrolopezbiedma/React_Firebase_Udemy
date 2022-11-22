import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'
import { useThemeContext } from './hooks/useThemeContext'

import './App.css';

function App() {
  const { mode } = useThemeContext();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/recipe/:id'>
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
