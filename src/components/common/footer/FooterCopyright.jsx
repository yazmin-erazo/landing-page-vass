import './footerCopyright.scss';

const FooterCopyright = () => {
    return (
        <div className="custom-font bottom-0 bg-dark text-white p-4 text-center">
            <div className="container d-flex justify-content-center justify-content-md-between flex-column flex-md-row">
                <div className="copyright mb-3 px-3">
                    <span>Copyright © 2023 Todos los derechos reservados</span>
                </div>
        
                <div className="menu-footer">
                    <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                        <li className="border-start px-2 mb-2"><a href="#" className="text-white text-decoration-none">Política de cookies</a></li>
                        <li className="border-start px-2 mb-2"><a href="#" className="text-white text-decoration-none">Política de privacidad</a></li>
                        <li className="border-start px-2 mb-2"><a href="#" className="text-white text-decoration-none">Política de calidad y medio ambiente</a></li>
                        <li className="border-start px-2 mb-2"><a href="#" className="text-white text-decoration-none">Política de la seguridad de la información</a></li>
                    </ul>
                </div>
                <div className="social-icons d-flex gap-3 justify-content-center">
                    <a href="#" className="text-white mx-2  d-inline-block" title="Twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-white mx-2  d-inline-block" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-white mx-2  d-inline-block" title="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white mx-2  d-inline-block" title="YouTube"><i className="bi bi-youtube"></i></a>
                </div>
            </div>
        </div>
    );
}

export default FooterCopyright