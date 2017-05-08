var React = require('react');
var {Link} = require('react-router');

var IngredientTable = require('IngredientTable');
var RecipeForm = require('RecipeForm');

var Recipe = React.createClass({
    
    render: function() {
        var {id, name, description, ingredients, checked, onShow} = this.props;
        
        return (
            <div>
                <div className='recipe-checkbox'>
                    <input type='checkbox' checked={checked} onChange={() => {this.props.onCheck(id)}}/>
                </div>
                <div onClick={() => {this.props.onToggle(id);}} className='recipe-title'>
                        <p>{name}</p>
                </div>
                    <IngredientTable {...this.props}/>
                    <Link to={"/editRecipe?id="+id} className="button">Edit Recipe</Link>
            </div>
        )
    }
});

module.exports = Recipe;