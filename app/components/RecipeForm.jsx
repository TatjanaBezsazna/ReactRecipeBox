var React = require('react');
var $ = require('jQuery');

var {Link} = require('react-router');

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
            var ingredient = $ingredients[i].childNodes[1].value;
            var quantity = $ingredients[i].childNodes[2].value;
            
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
        
        window.location.hash = '#/';    
    },
    
    render: function() {
        var {ingredientNumber} = this.state;
        
        var inputFileds = () => {
            var rows = [];
               for(var i = 0; i < ingredientNumber; i++) {
                   rows.push(
                           <div key={i} className="ingredients input-icon-wrap">
                                <span className="input-icon">{i+1}. </span>
                                <input className="input-with-icon" type='text' placeholder='Enter ingredient'/>
                                <input className="input-with-icon" type='text' placeholder='Quantity'/>
                           </div>   
                   )
               } 
            return rows;
        }; 
        
        return (
            <div>
                <form onSubmit={this.handleRecipeAdd}>
                    <input type='text' placeholder='Enter your recipe name' ref='name'/>
                    {inputFileds().map((indredient) => {
                        return indredient;
                    })}
                    <div className="set-right-justified">
                        <input type='button' value='Add more ingredients' onClick={this.addMoreIngredients} className="button small"/>
                    </div>
                    <textarea placeholder='Enter preparation details' ref='description' rows="5"></textarea>
                    <input type='submit' className="button" value="Save"/>
                </form>
                <Link to="/" className="button">Return</Link>
            </div>
        )
    }
})

module.exports = RecipeForm;