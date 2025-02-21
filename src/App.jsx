import "./Components/todo/todo.css"
import TodoData from "./Components/todo/TodoData"
import TodoNew from "./Components/todo/TodoNew"
import reactlogo from "./assets/react.svg"
import { useState } from "react"
const App = () => {
  const hoidanit = "Eric";
  const age = "25"
  const data = {
    address: "Hanoi",
    country: "Vietnam"
  }
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Watching React" },
  ])
  const addNewTodo = (name) => {
    const newTodo = { id: todoList.length + 1, name: name }
    setTodoList([...todoList, newTodo])
  }
  // addNewTodo()
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addnewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactlogo} className="logo" ></img>
      </div>
    </div>
  )
}

export default App

