import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginMaster from './components/auth/loginMaster';
import Home from './components/home/Home';
import LoginMasterState from './context/auth/loginMasterState'; 
import PokemonState from './context/pokemonList/pokemonState';
import ModalState from './context/modal/modalState';
import AlertState from './context/alerts/alertState';


function App() {
  return (
    <PokemonState>
      <ModalState>
        <AlertState>
          <LoginMasterState>
            <Router>
              <Switch>
                <Route exact path="/" component={LoginMaster} />
                <Route exact path="/home" component={Home} />
              </Switch>
            </Router>
          </LoginMasterState>
        </AlertState>
      </ModalState>
    </PokemonState>
  );
}

export default App;
