import React from "react";
import "./SpinningText.scss"

const SpinningText = ({ text, children }) => {
    const lenght = text.length;
    const deg = 360 / lenght;
    return (
    <div className="spinning-text-wrapper rounded-circle text-light d-flex align-items-center justify-content-center">
        <div className="spinning-text">
        <p className="m-0">
            {text.split("").map((letra, i) => (
            <span key={i} className="position-absolute" style={{transform: `rotate(${deg * i}deg)`}}>
                {letra}
            </span>
            ))}
        </p>
        </div>
        {children}
    </div>
    );
};

export default SpinningText;
