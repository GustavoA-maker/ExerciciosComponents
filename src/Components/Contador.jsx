import React, { useState } from 'react';

const Contador = () => {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>O botão foi clicado {contagem} vezes.</p>
      <button onClick={() => setContagem(contagem + 1)}>Clique-me</button>
    </div>
  );
};

export default Contador;
