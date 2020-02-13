import React, {Component} from 'react';
import './app-container.css';

import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list";

export default class App extends Component {

	constructor() {
		super();
		this.itemId = 100;
		this.state = {
			todos: [
				{
					val: `test`,
					done: false,
					id: 1
				},
				{
					val: `test2`,
					done: true,
					id: 2
				}
			]
		};

		this.onItemAdded = this.onItemAdded.bind(this);
		this.onDone = this.onDone.bind(this);
	};

	onItemAdded(item) {
		const newItem = {
			val: item,
			done: false,
			id: ++this.itemId
		};

		this.setState(({todos}) => {
			const newArray = [...todos]
			newArray.push(newItem);
			return {
				todos: newArray
			}
		});
	};

	onDone(idx) {
		this.setState(({todos}) => {
			const todoId = todos.findIndex((el) => el.id === idx);
			const oldItem = todos[todoId];
			const newItem = {
				...oldItem,
				done: !oldItem.done
			};

			return {
				todos: [
					...todos.slice(0, todoId), 
					newItem, 
					...todos.slice(todoId + 1)
				]
			}
		});
	}

	render() {
		const todos = this.state.todos;
		return (
			<div className="todo">
				<ItemAddForm onItemAdded={this.onItemAdded}/>
				{todos.length > 0 &&
					<TodoList 
						todos={todos}
						onDone={this.onDone}
					/>
				}
			</div>
		);
	}
};
