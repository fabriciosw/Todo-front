import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [onlyComplete, setOnlyComplete] = useState(false);

  function deleteTask(id: string) {
    return setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  function endTask(id: string) {
    return setTarefas(tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.done = true
        console.log(tarefa)
      }
      return tarefa
    }))
  }

  function verFinalizadas() {
    setOnlyComplete(true);
  }
  function verPendentes() {
    setOnlyComplete(false);
  }

  const [tarefass, setTarefass] = useState([]);

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://trainees-2022-todo-api-week-3.herokuapp.com/todos/',
      headers: {}
    };

    axios(config)
      .then(function (response: any) {
        setTarefass(response.data);
        // console.log(tarefass)
        // console.log(response)
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [])

  return (
    <div className="App">
      <h1>
        Lista de tarefas
      </h1>
      <div className='linha'>
        <h5>
          total: {tarefas.length}
        </h5>
        <h5>
          pendentes: {tarefas.filter((tarefa) => tarefa.done === false).length}
        </h5>
        <h5>
          concluídas: {tarefas.filter((tarefa) => tarefa.done === true).length}
        </h5>
      </div>
      <Formulario setTarefas={setTarefas}></Formulario>
      <div className='linha' >
        <button onClick={() => verPendentes()}>Ver Pendentes</button>
        <button onClick={() => verFinalizadas()}>Ver Concluídas</button>
      </div>
      <Lista tarefas={tarefas} deleteTask={deleteTask} endTask={endTask} onlyComplete={onlyComplete} tarefass={tarefass}></Lista>
    </div>
  );
}

export default App;