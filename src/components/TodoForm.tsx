import { FC, ChangeEvent, FormEvent, useState } from "react"

type Props = {
  addTodo: (todo: string) => void
}

export const TodoForm: FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
  }

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // submitするとページがリロードするデフォルトの挙動を防ぐ

    addTodo(title)
    setTitle("")
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="task here"
        value={title}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
