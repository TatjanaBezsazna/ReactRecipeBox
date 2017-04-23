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
    
    it('should toggle checked value when handleCheck called', () => {
        var recipeData = {
            id: 11, 
            name: 'Something', 
            ingredients: [],
            checked: false
        };
        
        var recipeApp = TestUtils.renderIntoDocument(<RecipeApp/>);
        recipeApp.setState({recipes: [recipeData]});
        
        recipeApp.handleCheck(11);
        
        expect(recipeApp.state.recipes[0].checked).toBe(true);
    });
    
    it('should add recipe to the recipes state on handleRecipeAdd', () => {
        var recipeName = 'test text';
        var recipeApp = TestUtils.renderIntoDocument(<RecipeApp/>);
        
        recipeApp.setState({recipes: []});
        
        recipeApp.handleRecipeAdd(recipeName, '', []);
        
        expect(recipeApp.state.recipes[0].name).toBe(recipeName);
        expect(recipeApp.state.recipes[0].id).toBeA('string');
    });
    
    it('should edit recipe to the recipes state on handleRecipeEdit', () => {
        var recipes = [
            {
                id: 1, 
                name: 'Something', 
                ingredients: [],
                checked: false
            }, {
                id: 2, 
                name: 'Something', 
                ingredients: [],
                checked: true
            }, 
        ];
        
        var recipeApp = TestUtils.renderIntoDocument(<RecipeApp/>);
        
        recipeApp.setState({recipes});
        
        recipeApp.handleRecipeEdit({
                id: 2, 
                name: 'Something new', 
                ingredients: [],
                checked: true
            });
        
        expect(recipeApp.state.recipes[1].name).toBe('Something new');
    });
    
    it('should delete recipe handleRecipeDelete', () => {
        var recipes = [
            {
                id: 1, 
                name: 'Something', 
                ingredients: [],
                checked: false
            }, {
                id: 2, 
                name: 'Something', 
                ingredients: [],
                checked: true
            }, 
        ];
        var recipeApp = TestUtils.renderIntoDocument(<RecipeApp/>);
        
        recipeApp.setState({recipes});
        
        recipeApp.handleRecipeDelete();

        expect(recipeApp.state.recipes.length).toBe(1);
    });
});