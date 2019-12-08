import React from 'react';
import { TextField, Paper } from '@material-ui/core';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchterm: '',
		};
	}
	
	handlechange = event => {
		this.setState({ searchterm: event.target.value });
	};

	handleSubmit = event => {
		this.props.onFormSubmit(this.state.searchterm);
		event.preventDefault();
	};

	render() {
		return (
			<Paper elevation={6} style={{ padding: '15px', margin: '15px' }}>
				<form onSubmit={this.handleSubmit}>
					<TextField fullWidth label="search..." onChange={this.handlechange}></TextField>
				</form>
			</Paper>
		);
	}
}
export default Searchbar;
