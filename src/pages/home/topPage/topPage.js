import React, { useState } from "react";
import { NavBar } from "../../navBar/navBar";
import { Button1 } from "../../../components/button/button";
import { LoginPage } from "../../loginPage/loginPage";

import Image1 from "../../../assets/images/image1.png";
import Image2 from "../../../assets/images/image2.png";
import Image3 from "../../../assets/images/image3.png";
import Image4 from "../../../assets/images/image4.png";

import "./topPage.scss";

import Modal from "react-modal";

Modal.setAppElement("#root");

export const TopPage = () => {

  
 

  const [loginPageOpen, setLoginPageOpen] = useState(false);

  const clickHandle = () => {
    setLoginPageOpen(true);
  };

  return (
    <div className="top-page-container">
      <div className="top-page">
        <div className="top-page-header">
          <div className="logo">YourSwag.</div>
          <NavBar />
        </div>

        <div className="top-page-body">
          <div className="content">
            <h1>Designed to fit Loved for Style</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
            <div onClick={clickHandle}>
              <Button1
                size={{ width: "200px", height: "56px" }}
                backColor="#2222D3"
                value="Login"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="design">
        <div className="design-nav">
          <div onClick={clickHandle}>
            <Button1
              onClick={clickHandle}
              size={{ width: "174px", height: "56px" }}
              backColor="#2222D3"
              value="Login"
            />
          </div>
        </div>

       

        <div className="design-image-clips">
          <img className="image1" src={Image1} alt="" />
          <img className="image2" src={Image2} alt="" />
          <img className="image3" src={Image3} alt="" />
          <img className="image4" src={Image4} alt="" />

          <div className="clip1"></div>
          <div className="clip2"></div>
          <div className="clip3"></div>
        </div>
      </div>

      <LoginPage
        loginPageOpen={loginPageOpen}
        setLoginPageOpen={setLoginPageOpen}
      />
    </div>
  );
};
