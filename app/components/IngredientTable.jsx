var React = require('react');

var IngredientTable = ({ingredients}) => {
    return (
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
        )
};

module.exports = IngredientTable;

