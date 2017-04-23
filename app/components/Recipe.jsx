var React = require('react');

var IngredientTable = require('IngredientTable');

var Recipe = React.createClass({
    render: function() {
        var {id, name, description, ingredients, checked, onShow} = this.props;
        
        var showDetails= () => {
            if(onShow) {
                return (
                    <div>
                        <IngredientTable ingredients={ingredients}/>
                        <div>Preparation: {description}</div>
                    </div>
                    
                    );
            };
        };
        
        return (
            <div>
                <div className='recipe-checkbox'>
                    <input type='checkbox' checked={checked} onClick={() => {this.props.onCheck(id)}}/>
                </div>
                <div onClick={() => {this.props.onToggle(id);}} className='recipe-title'>
                    <p>{name}</p>
                </div>
                    {showDetails()}
            </div>
        )
    }
});

module.exports = Recipe;