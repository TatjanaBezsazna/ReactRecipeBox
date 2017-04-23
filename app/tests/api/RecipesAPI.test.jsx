var expect = require('expect');

var RecipesAPI = require('RecipesAPI');

describe('RecipesAPI', () => {
    it('should exist', () => {
        expect(RecipesAPI).toExist();
    });
    
    describe('setsetRecipes', () => {
        beforeEach(()=> {
            localStorage.removeItem('recipeBox');
        });
        
        it('should set valid recipes array', () => {
           var recipes = [{
               id:23,
               name: 'test all filed'
            }];
            
            RecipesAPI.setRecipes(recipes);
            
            var actualRecipes = JSON.parse(localStorage.getItem('recipeBox'));
            
            expect(actualRecipes).toEqual(recipes);  
        });
        
        it('should not set invalid recipes array', () => {
           var badRecipe = {a: 'b'};
            
            RecipesAPI.setRecipes(badRecipe);
            
            expect(localStorage.getItem('recipeBox')).toBe(null);
        });
    });
    
    describe('getRecipes', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualRecipes = RecipesAPI.getRecipes();
            
            expect(actualRecipes).toEqual([]);
        });
        
        it('should return recipes if valid array in localStorage', () => {
            var recipes = [{
               id:23,
               name: 'test all filed'
           }];
            
            localStorage.setItem('recipeBox', JSON.stringify(recipes));
            
            var actualRecipes = RecipesAPI.getRecipes();
            
            expect(actualRecipes).toEqual(recipes);
        });
    });
    
    describe('filterRecipes', () => {
       var recipes = [{
           id: 1,
           name: 'Some text here'
       }, {
           id: 2,
           name: 'Other text here'
       }, {
           id: 3,
           name: 'Another text here'
       }];

        it('should filter recipes by search text', () => {
           var filteredRecipes = RecipesAPI.filterRecipes(recipes, 'some'); 
            expect(filteredRecipes.length).toBe(1);         
        });
        
        it('should return all recipes if search text is empty', () => {
           var filteredRecipes = RecipesAPI.filterRecipes(recipes, ''); 
            expect(filteredRecipes.length).toBe(3);          
        });
    });
});
