import React, { Component } from "react";
import TodoListItem from '../todo-list-item';
import "./todo-list.css";

export default class TodoList extends Component {
	render() {
		const {todos, onDone, onRemove, onEdit, edit} = this.props;
		return (
			<ul className="todo-list">
				<TodoListItem 
					todos={todos}
					edit={edit}
					onDone={onDone}
					onRemove={onRemove}
					onEdit={onEdit}
				/>
			</ul>
		);
	}
};
