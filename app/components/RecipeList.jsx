var React = require('react');

var Recipe = require('Recipe');

var RecipeList = React.createClass({
    render: function() {
        var {recipes} = this.props;
        
        var renderRecipes = () => {
            return recipes.map((recipe, index) => {
                return (
                    <div>
                        <Recipe key={recipe.id} {...recipe} onToggle={this.props.onToggle} onCheck={this.props.onCheck} onRecipeEdit={(recipe) => {this.props.onRecipeEdit(recipe);}}/>
                    </div>
                )
            });
        };
        
        return (
            <div>
                {renderRecipes()}
            </div>
        )
    }
});

module.exports = RecipeList;