var React = require('react');

var Nav = React.createClass({
	render: function(){
		return(
			<div className="nav-wrapper pink accent-3">
		      <a href="#" className="brand-logo">Logo</a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="#">About Me</a></li>
		        <li><a href="#">Resume</a></li>
		        <li><a href="#">Connect With Me</a></li>
		      </ul>
		    </div>
			)
	}
});

module.exports = Nav;