var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var RecipeApp = require('RecipeApp');

describe('RecipeApp', () => {
    it('should exist', () => {
        expect(RecipeApp).toExist();
    });
    
    it('should toggle onShow value when handleToggle called', () => {
        var recipeData = {
            id: 11, 
            name: 'Something', 
            ingredients: [],
            onShow: false
        };
        
        var recipeApp = TestUtils.renderIntoDocument(<RecipeApp/>);
        recipeApp.setState({recipes: [recipeData]});
        
        recipeApp.handleToggle(11);
        
        expect(recipeApp.state.recipes[0].onShow).toBe(true);
    });
});