import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage"
import SplashPage from "./components/SplashPage";
import CreateHeroPage from "./components/CreateHeroPage";
import HeroPage from "./components/HeroPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EditHeroPage from "./components/EditHeroPage";
import ReviewPage from "./components/ReviewPage";
import CreateReviewPage from "./components/CreateReviewPage";
import EditReviewPage from "./components/EditReviewPage";

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
          <Route path ="/app" exact={true}>
            <HomePage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>
          <Route path="/create-hero" exact={true}>
            <CreateHeroPage />
          </Route>
          <Route path="/hero/edit/:id" exact={true}>
            <EditHeroPage />
          </Route>
          <Route path="/hero/create-review/:id" exact={true}>
            <CreateReviewPage />
          </Route>
          <Route path="/hero/:id" exact={true}>
            <HeroPage />
          </Route>
          <Route path="/review/edit/:id" exact={true}>
            <EditReviewPage />
          </Route>
          <Route path="/review/:id" exact={true}>
            <ReviewPage />
          </Route>
          <Route path="/" exact={true}>
            <SplashPage />
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
