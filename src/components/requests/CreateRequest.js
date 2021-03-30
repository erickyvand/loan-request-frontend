import { Button, Typography, Grid, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from '../../styles/requestStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
	getRequestAction,
	requestAction,
} from '../../redux/actions/requestAction';

const CreateRequest = () => {
	const history = useHistory();
	if (!sessionStorage.getItem('token')) {
		history.push('/');
	}

	const classes = useStyles();
	const dispatch = useDispatch();

	const [requestId, setRequestId] = useState('');
	const [idLength, setIdLength] = useState();
	const [file, setFile] = useState();

	const request = useSelector(state => state.getRequest);
	const createRequest = useSelector(state => state.request);

	const handleChange = e => {
		setRequestId(e.target.value);
	};

	const handleGetRequest = () => {
		setIdLength(requestId.length);
		setRequestId('');
		dispatch(getRequestAction(requestId));
	};

	const handleFile = e => {
		setFile(e.target.files[0]);
	};

	const handleSubmitRequest = data => {
		const formData = new FormData();

		formData.append('inputNumber', data);
		formData.append('file', file);

		dispatch(requestAction(formData));

		setFile();
	};

	return (
		<div className={classes.rootContainer}>
			<Grid container direction='row' justify='space-around'>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					lg={4}
					component={Paper}
					elevation={6}
				>
					<div className={classes.paper}>
						<Typography color='error'>{request.error}</Typography>
						<Typography variant='h6'>Enter your TIN or ID number</Typography>
						<TextField
							fullWidth
							id='id-tin-number'
							label='TIN or ID number'
							value={requestId}
							onChange={handleChange}
						/>
						<Button
							type='submit'
							variant='contained'
							fullWidth
							className={classes.submit}
							disabled={!requestId || request.loading}
							onClick={handleGetRequest}
						>
							{request.loading ? 'Loading...' : 'Check'}
						</Button>
					</div>
				</Grid>
				{request.status === 200 && idLength === 9 ? (
					<Grid
						item
						xs={12}
						sm={12}
						md={4}
						lg={4}
						component={Paper}
						elevation={6}
					>
						<div className={classes.paper}>
							<Typography color='error'>{createRequest.error}</Typography>
							<Typography style={{ color: '#277012' }}>
								{createRequest.message}
							</Typography>
							<Typography variant='h6'>Profile information</Typography>
							<TextField
								fullWidth
								id='id-tin-number'
								label='Company Name'
								value={request.data.companyName}
								disabled
								onChange={handleChange}
							/>
							<input
								style={{ marginTop: 10 }}
								id='contained-button-file'
								multiple
								type='file'
								name='file'
								onChange={handleFile}
							/>
							<Button
								type='submit'
								variant='contained'
								fullWidth
								className={classes.submit}
								onClick={() => handleSubmitRequest(request.data.tinNumber)}
							>
								Submit
							</Button>
						</div>
					</Grid>
				) : request.status === 200 && idLength === 16 ? (
					<Grid
						item
						xs={12}
						sm={12}
						md={4}
						lg={4}
						component={Paper}
						elevation={6}
					>
						<div className={classes.paper}>
							<Typography color='error'>{createRequest.error}</Typography>
							<Typography style={{ color: '#277012' }}>
								{createRequest.message}
							</Typography>
							<Typography variant='h6'>Profile information</Typography>
							<TextField
								fullWidth
								id='id-tin-number'
								label='First Name'
								value={request.data.firstName}
								disabled
								onChange={handleChange}
							/>
							<TextField
								fullWidth
								id='id-tin-number'
								label='Last Name'
								value={request.data.lastName}
								disabled
								onChange={handleChange}
							/>
							<input
								style={{ marginTop: 10 }}
								id='contained-button-file'
								multiple
								type='file'
								onChange={handleFile}
							/>
							<Button
								type='submit'
								variant='contained'
								fullWidth
								className={classes.submit}
								onClick={() => handleSubmitRequest(request.data.tinNumber)}
							>
								Submit
							</Button>
						</div>
					</Grid>
				) : (
					''
				)}
			</Grid>
		</div>
	);
};

export default CreateRequest;
