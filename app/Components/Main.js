var React = require('react');
var Nav = require('./Children/Nav');

var Main = React.createClass({
	render: function(){
		return(
			<div className="wrapper">
				<nav>
					<Nav />
				</nav>
				<div className="container" id="mainContainer">
					<div className="center">
						<h1 id="mainName">Angie Cervantes</h1>
						<img id="mainPic" src="images/angieWithHotDog.jpg" />
					</div>
				</div>
			</div>
			)
	}
});

module.exports = Main;