import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
	constructor() {
		super();
		this.onChecked = this.onChecked.bind(this);

	};

	onChecked() {

	}

	render() {
		const {todos, onDone} = this.props;

		

		const itemList = todos.map((item, idx) => {
			const itemKey = item.val + '-' + idx;
			
			const itemState = item.done ? {
				done: ` isDone`,
				checked: true
			} : {
				done: ``,
				checked: false
			};

			return (
				<li id={item.id} key={itemKey}>
					<div className={`item` + itemState.done}>
						<div className="item__checkbox">
							<label htmlFor={itemKey}>
								<input 
									id={itemKey} 
									type="checkbox"
									checked={itemState.checked}
									onChange={()=>{ 
										onDone(item.id)
									}}
								></input>
								<span className="custom-checkbox"></span>
							</label>
						</div>
						<div className="item__message">
							{item.val}
						</div>
						<div className="item__events">
							<i className="edit-item fa fa-edit"></i>
							<i className="remove-item fa fa-close"></i>
						</div>
					</div>
				</li>
			)
		});

		return (
			itemList
		);
	};
};
