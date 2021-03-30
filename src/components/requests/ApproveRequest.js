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
import { approveRequestAction } from '../../redux/actions/requestAction';
import { useHistory } from 'react-router';

const ApproveRequest = ({ request }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [open, setOpen] = useState(false);
	const [requestId, setRequestId] = useState();

	const approvedrequest = useSelector(state => state.approveRequest);

	const handleClickOpen = id => {
		setOpen(true);
		setRequestId(id);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleApprove = () => {
		dispatch(approveRequestAction(requestId));
	};

	useEffect(() => {
		if (approvedrequest.status === 200) {
			window.location.href = '/view-requests';
		}
	}, [approvedrequest.data, history, approvedrequest.status]);

	return (
		<div>
			<Button
				size='small'
				color='primary'
				disabled={request.status === 'approved'}
				onClick={() => handleClickOpen(request.id)}
			>
				Approve
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Approve request</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to approve this request?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleApprove} color='primary' autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ApproveRequest;
