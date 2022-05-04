import { ITarefa } from '../types/tarefa'

export function getAll (setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://trainees-2022-todo-api-week-3.herokuapp.com/todos/',
      headers: {}
    };

    axios(config)
      .then(function (response: {data: Array<ITarefa>}) {
        return setTarefas(response.data);
      })
      .catch(function (error: string) {
        return console.log(error);
      });
}

export function endTask(id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) {
    var axios = require('axios');
    axios.put(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`, {
            'complete': true
        })
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }

export function deleteTask(id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`,
      headers: { }
    };
    
    axios(config)
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }