import { useState, useEffect } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"
import { Container, Heading, useToast } from '@chakra-ui/react'

export type Todo = {
  id: number
  title: string
  completed: boolean
  isEditing: boolean
}

export const TodoWrapper = () => {
  const storedTodos: string | null = localStorage.getItem('todos')
  const initialTodos = storedTodos ? JSON.parse(storedTodos) as Todo[] : []
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toast = useToast()

  const addTodo = (todoTitle: string) => {
    if (!todoTitle) return

    const newTodo: Todo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
      isEditing: false
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const toggleComplete = (taskId: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((prevTodo) => {
        if (prevTodo.id === taskId) {
          return { ...prevTodo, completed: !prevTodo.completed }
        }

        return prevTodo
      })

      return newTodos
    })
  }

  const deleteTodo = (taskId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== taskId))

    toast({
      title: 'Task deleted',
      status: 'success',
      duration: 1500,
    })
  }

  const editTodo = (taskId: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((prevTodo) => {
        if (prevTodo.id === taskId) {
          return { ...prevTodo, isEditing: !prevTodo.isEditing }
        }

        return prevTodo
      })

      return newTodos
    })
  }

  const updateTodo = (newTitle: string, taskId: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((prevTodo) => {
        if (prevTodo.id === taskId) {
          return {
            ...prevTodo,
            title: newTitle,
            isEditing: !prevTodo.isEditing
          }
        }

        return prevTodo
      })

      return newTodos
    })

    toast({
      title: 'Task updated',
      status: 'success',
      duration: 1500
    })
  }

  return (
    <Container mt='5'>
      <Heading mb='3'>Your Tasks</Heading>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm updateTodo={updateTodo} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </Container>
  )
}
