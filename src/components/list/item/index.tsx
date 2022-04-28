import { ITarefa } from '../../../types/tarefa';


function Item({ tarefa, id }: ITarefa) {
    return(
        <li>
            <h3> {tarefa} </h3>
        </li>
    )
}

export default Item;