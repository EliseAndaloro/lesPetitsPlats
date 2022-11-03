import recipes from '../../data/recipes.js';
import RecipesService from './recipes.service.js';

class Search {
    
    searchFromSearchBar(input, recipes) {

        var filteredRecipes = [];

        for(let i = 0; i < recipes.length; i++){
            if(this.strIncludes(recipes[i].appliance.toLowerCase(), input.toLowerCase().trim()) ||
               this.strIncludes(recipes[i].description.toLowerCase(), input.toLowerCase().trim()) ||
                recipes[i].ingredients.some((ingredient) => this.strIncludes(ingredient.ingredient.toLowerCase(), input.toLowerCase().trim()))
            ){
                filteredRecipes.push(recipes[i]);
            }
            
        }
        return filteredRecipes;
    };

    strIncludes(str1, str2) {
        const myRegex = new RegExp(`${str2}`, "g");

        if (myRegex.test(str1)) {
            return true;
        } else {
            return false;
        }
    };
}
export default new Search();