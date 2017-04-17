var React = require('react');

var Recipe = React.createClass({
    
    render: function() {
        var {id, name, ingredients, onShow} = this.props;
        
        var showIngredients = () => {
            if(onShow) {
                return ingredients.map((ingredient) => {
                    return (
                        <div>{ingredient.name}</div>
                    )
                });
            }
        }
        
        return (
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <p>{name}</p>
                {showIngredients()}
            </div>
        )
    }
});

module.exports = Recipe;