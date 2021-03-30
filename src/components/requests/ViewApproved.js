import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import jwt_decode from 'jwt-decode';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getApprovedRequestAction } from '../../redux/actions/requestAction';
import useStyles from '../../styles/requestStyle';

const ViewApproved = () => {
	const history = useHistory();
	if (!sessionStorage.getItem('token')) {
		history.push('/');
	}
	const { role } = jwt_decode(sessionStorage.getItem('token'));

	if (role === 'client') {
		history.push('/request');
	}

	const dispatch = useDispatch();
	const classes = useStyles();

	const approved = useSelector(state => state.getApproved);
	const requests = [...approved.data];

	useEffect(() => {
		dispatch(getApprovedRequestAction());
	}, [dispatch]);

	return (
		<div>
			<Typography variant='h4' style={{ textAlign: 'center' }}>
				Clients Approved Request
			</Typography>
			<Grid container direction='row'>
				{requests.length === 0
					? 'No data to display'
					: requests.loading
					? 'Loading...'
					: requests.map(request => (
							<Grid
								key={request.id}
								item
								xs={12}
								sm={12}
								md={4}
								lg={4}
								elevation={6}
							>
								<Card className={classes.rootCard}>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={`${process.env.REACT_APP_API_URL}/${request.picture}`}
											title={`${request.firstName} ${request.lastName}`}
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h2'>
												{request.firstName} {request.lastName}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												ID Number: {request.idNumber}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												TIN Number: {request.tinNumber}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												Company Name: {request.companyName}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												Email: {request.email}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												Phone Number: {request.phoneNumber}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												Address: {request.address}
											</Typography>
											<Typography
												variant='body2'
												component='p'
												color='textSecondary'
											>
												Status:{' '}
												<span
													className={
														request.status === 'pending'
															? 'pending-color'
															: request.status === 'approved'
															? 'approved-color'
															: 'rejected-color'
													}
												>
													{request.status}
												</span>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
					  ))}
			</Grid>
		</div>
	);
};

export default ViewApproved;
