import React, {Component} from 'react';
import './todo-sort.css';

const sortTitle = [
	`All`,
	`Active`,
	`Completed`
];

export default class TodoSort extends Component {

	constructor() {
		super();
		this.onSort = this.onSort.bind(this);
	}

	onSort(e) {
		e.preventDefault();
		this.props.onSort(e.target.getAttribute(`href`));
	}

	render() {
		const {field} = this.props;
		const sortItem = sortTitle.map((item, idx) => {

			const isActive = field.toLowerCase() === item.toLowerCase();
			const clazz = isActive ? `active` : ``;

			return (
			<li key={item + '-' + idx}>
				<a href={item.toLowerCase()}
					onClick={this.onSort}
					className={clazz}
				>{item}</a>
			</li>)
		});

		return (
			<ul className="todo-sort">{sortItem}</ul>
		);
	}

};

