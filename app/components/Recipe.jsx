var React = require('react');

var IngredientTable = require('IngredientTable');
var EditRecipeForm = require('EditRecipeForm');

var Recipe = React.createClass({
    getInitialState: function() {
        return {
            editRecipe: false
        }    
    },
    
    handleRecipeEdit: function() {
        this.setState({
            editRecipe: !this.state.editRecipe
        });  
    },
    
    render: function() {
        var {id, name, description, ingredients, checked, onShow} = this.props;
        
        var showControls = () => {
            if(this.state.editRecipe) {
                return (
                        <div>
                            <input type='button' value='Cancel' onClick={this.handleRecipeEdit}/>
                        </div>
                    );
            };
            
            return (
                <div>
                    <input type='button' value='Edit' onClick={this.handleRecipeEdit}/>
                </div>
            );
        };
        
        var showDetails= () => {
            if(onShow && !this.state.editRecipe) {
                return (
                    <div>
                        <IngredientTable {...this.props}/>
                        {showControls()}
                    </div>
                    
                    );
            } else if (onShow && this.state.editRecipe) {
                return(
                    <div>
                        <EditRecipeForm {...this.props} onRecipeEdit={(recipe) => {
                                this.handleRecipeEdit(); 
                                this.props.onRecipeEdit(recipe);
                            }}/>
                        {showControls()}
                    </div>  
                )
            };
        };
        
        var showName = () => {
            if(!this.state.editRecipe) {
                return (
                    <div onClick={() => {this.props.onToggle(id);}} className='recipe-title'>
                        <p>{name}</p>
                     </div>
                )
            }
        }
        
        return (
            <div>
                <div className='recipe-checkbox'>
                    <input type='checkbox' checked={checked} onChange={() => {this.props.onCheck(id)}}/>
                </div>
                    {showName()}
                    {showDetails()}
            </div>
        )
    }
});

module.exports = Recipe;