var React = require('react');

var Main = (props) => {
	
	return (
			<div>
				<div className='row'>
					<div className='columns medium-6 large-4 small-centered'>
                        <h1 className="text-center">Recipe Box</h1>
						{props.children} 
					</div>
				</div>	
			</div>	
	)
}

//{this.props.children} Describes where children components should be placed

module.exports = Main;