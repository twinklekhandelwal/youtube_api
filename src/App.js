import React from 'react';
// import logo from './logo.svg';
import { Grid } from '@material-ui/core';
import { Searchbar, Videadetail, Videolist } from './main';
// import {Videadetail} from './main';
import Youtube from './youtube';
// import videadetail from './videadetail';
// import Searchbar from './Searchbar';
// import Videadetail from './videadetail';
import './App.css';

class App extends React.Component {
	state = {
		videos: [],
		selectvideo: null,
	};
	onVideoSelect = video => {
		this.setState({ selectedvideo: video });
	};
	handleSubmit = async searchterm => {
		const response = await Youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 8,
				key: 'AIzaSyBYvdQYWjho3UxMrjsbauPmxT-RG7et650',
				q: searchterm,
				type: 'video',
			},
		});
		console.log(response);
		this.setState({ videos: response.data.items, selectvideo: response.data.items[0] });
	};

	render() {
		return (
			<Grid justify="center" container spacing={12}>
				<Grid item xs={12}>
					<Grid container spacing={12}>
						<Grid item xs={12}>
							<Searchbar onFormSubmit={this.handleSubmit} />
						</Grid>
						<Grid container item xs={8}>
							<Videadetail video={this.state.selectedvideo} />
						</Grid>
						<Grid container item xs={6}>
							<Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			// </Grid>
		);
	}
}

export default App;
