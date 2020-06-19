import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styling/main_styling.scss';


const LandingPageContent = () => {

    return (
        <div className="landingContainer">
            <h3>Jump in!</h3>
            <NavLink className="hole" to="/Portfolio/projects/main"></NavLink>
        </div>
    );
}

export default LandingPageContent;