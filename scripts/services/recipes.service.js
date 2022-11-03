import recipes from '../../data/recipes.js';
class RecipesService {
    ingredientsOfAllRecipes = [];
    appliancesOfAllRecipes = [];
    ustensilsOfAllRecipes = [];

    fetchAllRecipes() {
        return recipes;
    };

    fetchAllIngredientsOfRecipes(recipes) {
        recipes.forEach((recipe) => {
            recipe.ingredients.forEach((ingredient) => {
                this.ingredientsOfAllRecipes.push(ingredient.ingredient);
            })
        })
        return this.ingredientsOfAllRecipes.filter((ele, pos) => this.ingredientsOfAllRecipes.indexOf(ele) === pos);
    }

    fetchAllAppareilsOfRecipes(recipes) {
        recipes.forEach((recipe) => {
            this.appliancesOfAllRecipes.push(recipe.appliance);
        })
        return this.appliancesOfAllRecipes.filter((ele, pos) => this.appliancesOfAllRecipes.indexOf(ele) === pos);
    }

    fetchAllUstensilsOfRecipes(recipes) {
        recipes.forEach((recipe) => {
            recipe.ustensils.forEach((ustensil) => {
                this.ustensilsOfAllRecipes.push(ustensil);
            })
        })
        return this.ustensilsOfAllRecipes.filter((ele, pos) => this.ustensilsOfAllRecipes.indexOf(ele) === pos);
    }
}
export default new RecipesService();