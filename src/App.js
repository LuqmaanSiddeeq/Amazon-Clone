import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
	"pk_test_51HSOSlANjYvAz1zijIEPJtBtFEVI05ebkKWf2kZioX0kVtvSZ8HuISYq9Q2TuhOlFtCzRGggNttz5KqCurWRKUNd00DndiU6O4"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// Will only tun once when the app component loads

		auth.onAuthStateChanged((authUser) => {
			console.log("The user is >>>", authUser);

			if (authUser) {
				// the user just logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// The use has logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		// BEM
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
