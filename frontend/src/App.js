import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace/UpdatePlace';
import Auth from './user/pages/Auth/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route component={Users} path="/" exact></Route>
        <Route component={UserPlaces} path="/:userId/places" exact></Route>
        <Route component={NewPlace} path="/places/new" exact></Route>
        <Route component={UpdatePlace} path="/places/:placeId" exact></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
  else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout
      }}>
      <Router>
        <main>
          <MainNavigation />
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
