var React = require('react');

var Main = (props) => {
	
	return (
			<div className="container">
				<div className='row'>
					<div className='columns medium-6 large-4 small-centered'>
                        <h1>Recipe Box</h1>
						{props.children} 
					</div>
				</div>	
			</div>	
	)
}

module.exports = Main;