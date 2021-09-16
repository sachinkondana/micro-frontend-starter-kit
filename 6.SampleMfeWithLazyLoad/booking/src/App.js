import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

import Header from './components/Header';

const BusTicketBooking = () => <div>Bus Ticket Booking</div>;
const MovieTicketBooking = () => <div>Movie Ticket Booking</div>;

export default ({ history }) => {
	const handleMobileRechargeNavigation = () => {
		history.push('/recharge/mobile');
	};

	return (
		<>
			<div className="app-identified">repo-booking</div>
			<Router history={history}>
				<Header />
				<div className="rc-container">
					<Switch>
						<Route exact path="/booking/bus" component={BusTicketBooking} />
						<Route exact path="/booking/movie" component={MovieTicketBooking} />
						<Redirect exact from="/booking" to="/booking/bus" />
					</Switch>
					<br />
					<Button variant="contained" color="primary" onClick={handleMobileRechargeNavigation}>
						Goto mobile recharge
					</Button>
				</div>
			</Router>
		</>
	);
};
