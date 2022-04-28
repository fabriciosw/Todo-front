import React, { useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  function deleteTask(id: string) {
    return setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }
  
  function endTask(id:string) {
    return setTarefas(tarefas.map((tarefa) => {
      if(tarefa.id === id){
        tarefa.done= true
        console.log(tarefa)
      }
      return tarefa
    }))
  }

  return (
    <div className="App">
      <h1>
        Lista de tarefas
      </h1>
        <Formulario setTarefas={setTarefas}></Formulario>
        <Lista tarefas={tarefas} deleteTask={deleteTask} endTask={endTask}></Lista>
    </div>
  );
}

export default App;