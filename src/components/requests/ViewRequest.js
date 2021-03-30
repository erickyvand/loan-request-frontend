import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@material-ui/core';
import useStyles from '../../styles/requestStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestAction } from '../../redux/actions/requestAction';
import ApproveRequest from './ApproveRequest';
import RejectRequest from './RejectRequest';

const ViewRequest = () => {
	const history = useHistory();
	if (!sessionStorage.getItem('token')) {
		history.push('/');
	}
	const { role } = jwt_decode(sessionStorage.getItem('token'));

	if (role === 'client') {
		history.push('/request');
	}

	const classes = useStyles();
	const dispatch = useDispatch();

	const requestsData = useSelector(state => state.getAllRequests);
	const requests = [...requestsData.data];

	useEffect(() => {
		dispatch(getAllRequestAction());
	}, [dispatch]);

	return (
		<div>
			<Typography variant='h4' style={{ textAlign: 'center' }}>
				Clients Loan Request
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
									<CardActions>
										<ApproveRequest request={request} />
										<RejectRequest request={request} />
									</CardActions>
								</Card>
							</Grid>
					  ))}
			</Grid>
		</div>
	);
};

export default ViewRequest;
