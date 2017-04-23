var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');

var RecipeList = require('RecipeList');
var AddRecipe = require('AddRecipe');
var RecipesAPI = require('RecipesAPI');


var RecipeApp = React.createClass({
    getInitialState: function() {
        return {
            recipes: RecipesAPI.getRecipes()
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
    
    handleRecipeAdd: function(recipeName, recipeDescription, ingrArr){
        var currentRecipes = this.state.recipes;
        this.setState({
            recipes: [
                ...currentRecipes, 
                {
                    id: uuid(),
                    name: recipeName,
                    ingredients: ingrArr,
                    description: recipeDescription,
                    onShow: false,
                    checked: false
                }
            ]
        });
    },
    
    componentDidUpdate: function() {
        RecipesAPI.setRecipes(this.state.recipes);
    },

    render: function() {
        var {recipes} = this.state;

        return(
            <div>
                <RecipeList recipes={recipes} onToggle={this.handleToggle} onCheck={this.handleCheck}/>
                <AddRecipe onAddRecipe={this.handleRecipeAdd}/>
            </div>
        )
    }
});

module.exports = RecipeApp;