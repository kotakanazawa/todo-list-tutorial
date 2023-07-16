import { useState } from 'react'
import './App.css'
import { TodoWrapper } from './components/TodoWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoWrapper />
    </>
  )
}

export default App
