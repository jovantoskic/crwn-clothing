import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
 
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  )
}

const HatsPage = () => {
  return  (
    <div>
      <h1>hats page</h1>
    </div>
  )
}

export default App;
