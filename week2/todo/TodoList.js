function TodoList(props) {
    return (
        <>
        <h1>List of Todos</h1>
        <ul>
        {
            props.todos.map((todo, index) => {
            return (
                <li key={index}>{todo.text}</li>
            )
            }
            )
        }
            
        </ul>
        </>

    );
}

export default TodoList;