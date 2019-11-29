import React from 'react';
import logo from './logo.svg';
import { Grid } from '@material-ui/core';
import { TextField,Paper } from '@material-ui/core';
import youtube from './youtube';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Grid justify="center" container spacing={16}>
			<Grid item xs={12} >
			<Grid container spacing={16}>
			<Grid item xs={12} >
			<Paper eelvation={6} sytle={{padding:'85px'}}>
			<form >
			
 			 <TextField fullWidth label="search..."></TextField>
			 
			  </form>
			  </Paper>
			</Grid>
			<Grid container item xs={8} >


			</Grid>
			<Grid container item xs={6} >
			</Grid>
			</Grid>
			</Grid>
				{/* cscs */}
			</Grid>
		);
	}
}

export default App;
