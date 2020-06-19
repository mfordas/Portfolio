import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


import LandingPage from '../../components/LandingPage';
import AppContent from '../AppContent/AppContent';
import '../../styling/main_styling.scss'

function App() {
  return (
      <BrowserRouter>
    <div className="AppContainer">
        <Route path="/projects" component={AppContent} />
    </div>
        <Route path="/main" component={LandingPage} />
        <Route render={() => <Redirect to="/main" />} />
      </BrowserRouter>
  );
}

export default App;