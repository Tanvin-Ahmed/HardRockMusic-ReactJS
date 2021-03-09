import './App.css';
import Form from './components/Form/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import SearchSong from './components/SearchSong/SearchSong';
import Lyrics from './components/Lyrics/Lyrics';
import Navbar from './components/Navbar/Navbar';
import { createContext, useState } from 'react';
export const loadingSpinner = createContext();
function App() {
  const [spinner, setSpinner] = useState(false);
  return (
    <loadingSpinner.Provider value={[spinner, setSpinner]}>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Form/>
        </Route>
        <Route path="/song/:name">
          <SearchSong/>
        </Route>
        <Route path="/lyrics/:title/:artist">
          <Lyrics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </loadingSpinner.Provider>
  );
}

export default App;
