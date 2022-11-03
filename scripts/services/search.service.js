import recipes from '../../data/recipes.js';
import RecipesService from './recipes.service.js';

class Search {
    
    searchFromSearchBar(input) {
        //console.log("test");
        //var recipes = RecipesService.fetchAllRecipes();

        //var searchRecipes = [];
        //console.log(recipes)
        for(let i = 0; recipes.length; i++){
            var appliance = recipes[i].appliance;
            if (appliance.indexOf(input) === -1){
                console.log("recipes supp");
                recipes.splice(i, 1);
            }
            console.log(recipes);
            
            /*if(recipes.length === 0 ){
                recipes = RecipesService.fetchAllAppareilsOfAllRecipes();
            }*/
            
        }
        return recipes;
        console.log(recipes);
    }
}
export default new Search();