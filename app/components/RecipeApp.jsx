var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');

var RecipeList = require('RecipeList');

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
        })
    }, 
    
    render: function() {
        var {recipes} = this.state;
        return(
            <div>
                <RecipeList recipes={recipes} onToggle={this.handleToggle}/>
            </div>
        )
    }
});

module.exports = RecipeApp;