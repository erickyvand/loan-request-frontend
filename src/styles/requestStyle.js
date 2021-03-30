import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: '#277012',
	},
	rootContainer: {
		marginTop: 50,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	paper: {
		margin: theme.spacing(4, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	submit: {
		marginTop: '20px',
		backgroundColor: '#277012',
		color: 'white',
		textTransform: 'none',
		fontSize: '1em',
		'&:hover': {
			backgroundColor: fade('#277012', 0.8),
		},
	},
	linkMenu: {
		color: 'white',
		marginLeft: 20,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	rootCard: {
		width: '90%',
		margin: 10,
	},
	media: {
		height: 340,
	},
}));

export default useStyles;
