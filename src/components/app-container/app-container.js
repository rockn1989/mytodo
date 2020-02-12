import React, {Component} from 'react';
import './app-container.css';

import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list";

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			todos: []
		};

		this.onItemAdded = this.onItemAdded.bind(this);
	};

	onItemAdded(item) {
		const newItem = {
			label: item,
			done: false
		};

		this.setState(({todos}) => {
			const newArray = [...todos]
			newArray.push(newItem);
			return {
				todos: newArray
			}
		});
	};

	render() {
		const todos = this.state.todos;
		console.log(todos);
		return (
			<div className="todo">
				<ItemAddForm onItemAdded={this.onItemAdded}/>
				<TodoList/>
			</div>
		);
	}
};
