import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const Popular = React.createClass({
	getInitialState(){
		return ({prefectures: []})
	},
	componentDidMount(){
		$.ajax({
			url: 'api/prefecture',
			data: 'GET',
			success: ((data)=>{
				data ? this.setState({prefectures: data}) : console.log('Error with gathering prefecture data')
			})
		})
	},
	render(){
	let displayPrefectures = this.state.prefectures.map((val, idx)=>{
		return (
		<li key={idx}>
			<Link to={'/prefecture/'+ val.prefecture}>{val.prefecture}</Link>
		</li>
		)
		// console.log('prefecture:', val.prefecture)
	})
		return(
			<div className='prefecture-div'>
				<ul className='prefectures-content-1'>
					{displayPrefectures}
				</ul>
				<div className='prefecture-content-2'>
					<img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Regions_and_Prefectures_of_Japan_2.svg"></img>
				</div>
			</div>
		)
	}
})

export default Popular; 