import ParallaxBanner from "./parallaxComponent/ParallaxBanner";
import FourColumnSection from "../../components/homeSections/FourColumnSection";
import ParallaxSection from "./parallaxComponent/ParallaxSection";

const home = () => {
  return (
    <>
      <ParallaxBanner />
      <FourColumnSection />
      <ParallaxSection />
    </>
  );
};

export default home;
