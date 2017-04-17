var React = require('react');

var RecipeForm = require('RecipeForm');

var AddRecipe = React.createClass({
    getInitialState: function() {
        return {
            showForm: false
        }
    }, 
    
    handleToggle: function() {
        this.setState({
            showForm: !this.state.showForm
        });
    }, 
    
    onAddRecipe: function(recipeName, recipeDescription, ingrArr) {
        if(recipeName.length >= 0) {
            this.props.onAddRecipe(recipeName, recipeDescription, ingrArr);
        }
        
        this.handleToggle();
    },
    
    render: function() {
        var {showForm} = this.state;
        
        var recipeForm = () => {
            if(showForm) {
              return <RecipeForm onAddRecipe={this.onAddRecipe}/>
            }
            
            return <input type='button' value='Add recipe' onClick={this.handleToggle}/>
        };
        
        return(
            <div>
                {recipeForm()}
            </div>
        )     
    }
});

module.exports = AddRecipe;