import "./loginPage.scss";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";

export const LoginPage = ({ loginPageOpen, setLoginPageOpen }) => {
  const [email, setEmail] = useState("");

  const [isEmailValid, setEmailValid] = useState(true);

  const navigate = useNavigate();

  const contentOnLarge = {
    position: "absolute",
    top: "20%",
    bottom: "20%",
    left: "16%",
    right: "16%",
  };

  const contentOnSmall = {
    position: "absolute",
    top: "24px",
    bottom: "24px",
    left: "24px",
    right: "24px",
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(true)
  };

  const handleSubmit = () => {

     const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
      if (email.match(validRegex)){
      localStorage.setItem("email", email);
      setLoginPageOpen(false);
      navigate("/dashboard");
      return;
      }
      setEmailValid(false);

  };

  return (
    <Modal
      isOpen={loginPageOpen}
      style={{
        overlay: {
          background: "rgba(0, 0, 0 , 0.5)",
          zIndex: 2,
        },

        content: window.innerWidth < 720 ? contentOnSmall : contentOnLarge,
      }}
    >
      <div className="page-body">
        <div
          className="close-button"
          onClick={() => {
            setLoginPageOpen(false);
            setEmailValid(true);
            setEmail("");
          }}
        >
          <i className="ri-close-line" />
        </div>

        <div className="page-content">
          <h3>Your Account</h3>
          <div className="form-container">
            <div className="login-form">
              <div className="input-container">
                <label htmlFor="input-label">Email</label>
                <input
                  onChange={handleChangeEmail}
                  type="text"
                  className="input-field"
                  value={email}
                  id="email"
                  placeholder="Email"
                />
                {!isEmailValid && (
                  <p className="error-message">* invalid input</p>
                )}
              </div>
              <button onClick={handleSubmit} type="submit">
                Continue
              </button>
            </div>

            <div className="devider">
              <div className="left-line" />
              <div className="or">OR</div>
              <div className="right-line" />
            </div>

            <div className="social-btn">
              <button className="g-btn">
                <img src={Google} alt="" />
                Continue with Google
              </button>
              <button className="f-btn">
                <img src={Facebook} alt="" />
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
