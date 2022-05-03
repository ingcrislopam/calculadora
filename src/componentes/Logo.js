import React from 'react';
import '../hojas-de-estilo/Logo.css';

const Logo = ({ imagen }) => (
  <div className='freecodecamp-logo-contenedor'>
    <img
      src={imagen}
      className='freecodecamp-logo'
      alt='Logo de freeCodeCamp'
    />
    </div>
);

export default Logo;