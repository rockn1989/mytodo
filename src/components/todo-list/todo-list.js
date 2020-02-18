import React, { Component } from "react";
import TodoListItem from '../todo-list-item';
import "./todo-list.css";

export default class TodoList extends Component {
	render() {
		const {todos, onDone, onRemove, onEdit} = this.props;
		return (
			<ul className="todo-list">
				<TodoListItem 
					todos={todos}
					onDone={onDone}
					onRemove={onRemove}
					onEdit={onEdit}
				/>
			</ul>
		);
	}
};
