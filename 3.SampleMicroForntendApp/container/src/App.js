import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from './components/Header';
import RechargeApp from './interfaces/RechargeApp';

import './style.css';

const NotFound = () => <div>Not found</div>;
// const Recharge = () => <div>Recharge</div>;
const Booking = () => <div>Booking</div>;

export default () => {
	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<Switch>
					<Route exact path="/recharge" component={RechargeApp} />
					<Route exact path="/booking" component={Booking} />
					{/* <Route exact path="/shopping" component={Shopping} /> */}
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};
