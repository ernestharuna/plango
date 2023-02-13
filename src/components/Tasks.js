import Task from "./Task"

const Tasks = ({ x, deleteTask, onToggle }) => {
    return (
        <>
            {x.map((task) => (
                <Task key={task.id} task={task} deleteTask={deleteTask} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks