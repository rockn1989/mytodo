import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

	constructor({onItemAdded}) {
		super();
		this.state = {
			val: ``,
			allField: true
		};
		this.onItemAdded = onItemAdded;
		this.onCheckAll = this.onCheckAll.bind(this);
		this.onSubmit = this.onSubmit.bind(this); 
		this.onChangeValue = this.onChangeValue.bind(this);
	}

	onCheckAll() {
		this.setState({allField: !this.state.allField});
		this.props.onCheckAll(this.state.allField);
	};

	onChangeValue(e) {
		this.setState({
			val: e.target.value
		});
	};

	onSubmit(e) {
		e.preventDefault();
		this.onItemAdded(this.state.val);
		
		this.setState({
			val: ``
		});
	};

	render() {
		return (	
			<form className="todo-header"
				onSubmit={this.onSubmit}
			>
				<i 
					className="icon-toggle"
					onClick={this.onCheckAll}
				></i>
				<input
					className="create-input"
					type="text"
					placeholder="What needs to be done?"
					onChange={this.onChangeValue}
					value={this.state.val}
				></input>
			</form>
		);
	};
};
