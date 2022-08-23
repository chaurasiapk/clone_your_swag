 import "./footer.scss";

 import 'remixicon/fonts/remixicon.css'


 export const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer">

                <div className="your-swag">
                    <strong>YourSwag.</strong>
                    <ul>
                        <li>Terms & Condition</li>
                        <li>Fees & Payment</li>
                        <li>Returns & Refunds</li>
                        
                    </ul>

                </div>

                <div className="help">
                    <strong>Help</strong>
                    <ul>
                        <li>Track Order</li>
                        <li>Frequently Asked Questions</li>
                        <li>Customer Care</li>
                        
                    </ul>

                </div>

                <div className="shop-for">
                    <strong>Shop for</strong>
                    <ul>
                        <li>Tshirts</li>
                        <li>Hoodies</li>
                        <li>Sweatshirt</li>
                        <li>Activewear</li>
                        
                    </ul>

                </div>

                <div className="follow-us">
                    <strong>Follow Us</strong>
                    <ul>
                        <li><i className="ri-instagram-fill"/>Instagram</li>
                        <li><i className="ri-facebook-circle-fill"/>Facebook</li>
                        <li><i className="ri-twitter-fill"/>Twitter</li>
                        
                    </ul>

                </div>



            </div>

        </div>
    );
 }