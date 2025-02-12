const TodoNew = (props) => {
    console.log("Check props:", props)
    const { addnewTodo } = props
    addnewTodo()
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew