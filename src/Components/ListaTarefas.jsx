import React, { useState } from 'react';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar sua Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
