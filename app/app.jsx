var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 

var RecipeApp = require('RecipeApp');

//Load foundation
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');


ReactDOM.render(
	<RecipeApp/>,
	document.getElementById('app')
);


