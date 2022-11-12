import React from 'react'
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom'

const Login = () => {

  	return (
		<div className="container">
			<div className="form login">
				<span className="title">Login</span>
				<LoginForm/>
				<div className="login-signup">
					<span className="text">Not a member?</span>
					<Link to='/registration' className="text signup-link">Signup Now</Link>
				</div>
			</div>
		</div>
	)
}

export default Login;
