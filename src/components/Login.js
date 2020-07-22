import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import BadCredentials from './layout/BadCredentials';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [badCredentials, setBadCredentials] = useState(false);
	const nameRef = useRef(), passRef = useRef(null);

	const credentials = async () => {
		return {
			username: 'demo',
			password: 'demo'
		};
	};

	const onSubmit = async e => {
		e.preventDefault();
		const { username, password } = await credentials();

		if (username === userName && password === userPassword) {
			console.log('redirect');

			return <Redirect to="/" />;
		} else {
			setBadCredentials(true);

			setTimeout(() => {
				setBadCredentials(false);
			}, 3000);
		}
	};

	const mobileView = window.innerWidth < 468;
	return (
		<div 
			className={
				mobileView
					? null
					: "container vh-100 d-flex justify-content-center align-items-center"
			}
		>
			<div
				className={mobileView ? "card mb-5" : "card mb-5 w-50"}
				style={mobileView ? {border: 'none'} : null}
			>

				<h4 className="card-header d-flex justify-content-between">
					<span>Login</span>
					{badCredentials && <BadCredentials />}
				</h4>
				
				<div className="card-body">
					<form className="form" onSubmit={onSubmit}>
						<div className="form-group w-100">
							{userName.length === 0 ? (
								<label htmlFor="userName" className="text-warning">
									Name is required
								</label>
							) : (
								<label htmlFor="userName">Name</label>
							)}
							<input
								type="text"
								name="userName"
								placeholder="What should I call you?"
								value={userName}
								onChange={e => setUserName(e.target.value)}
								className="form-control"
								required
								ref={nameRef}
								// disable autocomplete in Chrome
								onFocus={() => nameRef.current.removeAttribute('readonly')}
								readOnly
							/>
						</div>
						<div>
							{userPassword.length === 0 ? (
								<label htmlFor="userName" className="text-warning">
									Password is required
								</label>
							) : (
								<label htmlFor="userName">Password</label>
							)}
							<input
								type="password"
								name="password"
								placeholder="Enter your password"
								value={userPassword}
								onChange={e => setUserPassword(e.target.value)}
								className="form-control"
								required
								ref={passRef}
								// disable autocomplete in Chrome
								onFocus={() => passRef.current.removeAttribute('readonly')}
								readOnly
							/>
						</div>

						<div>
							<input type="submit" value="Login" className="btn btn-primary mt-4 px-5" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
