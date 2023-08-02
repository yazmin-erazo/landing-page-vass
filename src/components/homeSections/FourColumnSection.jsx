import { useEffect, useRef, useState } from "react";
import Column from "./Column";
import SpinningText from "../common/SpinningText/SpinningText.JSX";

const videos = [
  "https://res.cloudinary.com/dfkakq2ii/video/upload/v1690646949/yz1y0mujh9uqyjvsb2qy.mp4",
  "https://res.cloudinary.com/dfkakq2ii/video/upload/v1690646948/ohoxcwsvu1d5gnbrbiej.mp4",
  "https://res.cloudinary.com/dfkakq2ii/video/upload/v1690646949/seobf5zmemgkbs84agup.mp4",
];

const FourColumnSection = () => {
  const [activeColumn, setActiveColumn] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleColumnHover = (index) => {
    setActiveColumn(index);
  };
  const handleColumnLeave = () => {
    setActiveColumn(null);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (activeColumn !== null && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    } 
  }, [activeColumn]);


  return (
    <div className="container-fluid border-bottom border-md-top border-white">
      <div className="row" style={{ height: "85vh" }}>
        <Column
          title="Brand"
          link="#brand"
          description="Short phrase about Brand"
          isHovered={activeColumn === 0}
          handleMouseEnter={() => handleColumnHover(0)}
          handleMouseLeave={handleColumnLeave}
        />
        <Column
          title="Product"
          link="#"
          description="Short phrase about Product"
          isHovered={activeColumn === 1}
          handleMouseEnter={() => handleColumnHover(1)}
          handleMouseLeave={handleColumnLeave}
        />
        <Column
          title="Motion"
          link="#"
          description="Short phrase about Motion"
          isHovered={activeColumn === 2}
          handleMouseEnter={() => handleColumnHover(2)}
          handleMouseLeave={handleColumnLeave}
        />
        {!isMobile && (
          <div className="col-md-3 bg-black d-flex align-items-center justify-content-center column video-column">
            <div
              className="curtain"
              style={{ height: activeColumn !== null ? "0%" : "100%" }}
            />
            <SpinningText text="What we do - What we do - What we do - What we do - What we do - ">
              <i className="bi bi-asterisk"></i>
            </SpinningText>
            {activeColumn !== null && (
              <div className="video-player w-100">
                <video
                  ref={videoRef}
                  className="video-element"
                  src={videos[activeColumn]}
                  controls={false}
                  loop
                  autoPlay
                  muted
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FourColumnSection;
