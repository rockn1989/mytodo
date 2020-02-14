import React, {Component} from 'react';
import './app-container.css';

import ItemAddForm from '../item-add-form';
import TodoList from '../todo-list';


const replaceChildren = (container, oldChild, newChild) => {
	container.replaceChild(newChild, oldChild);
};

export default class App extends Component {

	constructor() {
		super();
		this.itemId = 100;
		this.state = {
			todos: [
				{
					val: `test`,
					done: false,
					id: 0
				},
				{
					val: `test2`,
					done: true,
					id: 1
				}
			],
			edit: false
		};

		this.onItemAdded = this.onItemAdded.bind(this);
		this.onDone = this.onDone.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.onEdit = this.onEdit.bind(this);
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

	onRemove(idx) {
		console.log(idx)
		this.setState(({ todos }) => {
			const todoId = todos.findIndex((el) => el.id === idx);

			return {
				todos: [
					...todos.slice(0, todoId),
					...todos.slice(todoId + 1)
				]
			}
		});
	}

	onEdit() {
		this.setState({
			edit: !this.state.edit
		})
/* 		this.setState(({ todos }) => {
			const todoId = todos.findIndex((el) => el.id === idx);
			const oldItem = todos[todoId]
			const oldHTMLItem = document.getElementById(idx);
			const wrapper = oldHTMLItem.querySelector(`.item__message`);
			const textNode = oldHTMLItem.querySelector(`.item__message-text`);
			const input = document.createElement(`input`);
			replaceChildren(wrapper, textNode, <EditForm/>);
			input.setAttribute(`value`, oldItem.val)
			input.focus();
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
		});	 */
	}

	render() {
		const {todos, edit} = this.state;
		return (
			<div className="todo">
				<ItemAddForm onItemAdded={this.onItemAdded}/>
				{todos.length > 0 &&
					<TodoList 
						todos={todos}
						edit={edit}
						onDone={this.onDone}
						onRemove={this.onRemove}
						onEdit={this.onEdit}
					/>
				}
			</div>
		);
	}
};
