import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styling/main_styling.scss';


const Projects = () => {

    return (
        <div className="projectsMenuContainer">
            <div className='projectMenuColumn'>
                <h3>Personal projects</h3>
                <NavLink className="projectNameContainer" to="/projects/formazakupy"><span>Forma Zakupy</span></NavLink>
                <NavLink className="projectNameContainer" to="/projects/wthr"><span>Wthr</span></NavLink>
                <NavLink className="projectNameContainer" to="/projects/candydefense"><span>Candy defense</span></NavLink>
                <NavLink className="projectNameContainer" to="/projects/contactform"><span>Contact form</span></NavLink>
                <NavLink className="projectNameContainer" to="/projects/animalssounds"><span>Animals sounds</span></NavLink>
            </div>
            <div className='projectMenuColumn'>
                <h3>CodersCamp projects</h3>
                <NavLink className="projectNameContainer" to="/projects/snake"> <span>Snake</span></NavLink>
                <NavLink className="projectNameContainer" to="/projects/foreccast"><span>ForeCCast</span></NavLink>
                <NavLink className="projectNameContainer" to="/projects/taskwars"><span>TaskWars</span></NavLink>
            </div>
        </div>
    );
}

export default Projects;







