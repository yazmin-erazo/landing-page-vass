import { useState } from "react";
import "./FourColumnSection.scss";

const Column = ({ title, link, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (event) => {
        event.currentTarget.classList.add("bg-white");
        setIsHovered(true);
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.classList.remove("bg-white");
        setIsHovered(false);
    };

return (
    <div className="col-md-3 bg-black border-right border-white d-flex align-items-center justify-content-center column"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <h2 className="w-100 d-flex justify-content-between align-items-center">
            <a className="fs-1 white-text m-4" href={link}>{title}</a>
            {isHovered ? (
            <i className="bi bi-arrow-up-right-circle-fill white-text icon fs-2"></i>
            ) : (
            <i className="bi bi-arrow-right-circle white-text icon fs-2"></i>
            )}
        </h2>

    <div className="info-box fs-5"><p>{description}</p></div>
    </div>
    );
};

export default Column