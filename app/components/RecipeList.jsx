var React = require('react');

var Recipe = require('Recipe');

var RecipeList = React.createClass({
    render: function() {
        var {recipes} = this.props;
        
        var renderRecipes = () => {
            return recipes.map((recipe) => {
                return (
                    <Recipe key={recipe.id} {...recipe} onToggle={this.props.onToggle}/>
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