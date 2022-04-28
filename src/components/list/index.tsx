import { ITarefa } from "../../types/tarefa";
// import Item from "./item";

interface Props {
    tarefas: ITarefa[],
}

function Lista({ tarefas }: Props) {
    return(
        <aside>
            <ul>
                {tarefas.map((item) => (
                    // <Item
                    //     {...item}
                    // />
                    <h3>{item.tarefa}</h3>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;