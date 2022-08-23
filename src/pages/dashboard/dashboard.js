import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../navBar/navBar";
import { Products } from "../../constant";

import { ProductDemo } from "../../components/models/productDemo/productDemo";

import "./dashboard.scss";

export const Dashboard = () => {
  const [localEmail, setLocalEmail] = useState("");

  const [productItem , setProductItem] = useState({});

  const [productDemoIsOpen, setProductDemoOpen] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    setLocalEmail(localStorage.getItem("email"));
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("email");
    setLocalEmail("");
    navigate("/");
    alert("logOut Successful...");
  };


  const userName = localEmail.substring(0 , localEmail.indexOf('@'));

  return (
    <div className="dashboard-container">
      <div className="dashboard" style={{ textAlign: "center" }}>
        <div className="dashboard-header">
          <div className="logo">YourSwag.</div>
          <NavBar />
          <div className="user-details">
            <div className="initial">{userName[0]}</div>
            <div style={{textTransform:"capitalize"}}>{` Welcome ! ${userName}`}</div>

            <div onClick={logOutHandler} className="btn-logout">
              <span className="material-symbols-rounded btn-icon">logout</span>
              <div className="btn-tooltip">logOut</div>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          {Products.map((product, id) => {
            return (
              <>
                <div
                  onClick={() => {
                    setProductItem(product);
                    setProductDemoOpen(true);
                  }}
                  className="product-card"
                >
                  <img className="product-image" src={product.image} alt="" />
                  <div className="product-details">
                    <div className="compony-name">{product.brandName}</div>
                    <div className="product-type">{product.type}</div>
                    <div className="product-price">{`$${product.price} each for 10 items`}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <ProductDemo
        productDemoIsOpen={productDemoIsOpen}
        setProductDemoOpen={setProductDemoOpen}
        productItem={productItem}
      />
    </div>
  );
};
