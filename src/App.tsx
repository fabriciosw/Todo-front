import React, { useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  
  return (
    <div className="App">
      <h1>
        Lista de tarefas
      </h1>
        <Formulario setTarefas={setTarefas}></Formulario>
        <Lista tarefas={tarefas}></Lista>
    </div>
  );
}

export default App;
