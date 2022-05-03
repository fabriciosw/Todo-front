import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';
import getAll from './services/getAll'
import endTask from './services/endTask';
import deleteTask from './services/deleteTask';

function App() {
  const [taskStatus, setTaskStatus] = useState<boolean|undefined>(undefined);
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  useEffect(() => {getAll(setTarefas)}, []);

  function verFinalizadas() {
    setTaskStatus(true);
  }
  function verPendentes() {
    setTaskStatus(false);
  }
  function verTodas() {
    setTaskStatus(undefined)
  }

  return (
    <div className="App">
      <div className='leftside'>
        <div className='formbox'>
        <Formulario getAll={getAll} tarefas={tarefas} setTarefas={setTarefas}/>
      
        <div className='linha'>
          <button onClick={() => verTodas()}>Ver Todas</button>
          <button onClick={() => verPendentes()}>Ver Pendentes</button>
          <button onClick={() => verFinalizadas()}>Ver Concluídas</button>
        </div>
        </div>
      </div>
      <div className='rightside'>
        <h1 className='title'>Tarefas</h1>
        <Lista 
          deleteTask={deleteTask} 
          endTask={endTask} 
          taskStatus={taskStatus} 
          tarefas={tarefas} 
          setTarefas={setTarefas}
        />
      </div>
    </div>
  );
}

export default App;