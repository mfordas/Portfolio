import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaReact, FaSass } from 'react-icons/fa';

import productDetective1Src from '../../img/ProductDetective1.jpg'; 
import productDetective2Src from '../../img/ProductDetective2.jpg'; 
import '../../styling/main_styling.scss';


const ProductDetective = () => {

    return (
        <div className="projectContainer">
            <h3>Product Detective</h3>
            <h4>Simple page for checking Nutrinion score of products. Page is based on Open Food Facts API and ZXing library for reading barcode of products</h4>
            <div className='linksIcons'>
            <div className="menuProjectIconContainer"><h2><a href='https://fordas.pl/ProductDetective/index' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/ProductDetective' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Product Detective Github</p></div>
            </div>
            <div className='gallery'>
                <img src={productDetective1Src} alt='img'/>
                <img src={productDetective2Src} alt='img'/>
            </div>
            <div className='linksIconsStack'>
                <div className="stackIconContainer">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="stackIconContainer">
                    <FaSass />
                    <p>Sass</p>
                </div>
            </div>
            
        </div>
    );
}

export default ProductDetective;