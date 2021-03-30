import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Register from './components/auth/Register';
import store from './redux/store';
import NotFound from './components/Layout/NotFound';
import Login from './components/auth/Login';
import CreateRequest from './components/requests/CreateRequest';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Switch>
					<Route exact path='/' component={Register} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/request' component={CreateRequest} />
					<Route component={NotFound} />
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
