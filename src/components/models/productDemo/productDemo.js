import "./productDemo.scss";
import Modal from "react-modal";
import { Button1 } from "../../button";

import RattingStar from "../../../assets/images/ratting-star.png"

export const ProductDemo = ({ productDemoIsOpen, setProductDemoOpen , productItem }) => {
  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0 , 0.5)",
      zIndex: 2,
      padding: "50px",
    },

    content: {
      position: "absolute",
      top: window.innerWidth>800 ? "130px" : "20px",
      bottom: window.innerWidth>800 ? "130px" : "20px",
      left: window.innerWidth>800 ? "156px" : "20px",
      right: window.innerWidth>800 ? "156px" : "20px",
      borderRadius: "16px",
    },
  };

  return (
    <Modal
      isOpen={productDemoIsOpen}
      onAfterOpen={false}
      onRequestClose={() => setProductDemoOpen(false)}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="productDemo">
        <button
          onClick={() => {
            setProductDemoOpen(false);
          }}
          className="close-btn"
        >
          <i className="ri-close-line"></i>
        </button>

        <div className="product-details">
          <div className="product-left">
            <img className="product-image" src={productItem.image} alt="" />
          </div>

          <div className="product-right">

            <div className="primary-details">
              <h3 className="brand-name">{productItem.brandName}</h3>
              <p className="type">{productItem.type}</p>
              <span className="ratting"><img src={RattingStar} alt=""/><h3>4.3</h3><p>(Based on 620 ratings)</p></span>
            </div>

            <div className="color-available">
              <h3>Color Available</h3>
              <div className="colors">

                <input type="radio" name="colors" id="white" className="radio-white"/>
                <label htmlFor="white"><div className="color white"></div></label>

                <input type="radio" name="colors" id="black"/>
                <label htmlFor="black"><div className="color black"></div></label>
                

                <input type="radio" name="colors" id="blue"/>
                <label htmlFor="blue"><div className="color blue"></div></label>
                

                <input type="radio" name="colors" id="red"/>
                <label htmlFor="red"><div className="color red"></div></label>
                

                <input type="radio" name="colors" id="orange"/>
                <label htmlFor="orange"><div className="color orange"></div></label>
                

                <input type="radio" name="colors" id="aqua"/>
                <label htmlFor="aqua"><div className="color aqua"></div></label>
                

                <input type="radio" name="colors" id="green"/>
                <label htmlFor="green"><div className="color green"></div></label>
                

                <input type="radio" name="colors" id="yellow" className="radio-yellow"/>
                <label htmlFor="yellow"><div className="color yellow"></div></label>
                

              </div>
            </div>

            <div className="size-available">
              <h3>Size Available</h3>
              <div className="sizes">

                <input type="radio" name="sizes" id="xs-size"/>
                <label htmlFor="xs-size"><div className="size xs-size">XS</div></label>

                <input type="radio" name="sizes" id="s-size"/>
                <label htmlFor="s-size"><div className="size s-size">X</div></label>
                

                <input type="radio" name="sizes" id="m-size"/>
                <label htmlFor="m-size"><div className="size m-size">M</div></label>
                

                <input type="radio" name="sizes" id="l-size"/>
                <label htmlFor="l-size"><div className="size l-size">L</div></label>
                

                <input type="radio" name="sizes" id="xl-size"/>
                <label htmlFor="xl-size"><div className="size xl-size">XL</div></label>
                
                <input type="radio" name="sizes" id="xxl-size"/>
                <label htmlFor="xxl-size"><div className="size xxl-size">XXL</div></label>
                

                <input type="radio" name="sizes" id="xxxl-size"/>
                <label htmlFor="xxxl-size"><div className="size xxxl-size">XXXL</div></label>
                
              </div>
            </div>

            <div className="start-btn">
              <Button1
                size={{ width: "100%", height: "56px" }}
                backColor="#2222D3"
                value="Buy"
              />
            </div>

            <div className="other-details">
              <h3>Other Details</h3>
              <div className="details">
                <div className="fabric">
                    <p>Fabric</p>
                    <h3>Cotton</h3>
                </div>
                <div className="fit">
                    <p>Fit</p>
                    <h3>Regular</h3>
                </div>
                <div className="neckline">
                    <p>Neckline</p>
                    <h3>{productItem.type}</h3>
                </div>
                <div className="sleeve-length">
                    <p>Sleeve Length</p>
                    <h3>Short Sleeves</h3>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </Modal>
  );
};
