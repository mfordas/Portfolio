import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';


import LandingPage from '../../components/LandingPage';
import AppContent from '../AppContent/AppContent';
import '../../styling/main_styling.scss'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/Portfolio/projects" component={AppContent} />
        <Route path="/" component={LandingPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  );
}

export default App;