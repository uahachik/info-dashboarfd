import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import credentials from '../../data/credentials';
import BadCredentials from './BadCredentials';

const Login = ({ history, setIsAuth }) => {
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [badCredentials, setBadCredentials] = useState(false);
	const nameRef = useRef(), passRef = useRef(null);

	document.body.style.overflow = 'hidden';

	const onSubmit = async e => {
		e.preventDefault();
		const { username, password } = credentials();

		if (username === userName && password === userPassword) {
			setIsAuth(true);
			history.push('/');
		} else {
			setBadCredentials(true);
		}
	};

	const mobileView = window.innerWidth < 468;
	return (
		<div className="bg-info">
			<div className="d-flex justify-content-center">
				<video
					autoPlay muted loop id="myVideo" style={mobileView ? {height: 760, padding: 0} : {height: '100vh'}}
					className={mobileView ? "container position-fixed mt-4 bg-info" : "container position-fixed mt-5 bg-info"}>
					<source src="https://storage.googleapis.com/air-port-codes/videos/lax-big.mp4" type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
			</div>
			
			<div 
				className={
					mobileView
						? null
						: "container vh-100 d-flex justify-content-center align-items-baseline mt-5"
				}
			>
				<div
					className={mobileView ? "card bg-info" : "card mb-5 w-50"}
					style={mobileView ? {border: 'none'} : null}
				>

					<h4
						className="card-header d-flex justify-content-between"
						style={mobileView ? {backgroundColor: '#00386d'} : {backgroundColor: '#e9ecef'}}
					>
						<span className={mobileView ? "text-light" : "text-primary"}>Login</span>
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
									// disable autocomplete
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
									// disable autocomplete
									onFocus={() => passRef.current.removeAttribute('readonly')}
									readOnly
								/>
							</div>

							<div className={mobileView ? "mt-2" : null}>
								<input type="submit" value="Login" className="btn btn-primary mt-4 px-5" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	history: PropTypes.object.isRequired,
	setIsAuth: PropTypes.func.isRequired,
}

export default Login;
