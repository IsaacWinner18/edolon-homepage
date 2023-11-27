import "./../App.css";

const NoteSecTwo = () => {
  return (
    <div>
      <div className="intro-estate">
        <p>
          Introducing our Real Estate <br /> business, where data science <br />{" "}
          research supports real estate <br /> investing.
        </p>
        <p>
          Learn More{" "}
          <img
            src={process.env.PUBLIC_URL + "right-arrow.png"}
            style={{
              width: "30px",
              position: "relative",
              top: "10px",
              color: "white",
            }}
            alt=" "
            className="hey"
          />{" "}
        </p>
      </div>

<div className="footer">
      <div className="address-sec">
        <div className="about-sec">
          <ul>
            <li style={{fontWeight: "700", opacity: "1", fontSize: "18px"}}>About Us</li>
            <li>Our Firm</li>
            <li>What We Do</li>
            <li>Products and Services</li>
            <li>Risk Management</li>
          </ul>
        </div>
        <div className="headqua-sec">
          <ul>
            <li style={{fontWeight: "700", opacity: "1", fontSize: "18px"}}>Headquaters</li>
          <li>2 The Mill</li>
            <li>Chamberhouse Mill Lane,</li>
            <li>Thatcham, England, RG19 4NG</li>
          </ul>
        </div>
      </div>

<div className="foot-footer">
      <p>&copy; 2023 Eidolon Finance. All rights reserved.</p>
      <p>
            <ul>
                  <li>Privacy Policies</li>
                  <li>Contact Us</li>
            </ul>
      </p>
</div>


      </div>
    </div>
  );
};

export default NoteSecTwo;
