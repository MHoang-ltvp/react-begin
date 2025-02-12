const TodoNew = (props) => {
    console.log("Check props:", props)
    const { addnewTodo } = props
    const handleClick = () => {
        alert("Save")
    }
    const handleChange = (name) => {
        console.log("Change", name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => { handleChange(event.target.value) }}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew