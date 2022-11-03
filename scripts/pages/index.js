import RecipesService from '../services/recipes.service.js';
import Search from '../services/search.service.js';
import ingredientsFactory from '../factories/ingredients.js';
import appareilsFactory from '../factories/appareils.js';
import ustensilsFactory from '../factories/ustensils.js';
import recipesFactory from '../factories/recipes.js';
import tagsFactory from "../factories/tags.js";

const ingredientsSelect = document.getElementById('ingredients')
const appareilsSelect = document.getElementById('appareils')
const ustensilsSelect = document.getElementById('ustensils')
const searchBar = document.getElementById('searchBar')

ingredientsSelect.addEventListener('change', function (){
    var option = ingredientsSelect.value;
    displayTags(option, 'ingredients');
})

appareilsSelect.addEventListener('change', function (){
    var option = appareilsSelect.value;
    displayTags(option, 'appareils');
})

ustensilsSelect.addEventListener('change', function (){
    var option = ustensilsSelect.value;
    displayTags(option, 'ustensils');
})

function displayListOfIngredients() {
    const ingredientsSection = document.getElementById("ingredients");
    const ingredients = RecipesService.fetchAllIngredientsOfAllRecipes();

    ingredients.forEach((ingredient) => {
        const ingredientModel = ingredientsFactory(ingredient, ingredientsSection);
        ingredientModel.getIngredientListDOM();
    })
}

function displayListOfAppareils() {
    const appareilsSection = document.getElementById("appareils");
    const appareils = RecipesService.fetchAllAppareilsOfAllRecipes();

    appareils.forEach((appareil) => {
        const appareilModel = appareilsFactory(appareil, appareilsSection);
        appareilModel.getAppareilListDOM();
        //appareilsSection.appendChild(appareilDOM);*/
        //appareilsFactory(appareil, appareilsSection);
    })
}

function displayListOfUstensils() {
    const ustensilsSection = document.getElementById("ustensils");
    const ustensils = RecipesService.fetchAllUstensilsOfAllRecipes();

    ustensils.forEach((ustensil) => {
        const ustensilModel = ustensilsFactory(ustensil, ustensilsSection);
        ustensilModel.getUstensilListDOM();
        //ustensilsSection.appendChild(ustensilDOM);
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

function displayTags(data, selectId) {
    const tagsDiv = document.getElementById('tags');
    const tagModel = tagsFactory(data, selectId);
    const tagDOM = tagModel.getTagDOM();
    tagsDiv.appendChild(tagDOM);
}

function hideRecipes(){
    var recipesSection = document.querySelector('.recipes_section');
    var recipesCards = document.querySelectorAll('.card');
    //console.log(recipesCards);return false;
    recipesCards.forEach((recipeCard) => {
        recipesSection.removeChild(recipeCard);
    });
    //recipesSection.removeChild(recipesCards);
}

function init(){
    // Récupère les datas des recettes
    const recipes = RecipesService.fetchAllRecipes();
    displayRecipes(recipes);
}

searchBar.addEventListener('keyup',  function () {
    var searchRecipes = Search.searchFromSearchBar(searchBar.value);
    hideRecipes();
    displayRecipes(searchRecipes);
});

init();
displayListOfIngredients();
displayListOfAppareils();
displayListOfUstensils();