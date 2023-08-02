import React from 'react';
import PropTypes from 'prop-types';
import './TextAnimation.scss';

const TextAnimation = ({ texts, animationDuration, animationDelay, fontSize }) => {
  const animationStyle = {
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
    fontSize: `${fontSize}rem`,
  };

  return (
    <div className="text-animation-container">
      {texts.map((text, index) => (
        <h1 key={index} className="text-animation" style={animationStyle}>
          {text}
        </h1>
      ))}
    </div>
  );
};

TextAnimation.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  animationDuration: PropTypes.number,
  animationDelay: PropTypes.number,
  fontSize: PropTypes.number,
};

TextAnimation.defaultProps = {
  animationDuration: 1,
  animationDelay: 0.2, 
  fontSize: 3, 
};

export default TextAnimation;