import React from 'react';
import './todo-counter.css'

const TodoCounter = (props) => {
	return (
		<span className="todo-counter">Всего задач: {props.todos}</span>
	)
};

export default TodoCounter;
