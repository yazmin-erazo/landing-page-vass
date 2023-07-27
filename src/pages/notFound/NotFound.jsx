import React from 'react';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container text-center bg-black text-white d-flex justify-content-center flex-column">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default NotFound;