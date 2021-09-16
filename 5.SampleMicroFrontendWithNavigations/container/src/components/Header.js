import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

var headerStyles = {
	appBar: {
		background: '#00baf2',
		color: '#fff'
	}
};

export default ({ pathname = window.location.pathname }) => {
	const [ currentTab, setCurrentTab ] = useState(pathname.split('/')[1]);
	
	const handleChange = (event, newValue) => {
		setCurrentTab(newValue);
	};

	return (
		<Tabs value={currentTab} onChange={handleChange} style={headerStyles.appBar}>
			<Tab label="Recharge" component={Link} value="recharge" to={'/recharge'} />
			<Tab label="Booking" component={Link} value="booking" to={'/booking'} />
			<Tab label="Shopping" component={Link} value="shopping" to={'/shopping'} />
		</Tabs>
	);
};
