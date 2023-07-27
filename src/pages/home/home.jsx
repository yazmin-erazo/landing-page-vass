import ParallaxBanner from './parallaxComponent/ParallaxBanner'
import FourColumnSection from '../../components/homeSections/FourColumnSection'
import ParallaxSection from './parallaxComponent/ParallaxSection'
import MainLayout from '../../layouts/MainLayout'


const home = () => {
  return (
    <MainLayout >
      <ParallaxBanner />
      <FourColumnSection />
      <ParallaxSection />
    </MainLayout>
  )
}

export default home