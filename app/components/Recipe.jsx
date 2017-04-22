var React = require('react');

var Recipe = React.createClass({
    
    render: function() {
        var {id, name, description, ingredients, onShow} = this.props;
        
        var showIngredients = () => {
            if(onShow) {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredients.map((ingredient) => {
                            return (
                                <tr>
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.quantity}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                );
            };
        };
        
        var showDescription = () => {
            if(onShow) {
                return (
                    <div>{description}</div>
                );
            };
        };
        
        return (
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <p>{name}</p>
                {showIngredients()}
                {showDescription()}
            </div>
        )
    }
});

module.exports = Recipe;