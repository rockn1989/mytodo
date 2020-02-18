import React from 'react';
import './events.css';

const Events = (props) => {
	const {onRemove, onEdit, isChecked, id} = props;

	return (
		<div className="events">
			<i 
				className="event-item-edit fa fa-edit"
				onClick={() => {
					return isChecked ? false : onEdit(id);
				}}
			></i>
			<i 
				className="event-item-remove fa fa-close"
				onClick={() => {
					return isChecked ? false : onRemove(id);
				}}
			></i>
		</div>
	)
};

export default Events;
