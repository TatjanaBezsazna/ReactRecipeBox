var React = require('react');

var IngredientTable = ({ingredients, description}) => {
    return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((ingredient, index) => {
                        return (
                            <tr key={index}>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.quantity}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div>Preparation: {description}</div>
            </div>
        )
};

module.exports = IngredientTable;

