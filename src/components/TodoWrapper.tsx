import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"

export type Todo = {
  id: number
  title: string
  completed: boolean
  isEditing: boolean
}

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "hoge",
      completed: false,
      isEditing: false
    },
    {
      id: 2,
      title: "foo",
      completed: false,
      isEditing: false
    }
  ])

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

  const updateTodo = (newTitle: string, id: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
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
  }

  return (
    <div>
      <h1>Your Tasks</h1>
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
    </div>
  )
}
