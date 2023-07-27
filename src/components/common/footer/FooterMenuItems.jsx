import React from 'react'

const FooterMenuItems = ({ title, links }) => {
    return (
        <div className="col-6 col-md-2 mb-5">
            <h6 className="mb-4">{title}</h6>
            <ul className="list-unstyled p-0">
            {links.map((link, index) => (
                <li key={index}><a className="nav-link text-white" aria-label={link.label} href={link.url}>{link.label}
                </a>
                </li>
            ))}
            </ul>
        </div>
    );
  };
  
  export default FooterMenuItems;