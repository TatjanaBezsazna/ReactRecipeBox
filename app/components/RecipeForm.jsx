var React = require('react');
var $ = require('jQuery');

var RecipeForm = React.createClass({
    getInitialState: function() {
        return {
            ingredientNumber: 3,
        }
    },
    
    addMoreIngredients: function(e) {
       e.preventDefault();
       var currentIngrNumber = this.state.ingredientNumber;
        
       this.setState({
           ingredientNumber: currentIngrNumber + 3
       });
    },
    
    handleRecipeAdd: function(e) {
        e.preventDefault();
        var recipeName = this.refs.name.value;
        var recipeDescription = this.refs.description.value;
        var $ingredients = $('.ingredients');
        
        var ingrArr = [];
        
        for(var i = 0; i < $ingredients.length; i++) {
            var ingredient = $ingredients[i].childNodes[0].value;
            var quantity = $ingredients[i].childNodes[1].value;
            
            if(ingredient.length > 0) {
                ingrArr.push({
                    name: ingredient,
                    quantity: quantity
                });
            };
            
        };
        
        if(!recipeName) {
            this.refs.name.focus();
        } else {
            this.props.onAddRecipe(recipeName, recipeDescription, ingrArr);
        };
            
    },
    
    render: function() {
        var {ingredientNumber} = this.state;
        
        var inputFileds = () => {
            var rows = [];
               for(var i = 0; i < ingredientNumber; i++) {
                   rows.push(
                        <div  className="medium-8 large-6">
                           <div key={i} className="ingredients input-icon-wrap">
                                <span className="input-icon">{i+1}. </span>
                                <input className="input-with-icon" type='text' placeholder='Ingredient'/>
                                <input className="input-with-icon" type='text' placeholder='Quantity'/>
                           </div>   
                        </div>
                   )
               } 
            return rows;
        }; 
        
        return (
            <div>
                <form onSubmit={this.handleRecipeAdd}>
                    <input type='text' placeholder='Recipe title' ref='name'/>
                    {inputFileds().map((indredient) => {
                        return indredient;
                    })}
                    <input type='button' value='Add more ingredients' onClick={this.addMoreIngredients} className="button"/>
                    <textarea placeholder='Description' ref='description'></textarea>
                    <input type='submit' value='Save'/>
                    <input type='button' value='Cancel' onClick={this.props.handleCancel}/>
                </form>
            </div>
        )
    }
})

module.exports = RecipeForm;