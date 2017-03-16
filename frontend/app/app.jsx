import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import Navbar from '../navbar.jsx';
import Home from '../home.jsx';
import Popular from '../popular.jsx';
import Prefecture from '../prefecture.jsx';

const App = React.createClass({
	render(){
		return (
			<div>
				<Navbar />
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
	<IndexRoute component={Home} />
	<Route path="popular" component={Popular} />
	<Route path="prefecture/:prefecture" component={Prefecture} />
	</Route>
</Router>
,document.getElementById('root'))