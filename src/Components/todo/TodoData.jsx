const TodoData = (props) => {
    //props is an object{}
    //{
    //     name: 'Eric',
    //     age: 25,
    //     data: {
    //         address: 'Hanoi',
    //         country: 'Vietnam'
    //     }
    // }
    const { todoList } = props;
    console.log("Check props:", props)
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                console.log("Check item:", item)
                return (
                    <div>
                        <div className="todo-item">
                            <div>{item.name}</div>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}
            {/* <div>
                {JSON.stringify(props.todoList)}
            </div> */}
        </div>
    )
}

export default TodoData