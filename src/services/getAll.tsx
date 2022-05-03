import { ITarefa } from "../types/tarefa";

export default function getAll (setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) {
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