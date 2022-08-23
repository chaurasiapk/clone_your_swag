import React from "react";

import "./navBar.scss";

export const NavBar =()=>{
    return(
        <div className="nav-bar-container">
            <div className="nav-bar">
                <div className="nav-items-list">
                
                <button className="nav-item item1" type="submit">Products</button>
                <button className="nav-item item2" type="submit">Track-Order</button>
                <button className="nav-item item3" type="submit">Retrieve-Design</button>
                   


                </div>

            </div>

        </div>
    );
}