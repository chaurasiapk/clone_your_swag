import "./testimonial.scss";

import User1 from "../../../assets/images/user1.png";

export const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <div className="testimonial-left">
          <div className="user">
            <img src={User1} alt="" />
            <p>Test User</p>
          </div>

          <div className="user-desc">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              iaculis pellentesque justo, lacus nunc morbi placerat viverra
              cras.”
            </p>
          </div>

          <div className="dots">
            <button className="dot-btn">
              <div className="dot  active" />
            </button>
            <button className="dot-btn">
              <div className="dot">{/* single dot */}</div>
            </button>
            <button className="dot-btn">
              <div className="dot">{/* single dot */}</div>
            </button>
          </div>
        </div>

        <div className="testimonial-right">
          <span>Testimonial</span>
          <h3>What our customer have to say about us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            sociis tempus lacus sed senectus sollicitudin.
          </p>
          <button className="submit-btn" type="submit">
            See More
            <span
              className="material-symbols-outlined"
              style={{ color: "#2222D3" }}
            >
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
