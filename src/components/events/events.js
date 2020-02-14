import React from 'react';
import './events.css';

const Events = (props) => {
	const {onRemove, onEdit, id} = props;
	return (
		<div className="events">
			<i 
				className="event-item-edit fa fa-edit"
				onClick={() => {
					onEdit(id)
				}}
			></i>
			<i 
				className="event-item-remove fa fa-close"
				onClick={() => {
					onRemove(id)
				}}
			></i>
		</div>
	)
};

export default Events;
