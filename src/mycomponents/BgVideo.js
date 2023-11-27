import './../App.css';


const BgVideo = () => {
      return (
            <div className="video-container">
            <video autoPlay loop muted>
              <source
                src={
                  process.env.PUBLIC_URL +
                  "/201002_FiSci_Mobile_Loop_2X_H264-LowRes.mp4"
                }
                type="video/mp4"
              />
            </video>
           
          </div>
      );
};

export default BgVideo;