import React from "react";

const Button = () => {
  return (
    <a className="cta-wrapper">
      <div className="cta-group group">
        <p className="text">See my Work</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
