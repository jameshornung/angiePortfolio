var React = require('react');

var Nav = React.createClass({
	render: function(){
		return(
			<div className="nav-wrapper pink accent-3">
		      <a href="#" className="brand-logo">Logo</a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="sass.html">Sass</a></li>
		        <li><a href="badges.html">Components</a></li>
		        <li><a href="collapsible.html">JavaScript</a></li>
		      </ul>
		    </div>
			)
	}
});

module.exports = Nav;