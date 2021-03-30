import React, { useEffect, useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { rejectRequestAction } from '../../redux/actions/requestAction';

const RejectRequest = ({ request }) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [requestId, setRequestId] = useState();

	const rejectedRequest = useSelector(state => state.rejectRequest);

	const handleClickOpen = id => {
		setOpen(true);
		setRequestId(id);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleReject = () => {
		dispatch(rejectRequestAction(requestId));
	};

	useEffect(() => {
		if (rejectedRequest.status === 200) {
			window.location.href = '/view-requests';
		}
	}, [rejectedRequest.data, rejectedRequest.status]);
	return (
		<div>
			<Button
				size='small'
				color='primary'
				disabled={request.status === 'rejected'}
				onClick={() => handleClickOpen(request.id)}
			>
				Reject
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Reject request</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to reject this request?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleReject} color='primary' autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default RejectRequest;
