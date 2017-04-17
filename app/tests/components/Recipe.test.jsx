var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Recipe = require('Recipe');

describe('Recipe', () => {
    it('should exist', () => {
        expect(Recipe).toExist();
    });
    
    it('should call onToggle prop with id on click', () => {
        var recipes = {
            id: 11, 
            name: 'Something', 
            ingredients: [],
            onShow: false
        };
        
        var spy = expect.createSpy();
        var recipe = TestUtils.renderIntoDocument(<Recipe {...recipes} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(recipe));
        
        TestUtils.Simulate.click($el[0]);
        
        expect(spy).toHaveBeenCalledWith(11);
    });
});