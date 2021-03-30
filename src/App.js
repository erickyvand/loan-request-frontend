import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Register from './components/auth/Register';
import store from './redux/store';
import NotFound from './components/Layout/NotFound';
import Login from './components/auth/Login';
import CreateRequest from './components/requests/CreateRequest';
import NavBar from './components/Layout/NavBar';
import ViewRequest from './components/requests/ViewRequest';
import ViewApproved from './components/requests/ViewApproved';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<NavBar token={sessionStorage.getItem('token')} />
				<Switch>
					<Route exact path='/' component={Register} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/request' component={CreateRequest} />
					<Route exact path='/view-requests' component={ViewRequest} />
					<Route exact path='/approved-requests' component={ViewApproved} />
					<Route component={NotFound} />
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
