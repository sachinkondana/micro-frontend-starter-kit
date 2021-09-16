import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

var headerStyles = {
	appBar: {
		background: '#002970',
		color: 'white'
	}
};

export default ({ pathname = window.location.pathname }) => {
	const [ currentTab, setCurrentTab ] = useState(pathname.split('/')[2]);

	useEffect(() => {
		setCurrentTab(pathname.split('/')[2] || 'mobile');
	}, [pathname]);

	const handleChange = (event, newValue) => {
		setCurrentTab(newValue);
	};

	return (
		<Tabs value={currentTab} onChange={handleChange} style={headerStyles.appBar}>
			<Tab label="Mobile" component={Link} value="mobile" to={'/recharge/mobile'} />
			<Tab label="Electricity" component={Link} value="electricity" to={'/recharge/electricity'} />
			<Tab label="DTH" component={Link} value="dth" to={'/recharge/dth'} />
		</Tabs>
	);
};
