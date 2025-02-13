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
    const { name, data, age } = props;
    console.log("Check props:", props)
    return (
        <div className="todo-data">
            <div>My name is {age}</div>
            <div>Learning React</div>
            <div>Watching React</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData