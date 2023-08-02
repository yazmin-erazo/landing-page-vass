import TextAnimation from "../../../components/common/TextAnimation/TextAnimation";
import "./ParallaxBanner.scss";

const ParallaxBanner = () => {
  const videoUrl =
    "https://res.cloudinary.com/dfkakq2ii/video/upload/v1690661806/qqoym15sviz2ujp38stz.mp4";

  return (
    <div className="parallax-container d-flex flex-column">
      <video autoPlay loop muted playsInline className="parallax-video">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="parallax-text">
        <TextAnimation
          texts={["Impulso", "Digital"]}
          animationDuration={0.8}
          animationDelay={0.3}
          fontSize={4}
        />
      </div>
      <i className="bi bi-mouse text-white fs-1"></i>
    </div>
  );
};

export default ParallaxBanner;
