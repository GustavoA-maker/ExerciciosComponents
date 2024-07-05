import React, { useState } from 'react';

const AlternarTexto = () => {
  const [texto, setTexto] = useState('Bom dia');

  const alternar = () => {
    setTexto((prevTexto) => (prevTexto === 'Bom dia' ? 'Boa tarde' : 'Boa noite'));
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={alternar}>Alterar Texto</button>
    </div>
  );
};

export default AlternarTexto;
