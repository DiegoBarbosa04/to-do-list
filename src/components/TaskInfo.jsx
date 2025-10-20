function infosTasks({ tasks }) {

  const pendingTasks = tasks.filter(task => task.isCompleted === false).length
  const completedTasks = tasks.filter(task => task.isCompleted === true).length
    
    return(
        <div className='flex flex-col items-center pt-24 h-[520px] w-[520px] rounded-2xl'>
            <h1 className='text-4xl font-bold mb-20 text-zinc-600'>Informações das Tarefas</h1>
            <div className="text-2xl flex flex-col gap-4  text-zinc-600">
                <h2>Tarefas Realizadas:<span className='ml-4 font-semibold'>{completedTasks}</span></h2>
                <h2>Tarefas Pendentes:<span className='ml-4 font-semibold'>{pendingTasks}</span></h2>
                <h2 className="font-medium">Tarefas Totais:<span className='ml-4 font-semibold'>{tasks.length}</span></h2>
            </div>
        </div>
    )
}

export default infosTasks