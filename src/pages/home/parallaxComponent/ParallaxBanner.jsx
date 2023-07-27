import "./ParallaxBanner.scss";

const ParallaxBanner = () => {
    const videoUrl = "https://res.cloudinary.com/dfkakq2ii/video/upload/v1690450445/zndji0n9clrhtrovfy6l.mp4";

    return (
        <div className="parallax-container d-flex flex-column">
            <video autoPlay loop muted playsInline className="parallax-video">
            <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="parallax-text">
            <h1>Impulso digital</h1>
            </div>
            <i className="bi bi-mouse text-white fs-1"></i>
        </div>
    );
};
    
export default ParallaxBanner;