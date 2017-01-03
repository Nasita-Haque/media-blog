import React from 'react';
import {Link} from 'react-router';
import './css/app.css';

const Navbar = React.createClass({
	render(){
		return (
			<div className='fixed-navbar'>
				<ul className= 'navbar-ul'>
  					<li><Link to='/popular'>Popular</Link></li>
					<li><Link to='/account'>My Account</Link></li>
      				<li><Link to='/'><img src="http://i.imgur.com/Sqt5EJe.png" alt="Logo"></img></Link></li>
					<li><Link to='/posts'>New Posts</Link></li>
					<li><Link to='/create'>Create Post</Link></li>
				</ul>
			</div>
		)
	}
});

export default Navbar;