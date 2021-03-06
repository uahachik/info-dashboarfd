import React, { StrictMode, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './components/layout/ErrorBoundary';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
	const [isAuth, setIsAuth] = useState(true);

	return (
		<StrictMode>
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route
							path="/login"
							component={props => <Login setIsAuth={setIsAuth} {...props} />}
						/>
						<PrivateRoute path="/" component={Dashboard} auth={isAuth} />
					</Switch>
				</Router>
			</ErrorBoundary>
		</StrictMode>
	);
}

export default App;
