import { createContext, useContext } from "react";
import { ITarefa } from "../interfaces/tarefa";

type Props = {
  tarefas: ITarefa[];
  setTarefas: (x: ITarefa[]) => void;
};

export const Tarefa = createContext<Props>({
  tarefas: [{ id: 0, title: "", description: "", complete: false }],
  setTarefas: () => {},
});

export const Tarefas = () => useContext(Tarefa);
