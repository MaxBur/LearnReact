import React from 'react';
import classNames from 'classnames';

function TodoItem({ item, index }) {
    return (
        <div
            key={item.id}
            className={classNames('todos__item', classNames, {
                'todos__item--completed': item.completed,
            })}>
            <div className="todos__inner">{item.title}</div>
        </div>
    );
}

export default TodoItem;
