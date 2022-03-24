import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Mensaje from './Componentes/Mensaje';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/home"}>
              <h1>Welcome</h1>
          </Route>
          <Route path={"/:control/:color/:backgroundColor"} render={(routeProps) => <Mensaje {...routeProps}/>}/>
          <Route path={"/:control"} render={(routeProps) => <Mensaje {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
