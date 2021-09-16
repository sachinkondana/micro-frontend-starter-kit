import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import Header from './components/Header';

import RechargeImg from './images/recharge.png';
import ElectricityImg from './images/electricity.png';
import DthImg from './images/dth.png'

import './style.css';

const MobileRecharge = () => <img src={RechargeImg} className="app-img" alt="Mobile Recharge Section"/>;
const Electricity = () => <img src={ElectricityImg} className="app-img" alt="Electric Bill Payment Section"/>;
const DthRecharge = () => <img src={DthImg} className="app-img" alt="DTH Recharge Section"/>;

export default ({ history }) => {	
	return (
		<Router history={history}>
			<Header />
			<div className="rc-container">
				<Switch>
					<Route exact path="/recharge/mobile" component={MobileRecharge} />
					<Route exact path="/recharge/electricity" component={Electricity} />
					<Route exact path="/recharge/dth" component={DthRecharge} />
					<Redirect exact from="/recharge" to="/recharge/mobile" />
				</Switch>
			</div>
		</Router>
	);
};
