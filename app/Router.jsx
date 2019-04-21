import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from './ui/components/NotFound';
import List from './modules/List/index';


export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={List} />
				<Route component={NotFound} />
			</Switch>		
		</BrowserRouter>
	);
}
