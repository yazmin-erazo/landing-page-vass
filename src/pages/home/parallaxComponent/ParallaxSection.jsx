import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './parallaxSection.scss'

const ParallaxSection = () => {
    return (
        <div className="parallax-container overflow-x-hidden d-flex justify-content-center">
            <Parallax pages={2} className="animation">
            <ParallaxLayer offset={0.5} speed={0.2}>
                <h3 className="word-md d-flex justify-content-center text-black">WORK</h3>
            </ParallaxLayer>
    
            <ParallaxLayer offset={0.2} speed={0.2}>
                <div className="animation_layer parallax" id="a"></div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={0.7} speed={0.3}>
                <div className="animation_layer parallax" id="b"></div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={1} speed={0.4}>
                <div className="animation_layer parallax" id="c"></div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={0} speed={0} sticky={{ start: 0.9, end: 1.5 }}>
                <h2 className="word-xl d-flex justify-content-center text-black">WELCOME</h2>
            </ParallaxLayer>
            </Parallax>
        </div>
    );
};
    
export default ParallaxSection;