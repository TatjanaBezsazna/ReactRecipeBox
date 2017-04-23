var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var EditRecipeForm = require('EditRecipeForm');

describe('EditRecipeForm', () => {
    it('should exist', () => {
        expect(RecipeForm).toExist();
    });
    
    it('should call onRecipeEdit when recipe is submited', () => {
        var recipe = {
            id: 2,
            name: 'some name',
            ingredients: [{
                name: onion,
                quantity: 1
            }]
        };
        var spy = expect.createSpy();
        var editRecipeForm = TestUtils.renderIntoDocument(<EditRecipeForm {...recipe} onRecipeEdit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(editRecipeForm));
        
        editRecipeForm.refs.name.value = "new recipe";
        
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith({
            id: 2,
            name: 'new recipe',
            ingredients: [{
                name: onion,
                quantity: 1
            }]
        });
    });
});