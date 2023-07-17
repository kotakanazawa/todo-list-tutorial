import { FC } from "react"
import type { Todo as TodoType } from "./TodoWrapper"
import { Box, Button, ButtonGroup, Text, Flex, Spacer, Checkbox } from '@chakra-ui/react'

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
        <Checkbox isChecked={task.completed} onChange={() => toggleComplete(task.id)}>
          <Text
            fontSize='xl'
            textDecoration={task.completed ? 'line-through' : 'none'}
          >
            {task.title}
          </Text>
        </Checkbox>
        <Spacer />
        <ButtonGroup>
          <Button onClick={() => editTodo(task.id)}>Edit</Button>
          <Button colorScheme='red' onClick={() => deleteTodo(task.id)}>Delete</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
