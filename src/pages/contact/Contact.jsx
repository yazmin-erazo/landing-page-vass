import ContentSection from '../../components/contentSection/ContentSection';
import FormContact from '../../components/form/FormContact';
import './contact.scss';

const Contact = () => {
  const videoUrl = "https://res.cloudinary.com/dfkakq2ii/video/upload/v1690457091/g9s4turdwvparbdfhm6i.mp4";

  return (
    <>
      <div className="mt-3 hero-banner d-flex text-center justify-content-md-end align-items-end text-md-end text-uppercase">
        <div className='container'><h1 className="fw-bold text-uppercase mb-5">Contacto</h1></div>
      </div>
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <ContentSection />
      <FormContact />
    </>
  );
};

export default Contact;
