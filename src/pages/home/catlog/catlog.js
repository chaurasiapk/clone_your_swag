import React from "react";

import TShirt from "../../../assets/images/tshirt.png"
import Hoodies from "../../../assets/images/hoodies.png"
import SweatShirt from "../../../assets/images/sweatshirt.png"
import ActiveWear from "../../../assets/images/activewear.png"

import "./catlog.scss"

export const  Catlog =()=>{
    return(
        <div className="catlog-container">

            <div className="catlog">
                    <div className="catlog-up">
                        <h3>Product Catalog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </div>

                    <div className="catlog-down">
                        <div className="product">
                            <strong>T-shirts</strong>
                            <img src={TShirt} alt=''/>

                        </div>

                        <div className="product">
                            <strong>Hoodies</strong>
                            <img src={Hoodies} alt=''/>

                        </div>

                        <div className="product">
                            <strong>Sweatshirt</strong>
                            <img src={SweatShirt} alt=''/>

                        </div>

                        <div className="product">
                            <strong>Activewear</strong>
                            <img src={ActiveWear} alt=''/>

                        </div>


                    </div>





            </div>
            

        </div>
    );
}