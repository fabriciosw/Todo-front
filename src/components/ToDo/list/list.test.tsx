import { render } from "@testing-library/react"
import Lista from "."
import { Tarefa } from "../../../contexts/task"
import { ITarefa } from "../../../interfaces/tarefa"

it('must match snapshot', () => {
    const tarefas: ITarefa[] = [{
        id: 1,
        title: 'first task',
        description: 'big desc',
        complete: false

    },
    {
        id: 2,
        title: 'second task',
        description: 'small =D',
        complete: true
    }]
    const setTarefas = jest.fn();

    const { container } = render(
        <Tarefa.Provider value={{tarefas, setTarefas}}>
            <Lista taskStatus={undefined} />
        </Tarefa.Provider>
    )
    
    expect(container).toMatchSnapshot()
})