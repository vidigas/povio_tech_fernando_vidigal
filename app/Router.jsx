import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from './ui/components/NotFound';
import Home from './modules/Main/';


export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>		
		</BrowserRouter>
	);
}
