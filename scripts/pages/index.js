import RecipesService from '../services/recipes.service.js';
import ingredientsFactory from '../factories/ingredients.js';
import appareilsFactory from '../factories/appareils.js';
import ustensilsFactory from '../factories/ustensils.js';
import recipesFactory from '../factories/recipes.js';

function displayListOfIngredients() {
    const ingredientsSection = document.getElementById("ingredients");
    const ingredients = RecipesService.fetchAllIngredientsOfAllRecipes();

    ingredients.forEach((ingredient) => {
        const ingredientModel = ingredientsFactory(ingredient);
        const ingredientDOM = ingredientModel.getIngredientListDOM();
        ingredientsSection.appendChild(ingredientDOM);
    })
}

function displayListOfAppareils() {
    const appareilsSection = document.getElementById("appareils");
    const appareils = RecipesService.fetchAllAppareilsOfAllRecipes();

    appareils.forEach((appareil) => {
        const appareilModel = appareilsFactory(appareil);
        const appareilDOM = appareilModel.getAppareilListDOM();
        appareilsSection.appendChild(appareilDOM);
    })
}

function displayListOfUstensils() {
    const ustensilsSection = document.getElementById("ustensils");
    const ustensils = RecipesService.fetchAllUstensilsOfAllRecipes();

    ustensils.forEach((ustensil) => {
        const ustensilModel = ustensilsFactory(ustensil);
        const ustensilDOM = ustensilModel.getUstensilListDOM();
        ustensilsSection.appendChild(ustensilDOM);
    })
}

function displayRecipes(recipes) {
    const recipesSection = document.querySelector('.recipes_section');

    recipes.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesSection.appendChild(recipeCardDOM);
    })
}

function init(){
    // Récupère les datas des recettes
    const recipes = RecipesService.fetchAllRecipes();
    displayRecipes(recipes);
}

init();
displayListOfIngredients();
displayListOfAppareils();
displayListOfUstensils();