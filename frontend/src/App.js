import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage"
import CreateHeroPage from "./components/CreateHeroPage";
import HeroPage from "./components/HeroPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EditHeroPage from "./components/EditHeroPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path ="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/create-hero">
            <CreateHeroPage />
          </Route>
          <Route exact path="/hero/edit/:id">
            <EditHeroPage />
          </Route>
          <Route path="/hero/:id">
            <HeroPage />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
