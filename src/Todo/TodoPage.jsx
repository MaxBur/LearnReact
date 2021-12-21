import React from 'react';

import './scss/todos.scss';

import TodoList from './components/TodosList';

function TodoPage() {
    return (
        <div className="b-todos">
            <div className="todos__title">
                <h1>Todos</h1>
            </div>
            <div className="todos__wrapper">
                <TodoList />
            </div>
        </div>
    );
}

export default TodoPage;
