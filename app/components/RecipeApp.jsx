var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');

var RecipeList = require('RecipeList');
var AddRecipe = require('AddRecipe');

var RecipeApp = React.createClass({
    getInitialState: function() {
        return {
            recipes: [
            {
              id: uuid(),
              name: 'Potato salad', 
              ingredients: [
                {
                    name: 'potato', 
                    quantity: 2
                },
                {
                    name: 'onion', 
                    quantity: 1
                }], 
                description: 'not yet maintained',
              onShow: true
            }, {
              id: uuid(),
              name: 'Boiled pasta', 
              ingredients: [
                {
                    name: 'pasta', 
                    quantity: '0,5kg'
                },
                {
                    name: 'onion', 
                    quantity: 1
                }], 
                description: 'not yet maintained',
              onShow: false
            }
        ]}
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
                    onShow: false
                }
            ]
        });
    },
    
    render: function() {
        var {recipes} = this.state;
        return(
            <div>
                <RecipeList recipes={recipes} onToggle={this.handleToggle}/>
                <AddRecipe onAddRecipe={this.handleRecipeAdd}/>
            </div>
        )
    }
});

module.exports = RecipeApp;