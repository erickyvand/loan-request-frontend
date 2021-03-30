import React from 'react';
import {
	AppBar,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from '../../styles/requestStyle';

const NavBar = ({ token }) => {
	const classes = useStyles();

	if (!token) {
		return null;
	}
	const { firstName, lastName, role } = jwt_decode(
		sessionStorage.getItem('token')
	);

	const handleLogout = () => {
		sessionStorage.removeItem('token');
		window.location.href = '/';
	};
	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						{role === 'manager' ? (
							<>
								<Link to='/request' className={classes.linkMenu}>
									Loan Request
								</Link>
								<Link to='/view-requests' className={classes.linkMenu}>
									View Requests
								</Link>
								<Link to='/approved-requests' className={classes.linkMenu}>
									Approved Requests
								</Link>
							</>
						) : role === 'officer' ? (
							<>
								<Link to='/request' className={classes.linkMenu}>
									Loan Request
								</Link>
								<Link to='/view-requests' className={classes.linkMenu}>
									View Requests
								</Link>
							</>
						) : (
							<Link to='/request' className={classes.linkMenu}>
								Loan Request
							</Link>
						)}
					</Typography>
					<Typography color='inherit' variant='h6'>
						{firstName} {lastName}
					</Typography>
					<Tooltip title='Logout'>
						<IconButton color='inherit' onClick={handleLogout}>
							<ExitToAppIcon />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
