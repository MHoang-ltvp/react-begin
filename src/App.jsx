import "./Components/todo/todo.css"
import TodoData from "./Components/todo/TodoData"
import TodoNew from "./Components/todo/TodoNew"
import reactlogo from "./assets/react.svg"
const App = () => {
  const hoidanit = "Eric";
  const age = "25"
  const data = {
    address: "Hanoi",
    country: "Vietnam"
  }
  const addNewTodo = () => {
    alert("Call me")
  }
  // addNewTodo()
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

      />
      <div className="todo-image">
        <img src={reactlogo} className="logo" ></img>
      </div>
    </div>
  )
}

export default App

