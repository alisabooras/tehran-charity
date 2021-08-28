import List from './List'

const Lists = ({tasks, deleteBtn}) => {
    return (
        <>
            {tasks.map((task) => (
                <List key={task.id} task={task} dbtn={deleteBtn} />
            ))}
        </>
    )
}

export default Lists
