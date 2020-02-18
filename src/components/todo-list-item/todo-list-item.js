import React, {Component} from 'react';
import Events from '../events';
import EditForm from '../edit-form';
import './todo-list-item.css';

export default class TodoListItem extends Component {

	render() {
		const {todos, onDone, onRemove, onEdit} = this.props;

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
									disabled={item.edit ? true : false}
								></input>
								<span className="custom-checkbox"></span>
							</label>
						</div>
						<div className="item__message">
							{ item.edit ? (
								<EditForm 
									item={item}
									onEdit={onEdit}
								/>
							) : (
								<div className="item__message-text">{item.val}</div>
							)}							
						</div>
						<Events 
							id={item.id}
							edit={item.edit}
							isChecked={itemState.checked}
							onRemove={onRemove}
							onEdit={onEdit}
						/>
					</div>
				</li>
			)
		});

		return (
			itemList
		);
	};
};
