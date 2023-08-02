import FooterCopyright from "../components/common/footer/FooterCopyright";
import FooterMenu from "../components/common/footer/FooterMenu";
import Header from "../components/common/header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <FooterMenu />
      <FooterCopyright />
    </>
  );
};

export default MainLayout;
