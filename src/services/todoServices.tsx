import { ITarefa } from '../interfaces/tarefa'

export function getAll (setTarefas: (x: ITarefa[]) => void) {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:3333/tasks/',
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

export function endTask(id: number, setTarefas: (x: ITarefa[]) => void) {
    var axios = require('axios');
    axios.put(`http://localhost:3333/tasks/${id}`, {
            'complete': true
        })
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }

export function deleteTask(id: number, setTarefas: (x: ITarefa[]) => void) {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `http://localhost:3333/tasks/${id}`,
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

  export function adicionarTarefa(
      evento : React.FormEvent, 
      description: string, 
      title: string, 
      setTarefas: (x: ITarefa[]) => void, 
      setTitle: React.Dispatch<string>,
      setDescription: React.Dispatch<string>
      ) {
    evento.preventDefault();

    let desc;
    if (description.trim()==='')
    desc='Sem descrição'
    else
    desc= description

    var axios = require('axios');
    axios.post('http://localhost:3333/tasks/', {
        'title': title,
        'description': desc
    })
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
    
    setTitle("")
    setDescription('')
}