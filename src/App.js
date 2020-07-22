import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

import './App.css';

function App() {
	return (
		<StrictMode>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Dashboard} />
				</Switch>
			</Router>
		</StrictMode>
	);
}

export default App;
