var React = require('react');

var EditRecipeForm = React.createClass({
    getInitialState: function() {
        return {
            aditionalIngredients: this.props.ingredients.length
        }
    },
    
    addMoreIngredients: function(e) {
       e.preventDefault();
       var aditionalIngredients = this.state.aditionalIngredients;
        
       this.setState({
           aditionalIngredients: aditionalIngredients + 1
       });
    },
    
    handleSubmit: function(e) {
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
        
        console.log(ingrArr);
        
        var editedRecipe = {
                ...this.props,
                name: recipeName,
                ingredients: ingrArr,
                description: recipeDescription,
        };
            this.props.onRecipeEdit(editedRecipe);
    },
    
    render: function() {
        var {id, name, description, ingredients, checked, onShow} = this.props;
        
        var showIngredients = () => {
           return ingredients.map((ingredient, index) => {
              return (
                      <div className='ingredients' key={index}>
                          <div>{index+1}.</div>
                          <input type='text' defaultValue={ingredient.name}/>
                          <input type='text' defaultValue={ingredient.quantity}/>
                      </div> 
              ) 
           });  
        };
        
        var addIngredients = () => {
            var rows = [];
               for(var i = ingredients.length; i < this.state.aditionalIngredients; i++) {
                   rows.push(
                       <div className='ingredients' key={i}>
                           <div>{i+1}.</div>
                           <input type='text' placeholder='Ingredient'/>
                           <input type='text' placeholder='Quantity'/>
                       </div>
                   )
               } 
            return rows;
        }; 
        
        
        return (
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Recipe Title</label>
                    <input type="text" value={name} ref='name'/>
                    <label for="ingredients">Ingredients</label>
                    {showIngredients()}
                    {addIngredients()}
                    <label for="description">Description</label>
                    <input type="text" defaultValue={description} ref='description'/>
                    <div>
                        <input type='submit' value='Save'/>
                        <input type='button' value='Add more ingredients' onClick={this.addMoreIngredients}/>
                    </div>
                </form>
        );
    }
});

module.exports = EditRecipeForm;