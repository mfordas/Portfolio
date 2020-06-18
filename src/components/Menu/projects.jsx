import React from 'react';

import '../../styling/main_styling.scss';


const Projects = () => {

    return (
        <div className="projectsContainer">
            <div className='projectColumn'>
                <h3>Personal projects</h3>
                <div className="projectNameContainer">
                        <span>Forma Zakupy</span>
                </div>
                <div className="projectNameContainer">
                        <span>Wthr</span>
                </div>
                <div className="projectNameContainer">
                        <span>Animals sounds</span>
                </div>
                <div className="projectNameContainer">
                        <span>Contact form</span>
                </div>
            </div>
            <div className='projectColumn'>
                <h3>CodersCamp projects</h3>
               <div className="projectNameContainer">
                        <span>Snake</span>
                </div>
                <div className="projectNameContainer">
                        <span>ForeCCast</span>
                </div>
                <div className="projectNameContainer">
                        <span>TaskWars</span>
                </div>
            </div>
        </div>
    );
}

export default Projects;







