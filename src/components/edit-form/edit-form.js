import React, {Component} from 'react';
import './edit-form.css';

export default class EditForm extends Component {
	constructor() {
		super();
		this.state = {
			val: ``
		};
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(e) {
		this.setState({
			val: e.target.value
		})
	}

	render() {
		return (
			<form className="edit-form">
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
