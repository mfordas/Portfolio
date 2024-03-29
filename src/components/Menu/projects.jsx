import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styling/main_styling.scss';

const Projects = () => {
  const moveToDOMElement = () => {
    if (document.getElementById('root').getBoundingClientRect().width < 1024) {
      document.getElementById('projectsContainer').scrollIntoView();
    }
  };

  return (
    <div className='projectsMenuContainer'>
      <div className='projectMenuColumn'>
        <h3>Personal projects</h3>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/formazakupy'>
          <span>Forma Zakupy</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/wthr'>
          <span>Wthr</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/candydefense'>
          <span>Candy defense</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/productdetective'>
          <span>Product detective</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/contactform'>
          <span>Contact form</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/animalssounds'>
          <span>Animals sounds</span>
        </NavLink>
      </div>
      <div className='projectMenuColumn'>
        <h3>CodersCamp projects</h3>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/snake'>
          {' '}
          <span>Snake</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/foreccast'>
          <span>ForeCCast</span>
        </NavLink>
        <NavLink onClick={moveToDOMElement} className='projectNameContainer' to='/projects/taskwars'>
          <span>TaskWars</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
