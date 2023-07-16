import { FC } from "react"
import type { Todo as TodoType } from "./TodoWrapper"

type Props = {
  task: TodoType
  toggleComplete: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number) => void
}

export const Todo: FC<Props> = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo
}) => {
  return (
    <div>
      <p
        onClick={() => toggleComplete(task.id)}
        style={task.completed ? { color: "red" } : {}}
      >
        {task.title}
      </p>
      <button onClick={() => editTodo(task.id)}>Edit</button>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  )
}
