import React, {Component} from 'react';
import './edit-form.css';

export default class EditForm extends Component {
	constructor(props) {
		super();
		this.onEdit = props.onEdit;
		this.state = {
			val: props.item.val
		};
		this.onChangeInput = this.onChangeInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeInput(e) {
		this.setState({
			val: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();
		this.onEdit(this.props.item.id, this.state.val)
	}

	render() {
		
		return (
			<form 
				className="edit-form"
				onSubmit={this.onSubmit}
			>
				<input 
					type="text" 
					value={this.state.val}
					onChange={(e) => {
						this.onChangeInput(e);
					}}
				/>
			</form>
		)
	}
};
