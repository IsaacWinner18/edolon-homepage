import "./../App.css";
// import React, { useState, useEffect } from "react";


const NoteSecOne = () => {

  

  return (
    <div>
      <div className="note-section-one">
        <p>
          Investment innovation at the intersection of technology, data and
          behavioral finance. It's in our DNA.
        </p>

        <p className="learn-more-btn">
          Learn More{" "}
          <img
            src={process.env.PUBLIC_URL + "right-arrow.png"}
            style={{ width: "30px", position: "relative", top: "10px" }}
            alt=" "
          />{" "}
        </p>
      </div>

      <div className="two-sec-flex">
        <div className="first-flex">
          <p>Our people advance our understanding of the world.</p>
          <p>3000%</p>
          <p>
            Our assets under management has risen considerably in the past two
            decades
          </p>
          <label class="square-checkbox">
        <input type="checkbox" />
        <span></span>
    </label>
          &nbsp;&nbsp;&nbsp;
          <label class="square-checkbox">
            <input type="checkbox" />

            <span></span>
          </label>
          &nbsp;&nbsp;&nbsp;
          <label class="square-checkbox">
            <input type="checkbox" />

            <span></span>
          </label>
          &nbsp;&nbsp;&nbsp;

        </div>

        <div className="second-flex">
          <p>
            We apply our scientific expertise to a number of financial services
            sectors.
          </p>
          <p>50M</p>
          <p>Shares executed per our Securities platform daily</p>

          <label class="square-checkbox">
        <input type="checkbox" />
        <span></span>
    </label>

          &nbsp;&nbsp;&nbsp;
          <label class="square-checkbox">
            <input type="checkbox" />

            <span></span>
          </label>
          &nbsp;&nbsp;&nbsp;
          <label class="square-checkbox">
            <input type="checkbox" />

            <span></span>
          </label>
          &nbsp;&nbsp;&nbsp;

        </div>
      </div>
     
    </div>
  );
};

export default NoteSecOne;
