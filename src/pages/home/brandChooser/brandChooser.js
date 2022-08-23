import React from "react";


import Adidas from "../../../assets/images/adidas.png";
import Hanes from "../../../assets/images/hanes.png";
import Nike from "../../../assets/images/nike.png";
import North_face from "../../../assets/images/north-face.png";
import Vector1 from "../../../assets/images/vector(1).png";
import Vector2 from "../../../assets/images/vector(2).png";


import "./brandChooser.scss"

export const BrandChooser =()=>{
    return(

        <div className="brand-chooser-container">

            <div className="brand-chooser">

                <div className="brand-chooser-left">

                    <h3>20+ brands to choose from</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    
                </div>

                <div className="brand-chooser-right">

                    <div className="image-icon">
                        <img src={Adidas} alt=""/>
                    </div>

                    <div className="image-icon">
                        <img src={Hanes} alt=""/>
                    </div>

                    <div className="image-icon">
                        <img src={Nike} alt=""/>
                    </div>

                    <div className="image-icon">
                        <img src={North_face} alt=""/>
                    </div>

                    <div className="image-icon">
                        <img src={Vector1} alt=""/>
                    </div>

                    <div className="image-icon">
                        <img src={Vector2} alt=""/>
                    </div>

                    
                </div>


            </div>

        </div>
    
    );
}