import React, { useEffect } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import useStyles from '../../styles/userStyle';
import { signupSchema } from '../../validations/user.validation';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../redux/actions/userAction';

const handleDisable = (props, register) => {
	return !props.values.firstName ||
		!props.values.lastName ||
		!props.values.email ||
		!props.values.password ||
		!props.values.confirmPassword ||
		props.values.password !== props.values.confirmPassword ||
		register.loading
		? true
		: false;
};

const Register = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const register = useSelector(state => state.register);

	const handleSubmit = values => {
		dispatch(registerAction(values));
	};

	useEffect(() => {
		if (register.status === 201) {
			history.push('/login');
		}
	}, [history, register.status]);

	return (
		<div className={classes.root}>
			<Grid container direction='row' justify='center' alignContent='center'>
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
						<Typography variant='h6'>Create an account</Typography>
						<Formik
							validationSchema={signupSchema}
							initialValues={{
								firstName: '',
								lastName: '',
								email: '',
								password: '',
								confirmPassword: '',
							}}
							onSubmit={values => handleSubmit(values)}
						>
							{props => (
								<Form onSubmit={props.handleSubmit} className={classes.form}>
									<TextField
										variant='standard'
										margin='normal'
										fullWidth
										size='small'
										id='firstName'
										label='First Name'
										name='firstName'
										type='text'
										onChange={props.handleChange('firstName')}
										value={props.values.firstName}
										autoComplete='firstName'
										error={
											props.values.firstName !== '' &&
											Object.prototype.hasOwnProperty.call(
												props.errors,
												'firstName'
											)
										}
										helperText={
											props.values.firstName !== '' && props.errors.firstName
										}
									/>
									<TextField
										variant='standard'
										margin='normal'
										fullWidth
										size='small'
										id='lastName'
										label='Last Name'
										name='lastName'
										type='text'
										onChange={props.handleChange('lastName')}
										value={props.values.lastName}
										autoComplete='lastName'
										error={
											props.values.lastName !== '' &&
											Object.prototype.hasOwnProperty.call(
												props.errors,
												'lastName'
											)
										}
										helperText={
											props.values.lastName !== '' && props.errors.lastName
										}
									/>
									<TextField
										variant='standard'
										margin='normal'
										fullWidth
										size='small'
										id='email'
										label='Email'
										name='email'
										type='text'
										onChange={props.handleChange('email')}
										value={props.values.email}
										autoComplete='email'
										error={
											props.values.email !== '' &&
											Object.prototype.hasOwnProperty.call(
												props.errors,
												'email'
											)
										}
										helperText={props.values.email !== '' && props.errors.email}
									/>
									<Typography color='error'>{register.error}</Typography>
									<TextField
										variant='standard'
										margin='normal'
										fullWidth
										size='small'
										id='password'
										label='Password'
										name='password'
										type='password'
										onChange={props.handleChange('password')}
										value={props.values.password}
										autoComplete='password'
										error={
											props.values.password !== '' &&
											Object.prototype.hasOwnProperty.call(
												props.errors,
												'password'
											)
										}
										helperText={
											props.values.password !== '' && props.errors.password
										}
									/>
									<TextField
										variant='standard'
										margin='normal'
										fullWidth
										size='small'
										id='confirmPassword'
										label='Confirm Password'
										name='confirmPassword'
										type='password'
										onChange={props.handleChange('confirmPassword')}
										value={props.values.confirmPassword}
										autoComplete='confirmPassword'
										error={
											props.values.confirmPassword !== '' &&
											Object.prototype.hasOwnProperty.call(
												props.errors,
												'confirmPassword'
											)
										}
										helperText={
											props.values.confirmPassword !== '' &&
											props.errors.confirmPassword
										}
									/>
									<Button
										type='submit'
										variant='contained'
										fullWidth
										disabled={handleDisable(props, register)}
										className={classes.submit}
									>
										{register.loading ? 'Loading...' : 'Register'}
									</Button>
								</Form>
							)}
						</Formik>
						<p>
							Already have an account? <Link to='/login'>Login</Link>
						</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Register;
