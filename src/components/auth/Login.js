import React, { useEffect } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import useStyles from '../../styles/userStyle';
import { loginSchema } from '../../validations/user.validation';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/userAction';

const handleDisable = (props, login) => {
	return !props.values.email || !props.values.password || login.loading
		? true
		: false;
};

const Login = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const login = useSelector(state => state.login);

	const handleLogin = values => {
		dispatch(loginAction(values));
	};

	useEffect(() => {
		if (login.status === 200) {
			window.location.href = '/request';
			sessionStorage.setItem('token', login.data.token);
		}
	});

	return (
		<div className={classes.root}>
			<Grid container direction='row' justify='center'>
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
						<Typography color='error'>{login.error}</Typography>
						<Typography variant='h6'>Login</Typography>
						<Formik
							validationSchema={loginSchema}
							initialValues={{ email: '', password: '' }}
							onSubmit={values => handleLogin(values)}
						>
							{props => (
								<Form onSubmit={props.handleSubmit} className={classes.form}>
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
									<Button
										type='submit'
										variant='contained'
										fullWidth
										disabled={handleDisable(props, login)}
										className={classes.submit}
									>
										{login.loading ? 'Loading...' : 'Login'}
									</Button>
								</Form>
							)}
						</Formik>

						<p>
							Don't you have an account? <Link to='/'>Register</Link>
						</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Login;
