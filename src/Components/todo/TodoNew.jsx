import { useState } from "react"

const TodoNew = (props) => {
    const [valueInput, setValue] = useState('Eric')
    const { addnewTodo } = props
    const handleClick = (name) => {
        addnewTodo(valueInput)
        setValue('')
    }
    const handleChange = (name) => {
        setValue(name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => {
                    handleChange(event.target.value)
                }}
                value={valueInput}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
            <div>My text is: {valueInput} </div>
        </div>
    )
}

export default TodoNew