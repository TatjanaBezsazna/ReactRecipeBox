var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var RecipeList = require('RecipeList');
var Recipe = require('Recipe');

describe('RecipeList', () => {
    it('should exist', () => {
        expect(RecipeList).toExist();
    });
    
    it('should render one Recipe component for each recipes item', () => {
        var recipes = [
            {
                id: 1, 
                name: 'test1', 
                ingredients: [],
                onShow: true
            }, {
                id: 2, 
                name: 'test2', 
                ingredients: [],
                onShow: false
            }
        ];
        
        var recipeList = TestUtils.renderIntoDocument(<RecipeList recipes={recipes}/>);
        var recipesComponents = TestUtils.scryRenderedComponentsWithType(recipeList, Recipe);
        
        expect(recipesComponents.length).toBe(recipes.length);
    });
});