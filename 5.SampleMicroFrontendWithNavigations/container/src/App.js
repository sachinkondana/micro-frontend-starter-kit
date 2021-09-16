import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Header from './components/Header';
import RechargeApp from './interfaces/RechargeApp';
import BookingApp from './interfaces/BookingApp';

import './style.css';

const NotFound = () => <div>Not found</div>;

export default () => {
	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<Switch>
					<Route path="/recharge" component={RechargeApp} />
					<Route path="/booking" component={BookingApp} />
					{/* <Route exact path="/shopping" component={Shopping} /> */}
					<Redirect exact from="/" to="recharge" />
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};
