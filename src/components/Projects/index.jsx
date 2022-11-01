import React from 'react';
import { Route } from 'react-router-dom';
import FormaZakupy from './formaZakupy';
import Wthr from './wthr';
import CandyDefense from './candyDefense';
import ContactForm from './contactForm';
import AnimalsSounds from './animalsSounds';
import TaskWars from './taskWars';
import Snake from './snake';
import ForeCCast from './foreccast';
import ProductDetective from './productDetective';
import MainPageContent from './mainPage';
import '../../styling/main_styling.scss';

const Projects = () => {
  return (
    <div id='projectsContainer' className='projectsContainer'>
      <Route exact path='/projects/formazakupy' component={FormaZakupy} />
      <Route exact path='/projects/wthr' component={Wthr} />
      <Route exact path='/projects/candydefense' component={CandyDefense} />
      <Route exact path='/projects/contactform' component={ContactForm} />
      <Route exact path='/projects/animalssounds' component={AnimalsSounds} />
      <Route exact path='/projects/productdetective' component={ProductDetective} />
      <Route exact path='/projects/taskwars' component={TaskWars} />
      <Route exact path='/projects/foreccast' component={ForeCCast} />
      <Route exact path='/projects/snake' component={Snake} />
      <Route exact path='/projects' component={MainPageContent} />
    </div>
  );
};

export default Projects;
