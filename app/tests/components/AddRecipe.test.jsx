var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddRecipe = require('AddRecipe');
var RecipeForm = require('RecipeForm');

describe('AddRecipe', () => {
    it('should exist', () => {
        expect(AddRecipe).toExist();
    });
    
    it('should toggle showForm value when handleToggle called', () => {
        var addRecipe = TestUtils.renderIntoDocument(<AddRecipe/>);
        addRecipe.setState({showForm: false});
        
        addRecipe.handleToggle();
        
        expect(addRecipe.state.showForm).toBe(true);
    });
    
    it('should show RecipeForm when showForm value is true', () => {
        var addRecipe = TestUtils.renderIntoDocument(<AddRecipe/>);
        addRecipe.setState({showForm: true});
        
        var formComponent = TestUtils.scryRenderedComponentsWithType(addRecipe, RecipeForm);
        
        expect(formComponent.length).toBe(1);
    });
    
    it('should not show RecipeForm when showForm value is false', () => {
        var addRecipe = TestUtils.renderIntoDocument(<AddRecipe/>);
        addRecipe.setState({showForm: false});
        
        var formComponent = TestUtils.scryRenderedComponentsWithType(addRecipe, RecipeForm);
        
        expect(formComponent.length).toBe(0);
    });
});