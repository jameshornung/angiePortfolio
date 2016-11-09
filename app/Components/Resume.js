var React = require('react');
var Nav = require('./Children/Nav');

var Resume = React.createClass({
	render: function(){
		return(
			<div className="wrapper">
				<nav>
					<Nav />
				</nav>
				<div className="container" id="mainContainer">
					<div className="center">
						<h1>Resume Page</h1>
					</div>
				</div>
			</div>
			)
	}
});

module.exports = Resume;