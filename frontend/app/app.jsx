import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../navbar.jsx';

const App = React.createClass({
	render(){
		return (
			<div>
				<Navbar />
				Hello Japan!
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('root'))