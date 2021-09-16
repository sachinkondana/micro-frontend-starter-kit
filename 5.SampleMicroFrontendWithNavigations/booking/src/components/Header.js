import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

var headerStyles = {
	appBar: {
		background: '#405053',
		color: 'white'
	}
};

export default ({ pathname = window.location.pathname }) => {
	const [ currentTab, setCurrentTab ] = useState(pathname.split('/')[2]);

	useEffect(() => {
		console.log(1111, pathname);

		setCurrentTab(pathname.split('/')[2] || 'bus');
	}, [pathname]);

	const handleChange = (event, newValue) => {
		setCurrentTab(newValue);
	};

	return (
		<Tabs value={currentTab} onChange={handleChange} style={headerStyles.appBar}>
			<Tab label="Bus Tickets" component={Link} value="bus" to={'/booking/bus'} />
			<Tab label="Movie Tickets" component={Link} value="movie" to={'/booking/movie'} />
		</Tabs>
	);
};
