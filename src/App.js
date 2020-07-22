import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
	return (
		<StrictMode>
			{/* <div className="container"> */}
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Dashboard} />
				</Switch>
			</Router>
			{/* </div> */}
		</StrictMode>
	);
}

export default App;
