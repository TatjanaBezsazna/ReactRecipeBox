var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');
var {Link} = require('react-router');

var RecipeList = require('RecipeList');
var RecipesAPI = require('RecipesAPI');


var RecipeApp = React.createClass({
    getInitialState: function() {
        return {
            recipes: RecipesAPI.getRecipes(),
            showNewRecipeForm: false
            }
    }, 
    
    handleToggle: function(id) {
        var updatedRecipes = this.state.recipes.map((recipe) => {
            if(recipe.id === id) {
                recipe.onShow = !recipe.onShow;
            }
            return recipe;
        });
        
        this.setState({
            recipes: updatedRecipes
        });
    }, 
    
    handleCheck: function(id) {
      var updatedRecipes = this.state.recipes.map((recipe) => {
           if(recipe.id === id) {
               recipe.checked = !recipe.checked;
           } 
            return recipe;
        });
        
        this.setState({
            recipes: updatedRecipes
        });
    },
    
    
    handleHideForm: function() {
        this.setState({
            showNewRecipeForm: !this.state.showNewRecipeForm
        });
    },
    
    handleRecipeDelete: function() {
        var updatedRecipes = this.state.recipes;
        
        updatedRecipes = updatedRecipes.filter((recipe) => {
            return !recipe.checked;
        });
        
        this.setState({
            recipes: updatedRecipes
        });
    },
    
    componentDidUpdate: function() {
        RecipesAPI.setRecipes(this.state.recipes);
    },

    render: function() {
        var {recipes} = this.state;

        return(
            <div>
                 <RecipeList recipes={recipes} onToggle={this.handleToggle} onCheck={this.handleCheck} onRecipeEdit={this.handleRecipeEdit}/>
                 <Link to="/addRecipe" className="button">Add Recipe</Link>
                 <input type='button' className="button alert" value='Delete selected' onClick={this.handleRecipeDelete}/>
            </div>
        )
    }
});

module.exports = RecipeApp;