import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Register from './components/auth/Register';
import store from './redux/store';
import NotFound from './components/Layout/NotFound';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Switch>
					<Route exact path='/' component={Register} />
					<Route component={NotFound} />
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
