import { FC } from "react"
import type { Todo as TodoType } from "./TodoWrapper"
import { Box, Button, ButtonGroup, Text, Flex, Spacer } from '@chakra-ui/react'

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
    <Box mb='2'>
      <Flex alignItems='center'>
        <Text
          onClick={() => toggleComplete(task.id)}
          fontSize='xl'
          pl='1'
        >
          {task.title}
        </Text>
        <Spacer />
        <ButtonGroup>
          <Button onClick={() => editTodo(task.id)}>Edit</Button>
          <Button colorScheme='red' onClick={() => deleteTodo(task.id)}>Delete</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
