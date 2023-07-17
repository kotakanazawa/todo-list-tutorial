import { FC, ChangeEvent, FormEvent, useState } from "react"
import { Input, Button, Flex } from '@chakra-ui/react'

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
      <Flex>
        <Input
          type="text"
          placeholder="task here"
          value={title}
          onChange={(e) => handleChange(e)}
          mr='2'
          mb='5'
        />
        <Button colorScheme='green' type="submit">Add Task</Button>
      </Flex>
    </form>
  )
}
