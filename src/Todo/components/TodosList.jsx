import React from 'react';
import axios from 'axios';

import TodoItem from './TodoItem';

function TodosList() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            setTodos(res.data);
        });
    }, []);

    return (
        <div className="todos__list">
            {todos.map((item, index) => (
                <TodoItem item={item} index={index} />
            ))}
        </div>
    );
}

export default TodosList;
