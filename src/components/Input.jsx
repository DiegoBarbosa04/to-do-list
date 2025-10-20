import { Plus } from 'lucide-react'
import { useState } from 'react'

function Input({ AddTask }) {
    const [inputValue, setInputValue] = useState('')

    const getInput = (e) => {
        setInputValue(e.target.value)
    }

    const onAddTask = () => {
        if (inputValue !== '') {
            AddTask(inputValue)
            setInputValue('')
        }
    }

    return(
        <div className='flex gap-4'>
            <input value={inputValue} onChange={getInput} type="text" placeholder="Digite sua tarefa" className="inputText w-lg border-b-2 border-zinc-600 text-zinc-500 px-2 outline-0 text-lg"/>
            <div className='bg-zinc-600 w-[36px] h-[36px] rounded-lg flex justify-center items-center cursor-pointer' onClick={onAddTask}>
                <Plus color="#e4e4e7"/>
            </div>
        </div>
    )
}

export default Input