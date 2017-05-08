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
			<Route path="addRecipe" component={RecipeForm}/>
            <Route path="editRecipe" component={RecipeForm}/>
			<IndexRoute component={RecipeApp}/> 
		</Route>
	</Router>,
	document.getElementById('app')
);

//Add search input
//Add styles