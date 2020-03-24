import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <main>
        <MainNavigation />
        <Switch>
          <Route component={Users} path="/" exact></Route>
          <Route component={UserPlaces} path="/:userId/places" exact></Route>
          <Route component={NewPlace} path="/places/new" exact></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
