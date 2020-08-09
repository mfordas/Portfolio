import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styling/main_styling.scss';


const Projects = () => {

    const moveToDOMElement = () => {
        if(document.getElementById('root').getBoundingClientRect().width < 1024) {
        document.getElementById('projectsContainer').scrollIntoView();
        }
    };

    return (
        <div className="projectsMenuContainer">
            <div className='projectMenuColumn'>
                <h3>Personal projects</h3>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/formazakupy"><span>Forma Zakupy</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/wthr"><span>Wthr</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/candydefense"><span>Candy defense</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/productdetective"><span>Product detective</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/contactform"><span>Contact form</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/animalssounds"><span>Animals sounds</span></NavLink>
            </div>
            <div className='projectMenuColumn'>
                <h3>CodersCamp projects</h3>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/snake"> <span>Snake</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/foreccast"><span>ForeCCast</span></NavLink>
                <NavLink onClick={moveToDOMElement} className="projectNameContainer" to="/Portfolio/projects/taskwars"><span>TaskWars</span></NavLink>
            </div>
        </div>
    );
}

export default Projects;







