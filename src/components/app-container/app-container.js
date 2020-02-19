import React, { Component } from "react";
import "./app-container.css";

import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list";
import TodoSort from "../todo-sort";
import TodoCounter from "../todo-counter";

export default class App extends Component {
	constructor() {
		super();
		this.itemId = 100;
		this.state = {
			todos: [],
			field: `all`
		};

		this.onItemAdded = this.onItemAdded.bind(this);
		this.onCheckAll = this.onCheckAll.bind(this);
		this.onDone = this.onDone.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onSortChange = this.onSortChange.bind(this);
		this.onSort = this.onSort.bind(this);
	}

	componentDidMount() {

		const data = localStorage.getItem(`data`);

		if (data) {
			this.setState(({ todos }) => {
				const newArray = JSON.parse(data)
				return {
					todos: newArray
				};
			})
		};

	}

	onSetLocalStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	onItemAdded(item) {
		const newItem = {
			val: item,
			done: Boolean(Math.round(Math.random() * 1)),
			id: ++this.itemId,
			edit: false
		};
		
		this.setState(({todos}) => {
			const newArray = todos.length > 0 ? [...todos] : [];
			newArray.push(newItem);

			this.onSetLocalStorage(`data`, newArray);

			return {
				todos: newArray
			};
		});
	}

	onCheckAll(val) {
		this.setState(({ todos }) => {
			const newArray = todos.map(item => {
				item.done = val;
				return item;
			});

			return {
				todos: newArray
			};
		});
	}

	onDone(idx) {
		this.setState(({todos}) => {
			const todoId = todos.findIndex(el => el.id === idx);
			const oldItem = todos[todoId];

			const newItem = {
				...oldItem,
				done: !oldItem.done
			};

			const newArray = [...todos.slice(0, todoId), newItem, ...todos.slice(todoId + 1)]

			this.onSetLocalStorage(`data`, newArray);

			return {
				todos: newArray
			};
		});
	}

	onRemove(idx) {
		this.setState(({todos}) => {
			const todoId = todos.findIndex(el => el.id === idx);
			const newArray = [...todos.slice(0, todoId), ...todos.slice(todoId + 1)];

			this.onSetLocalStorage(`data`, newArray);

			return {
				todos: newArray
			};
		});
	}

	onEdit(idx,...val) {
		
		this.setState(({ todos }) => {
			const itemVal = val;
			const todoId = todos.findIndex((el) => el.id === idx);
			const oldItem = todos[todoId]

 			const newItem = {
				...oldItem,
				edit: !oldItem.edit,
				val: itemVal.length > 0 ? itemVal[0] : oldItem.val
			};

			const newArray = [...todos.slice(0, todoId), newItem, ...todos.slice(todoId + 1)];

			this.onSetLocalStorage(`data`, newArray);

			return {
				todos: newArray
			} 
		});	
	}

	onSortChange(field) {
		this.setState({ field: field });
	}

	onSort(array, field) {
		switch (field) {
			case `active`:
				return array.filter(({done}) => !done);
			case `completed`:
				return array.filter(({done}) => done);
			default:
				return array;
		}
	}

	render() {
		const {field} = this.state;
		const todos = this.onSort(this.state.todos, field);

		return (
			<div className="todo">
				<ItemAddForm
					onItemAdded={this.onItemAdded}
					onCheckAll={this.onCheckAll}
				/>
				{todos.length > 0 && (
					<div className="todo-wrapper">
						<TodoList
							todos={todos}
							onDone={this.onDone}
							onRemove={this.onRemove}
							onEdit={this.onEdit}
						/>
					</div>
				)}
				<div className="todo-bottom-toolbar">
					<TodoCounter todos={todos.length} />
					<TodoSort field={field} onSort={this.onSortChange} />
				</div>
			</div>
		);
	}
}
