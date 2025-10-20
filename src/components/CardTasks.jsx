import { X } from 'lucide-react'

function CardTasks({ tasks, removeTask, toogleTask }) {

    return(
        <div className="h-full overflow-y-auto">
            {tasks.map((task, index) => (
          <div
            key={index}
            className={task.isCompleted ? "border-2 border-zinc-500 line-through text-zinc-400 px-4 py-4 w-xl rounded-lg mb-4 flex items-center relative" : "border-2 border-zinc-500 text-zinc-600 px-4 py-4 w-xl rounded-lg mb-4 flex items-center relative"}>
            <input onChange={() => toogleTask(index)} type="checkbox" className='mr-3 w-[16px] h-[16px]'/>
            {task.title}
            <X onClick={() => removeTask(index)}  className=' absolute right-3 cursor-pointer' color='#71717b'/>
          </div>))}
        </div>
    )
}

export default CardTasks