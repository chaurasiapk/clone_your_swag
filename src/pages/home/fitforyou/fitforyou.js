 import "./fitforyou.scss";

 import Icon1 from "../../../assets/images/icon1.png"
 import Icon2 from "../../../assets/images/icon2.png"
 import Icon3 from "../../../assets/images/icon3.png"
 import Icon4 from "../../../assets/images/icon4.png"


 export const FitForYou = ()=>{
    return(
        <div className="fitforyou-container">
            <div className="fitforyou">
                <div className="fitforyou-up">
                    <h3>Why YourSwag is fit for you</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>

                <div className="fitforyou-down">
                    <div className="icons">
                        <img src={Icon1} alt=''/>
                        <strong>Affordable Prices</strong>

                    </div>

                    <div className="icons">
                        <img src={Icon2} alt=''/>
                        <strong>Fast Turnaround</strong>

                    </div>

                    <div className="icons">
                        <img src={Icon3} alt=''/>
                        <strong>Satisfaction Guaranteeds</strong>

                    </div>

                    <div className="icons">
                        <img src={Icon4} alt=''/>
                        <strong>Customer Service</strong>

                    </div>
                    
                </div>

            </div>

        </div>
    );
 }