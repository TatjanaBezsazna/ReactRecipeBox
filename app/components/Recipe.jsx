var React = require('react');
var {Link} = require('react-router');

var IngredientTable = require('IngredientTable');
var RecipeForm = require('RecipeForm');

var Recipe = React.createClass({
    
    getInitialState: function() {
        return {
            showDetails: false
        }
    },
    
    handleToggle: function() {

       this.setState({
           showDetails: !this.state.showDetails
        });

    },
    
    render: function() {
        var {id, name, description, ingredients, checked, onShow} = this.props;
        var {showDetails} = this.state;
        
        var displayDetails = function() {
            if(showDetails) {
                return (
                    <div>
                        <IngredientTable ingredients={ingredients} description={description}/>
                        <Link to={"/editRecipe?id="+id} className="button">Edit Recipe</Link>
                    </div>
                );
            };
        };
        
        return (
            <div>
                <div className='recipe-checkbox'>
                    <input type='checkbox' checked={checked} onChange={() => {this.props.onCheck(id)}}/>
                </div>
                <div onClick={this.handleToggle} className='recipe-title'>
                        <p>{name}</p>
                </div>
                    {displayDetails()}
            </div>
        )
    }
});

module.exports = Recipe;