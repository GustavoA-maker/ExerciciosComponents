import React from 'react';
import Contador from './Components/Contador';
import AlternarTexto from './Components/AlternarTexto';
import ListaTarefas from './Components/ListaTarefas';

const App = () => {
  return (
    <div>
      <h1>Componentes React</h1>
      <h2>Contador</h2>
      <Contador />
      <h2>Alternar Texto</h2>
      <AlternarTexto />
      <h2>Lista de Tarefas</h2>
      <ListaTarefas />
    </div>
  );
};

export default App;
