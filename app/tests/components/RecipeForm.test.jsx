var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var RecipeForm = require('RecipeForm');

describe('RecipeForm', () => {
    it('should exist', () => {
        expect(RecipeForm).toExist();
    });
    
    it('should call onAddRecipe when recipe is submited with valid recipe name', () => {
        var spy = expect.createSpy();
        var addRecipeForm = TestUtils.renderIntoDocument(<RecipeForm onAddRecipe={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addRecipeForm));
        
        addRecipeForm.refs.name.value = "new recipe";
        
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith("new recipe", '', []);
    });
    
    it('should not call onAddRecipe when recipe is submited with invalid recipe name', () => {
        var spy = expect.createSpy();
        var addRecipeForm = TestUtils.renderIntoDocument(<RecipeForm onAddRecipe={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addRecipeForm));
        
        addRecipeForm.refs.name.value = '';
        
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
    
    it('should not call handleCancel when cancel button is clicked', () => {
        var spy = expect.createSpy();
        var addRecipeForm = TestUtils.renderIntoDocument(<RecipeForm handleCancel={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addRecipeForm));
        
        TestUtils.Simulate.click($el.find('input[value=Cancel]')[0]);
        
        expect(spy).toHaveBeenCalled();
    });
});