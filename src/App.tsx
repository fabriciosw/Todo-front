import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';

function App() {
  // const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [onlyComplete, setOnlyComplete] = useState(false);
  const [tarefas, setTarefass] = useState<ITarefa[]>([]);

  useEffect(() => {getAll()}, []);

  function deleteTask(id: string) {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response: { data: any; }) {
      console.log(JSON.stringify(response.data));
      getAll()
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }

  function endTask(id: string) {
    var axios = require('axios');
    axios.put(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`, {
            'complete': true
        })
    .then(function (response: { data: any; }) {
      console.log(JSON.stringify(response.data));
      console.log('foi')
      getAll()
    })
    .catch(function (error: any) {
      console.log(error);
      console.log('n foi')
    });
    // return setTarefas(tarefas.map((tarefa) => {
    //   if (tarefa.id === id) {
    //     tarefa.done = true
    //   }
    //   return tarefa
    // }))
  }

  function verFinalizadas() {
    setOnlyComplete(true);
  }
  function verPendentes() {
    setOnlyComplete(false);
  }

  function getAll() {
    
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://trainees-2022-todo-api-week-3.herokuapp.com/todos/',
      headers: {}
    };

    axios(config)
      .then(function (response: any) {
        setTarefass(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  
}

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
          pendentes: {tarefas.filter((tarefa) => tarefa.complete === false).length}
        </h5>
        <h5>
          concluídas: {tarefas.filter((tarefa) => tarefa.complete === true).length}
        </h5>
      </div>
      <Formulario getAll={getAll}></Formulario>
      <div className='linha'>
        <button onClick={() => verPendentes()}>Ver Pendentes</button>
        <button onClick={() => verFinalizadas()}>Ver Concluídas</button>
      </div>
      <Lista deleteTask={deleteTask} endTask={endTask} onlyComplete={onlyComplete} tarefass={tarefas}></Lista>
    </div>
  );
}

export default App;