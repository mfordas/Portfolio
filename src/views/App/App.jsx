import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from '../../components/Menu';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import '../../styling/main_styling.scss'

function App() {
  return (
    <div className="AppCointainer">
    <div className="App">
      <BrowserRouter>
     <Menu />
     <Projects />
     </BrowserRouter>
    </div>
    <Footer />
    </div>
  );
}

export default App;