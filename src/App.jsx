import { useState } from 'react'
import Input from './components/Input'
import CardTasks from './components/CardTasks'
import TaskInfo from './components/TaskInfo'

function App() {
  const [tasks, setTasks] = useState([])

  const AddTask = (newTask) => {
    setTasks([...tasks, { title: newTask, isCompleted: false }])
    }
  const removeTask = (indexTask) => {
    const newTasks = tasks.filter((task, i) => i !== indexTask)
    setTasks(newTasks)
}

const toggleTask = (indexTask) => {
  const updatedTasks = tasks.map((task, index) => {
    if (index === indexTask) {
      return { ...task, isCompleted: !task.isCompleted }
    } else {
      return task
    }
  })

  setTasks(updatedTasks)
}

  return (
    <div className='w-screen h-screen flex bg-zinc-200'>
      <div className='container-left flex flex-1 flex-col justify-center items-center w-full h-auto py-[220px] gap-8'>
        <h1 className='text-4xl font-bold mb-8 text-zinc-600'>To Do List</h1>
        <Input AddTask={AddTask}/>
        <CardTasks tasks={tasks} toogleTask={toggleTask} removeTask={removeTask}/>
      </div>
      <div className='container-right flex items-center justify-center flex-1 flex-col gap-8 w-full h-auto pb-25'>
        <TaskInfo tasks={tasks}/>
      </div>
    </div>
  )
}

export default App
