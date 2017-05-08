var $ = require('jquery');

module.exports = {
    setRecipes: function(recipes) {
        if($.isArray(recipes)) {
            localStorage.setItem('recipeBox', JSON.stringify(recipes));
            return recipes;
        }
    }, 
    
    getRecipes: function() {
        var stringRecipes = localStorage.getItem('recipeBox');
        var recipes = [];
        
        try{
           recipes = JSON.parse(stringRecipes); 
        } catch (e) {
            
        }
        
        return $.isArray(recipes) ? recipes : [];
    }, 
    
    filterRecipes: function(recipes, id) {
        var filteredRecipes = recipes;
        
        //Filter by searchText
        filteredRecipes = filteredRecipes.filter((recipes) => {
            
            var searchId = recipes.id;
            
            return searchId == id ;
        });
        
        return filteredRecipes[0];
    }
};
    