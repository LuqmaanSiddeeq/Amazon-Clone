import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import firebase, { auth } from "./firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password).then((auth) => {
			if (auth) {
				history.push("/");
			}
		});
		// Fancy firebase login
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// successfully created
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
		// Fancy firebase register
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form action="">
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={signIn} className="login__signInButton">
						Sign in
					</button>
				</form>
				<p>
					By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
					Privacy Notice.{" "}
				</p>
				<button onClick={register} className="login__registerButton">
					Create your amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
