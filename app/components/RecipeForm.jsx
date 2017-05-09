var React = require('react');
var $ = require('jQuery');
var uuid = require('node-uuid');
var {Link} = require('react-router');

var RecipesAPI = require('RecipesAPI');

var RecipeForm = React.createClass({
    getInitialState: function() {
        var id = this.props.location.query.id;
        var recipe = id ? RecipesAPI.filterRecipes(RecipesAPI.getRecipes(), id) : {};

        return {
            id: id ? id : null,
            recipe: recipe, 
            ingredientNumber: recipe && recipe.ingredients.length > 0 ? recipe.ingredients.length : 3
        }
    },
    
    addMoreIngredients: function(e) {
       e.preventDefault();
       var currentIngrNumber = this.state.ingredientNumber;
        
       this.setState({
           ingredientNumber: currentIngrNumber + 3
       });
    },
    
    handleRecipesChange: function(e) {
        
        e.preventDefault();
        
        var id = this.state.recipe.id;
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
            return;
        } 
            
        var currentRecipes = RecipesAPI.getRecipes();
        var newRecipes;
        
        if (id) {
            newRecipes = currentRecipes.map((recipe) => {
                if(recipe.id === id) {
                    recipe = {
                        ...recipe, 
                        name: recipeName,
                        ingredients: ingrArr,
                        description: recipeDescription,
                    }
                }
                return recipe;
            });
            
        } else {
            newRecipes = [
                ...currentRecipes, 
                {
                    id: uuid(),
                    name: recipeName,
                    ingredients: ingrArr,
                    description: recipeDescription,
                    onShow: false,
                    checked: false
                }
            ];
        }
        
            RecipesAPI.setRecipes(newRecipes);
            window.location.hash = '#/'; 

    },

    
    render: function() {
        var {ingredientNumber} = this.state;
        var {name, ingredients, description} = this.state.recipe;

        var inputFileds = function(ingredients) {
            
            var rows = [];
               for(var i = 0; i < ingredientNumber; i++) {
                   rows.push(
                           <div key={i} className="ingredients input-icon-wrap">
                                <span className="input-icon">{i+1}. </span>
                                <input className="input-with-icon" type='text' placeholder='Enter ingredient' defaultValue={ingredients && ingredients[i] ? ingredients[i].name : ''}/>
                                <input className="input-with-icon" type='text' placeholder='Quantity' defaultValue={ingredients && ingredients[i] ? ingredients[i].quantity : ''}/>
                           </div>   
                   )
               } 
            return rows;
        }; 
        
        return (
            <div>
                <form onSubmit={this.handleRecipesChange}>
                    <input type='text' placeholder='Enter your recipe name' ref='name' defaultValue={name}/>
                    {inputFileds(ingredients).map((indredient) => {
                        return indredient;
                    })}
                    <div className="set-right-justified">
                        <input type='button' value='Add more ingredients' onClick={this.addMoreIngredients} className="button small"/>
                    </div>
                    <textarea placeholder='Enter preparation details' ref='description' rows="5" defaultValue={description}></textarea>
                    <input type='submit' className="button success" value="Save"/>
                    <Link to="/" className="button">Return</Link>
                </form>
            </div>
        )
    }
})

module.exports = RecipeForm;