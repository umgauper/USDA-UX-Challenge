import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Children from './components/Children';
import Assistance from './components/Assistance';
import Income from './components/Income';
import Contact from './components/Contact';
import Router, { Route, Link, IndexRoute, browserHistory } from 'react-router';

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="children" component={Children}/>
			<Route path="assistance" component={Assistance}/>
		    <Route path="income" component={Income}/>
		    <Route path="contact" component={Contact}/>
		</Route>
	</Router>



 	, document.getElementById('root'));
