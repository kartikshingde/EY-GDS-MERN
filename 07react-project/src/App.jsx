import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentListTodo from './StudentListTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      


      <StudentListTodo />
    </>
  )
}

export default App
