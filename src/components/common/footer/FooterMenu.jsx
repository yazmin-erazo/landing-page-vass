import React from "react";
import "./footerMenu.scss";
import Logo from "../../common/logo/Logo";
import FooterMenuItems from "./FooterMenuItems";

const FooterMenu = () => {
  const sitemapVassLinks = [
    { label: "Home", url: "#" },
    { label: "Casos éxito", url: "#" },
    { label: "Somos VASS", url: "#" },
    { label: "Impactos", url: "#" },
    { label: "Método", url: "#" },
    { label: "Tecnologías", url: "#" },
    { label: "Proyectos I+D+i", url: "#" },
    { label: "Insights", url: "#" },
    { label: "Noticias", url: "#" },
    { label: "VASS Research", url: "#" },
    { label: "Canal de denuncias", url: "#" },
    { label: "Contacto", url: "#" },
  ];

  const sitemapTalentoLinks = [
    { label: "Talento", url: "#" },
    { label: "#LifeVASS", url: "#" },
    { label: "Beneficios", url: "#" },
    { label: "Planes para ti", url: "#" },
    { label: "Proyectos", url: "#" },
    { label: "Smartworking", url: "#" },
    { label: "Ofertas", url: "#" },
  ];

  const empresasLinks = [
    { label: "VASS", url: "#" },
    { label: "Nateevo", url: "#" },
    { label: "Serbatic", url: "#" },
    { label: "vdSHOP", url: "#" },
  ];

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row d-flex flex-row justify-content-between">
          <div className="col-12 col-md-1 mb-5">
            <h5 className="text-end">
              Complex
              <br />
              made
              <br />
              simple
            </h5>
          </div>
          <FooterMenuItems title="Sitemap VASS" links={sitemapVassLinks} />
          <FooterMenuItems
            title="Sitemap Talento"
            links={sitemapTalentoLinks}
          />
          <FooterMenuItems title="Empresas" links={empresasLinks} />
        </div>
      </div>

      <div className="container mb-5">
        <div className="row d-flex flex-row justify-content-between align-items-center">
          <div className="col-6 col-md-1"><Logo /></div>
          <div className="col-6 col-md-2">
            <img
              src="https://vasscompany.com/wp-content/themes/vass/images/CERTIFICADOS-2022_NEGATIVO.png"
              className="img-fluid"
              alt="certificados-2022"
            />
          </div>
        </div>
      </div>
      <hr className="m-0" />
    </footer>
  );
};

export default FooterMenu;
