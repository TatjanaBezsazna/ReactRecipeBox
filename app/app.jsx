var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 

var Main = require('Main');
var RecipeApp = require('RecipeApp');
var RecipeForm = require('RecipeForm');

//Load foundation
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <h1 className="text-center">Recipe Box</h1>
			<Route path="addRecipe" component={RecipeForm}/>
			<IndexRoute component={RecipeApp}/> 
		</Route>
	</Router>,
	document.getElementById('app')
);

//Add search input
//Add styles