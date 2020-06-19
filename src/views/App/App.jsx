import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import LandingPage from '../../components/LandingPage';
import AppContent from '../AppContent/AppContent';
import '../../styling/main_styling.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/projects" component={AppContent} />
        <Route path="/" component={LandingPage} />
        <Route render={() => <Redirect to="/menu" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;