import { FC, ChangeEvent, FormEvent, useState } from "react"
import type { Todo as TodoType } from "./TodoWrapper"
import { Input, Button, Flex } from '@chakra-ui/react'

type Props = {
  updateTodo: (title: string, id: number) => void
  task: TodoType
}

export const EditTodoForm: FC<Props> = ({ updateTodo, task }) => {
  const [title, setTitle] = useState(task.title)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
  }

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // submitするとページがリロードするデフォルトの挙動を防ぐ

    updateTodo(title, task.id)
    setTitle("")
  }

  return (
    <form onSubmit={handelSubmit}>
      <Flex>
        <Input
          type="text"
          placeholder="update task"
          value={title}
          onChange={(e) => handleChange(e)}
          mr='2'
          mb='5'
          fontSize='lg'
        />
        <Button type="submit">Update</Button>
      </Flex>
    </form>
  )
}
