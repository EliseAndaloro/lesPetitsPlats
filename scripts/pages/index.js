import RecipesService from '../services/recipes.service.js';
import Search from '../services/search.service.js';
import ingredientsFactory from '../factories/ingredients.js';
import appareilsFactory from '../factories/appareils.js';
import ustensilsFactory from '../factories/ustensils.js';
import recipesFactory from '../factories/recipes.js';
import tagsFactory from "../factories/tags.js";
import recipes from "../../data/recipes.js";

const ingredientsSelect = document.getElementById('ingredients')
const appareilsSelect = document.getElementById('appareils')
const ustensilsSelect = document.getElementById('ustensils')
const searchBar = document.getElementById('searchBar')
let filteredRecipes = [...recipes];

ingredientsSelect.addEventListener('change', function (){
    var option = ingredientsSelect.value;
    displayTags(option, 'ingredients');
    console.log(filteredRecipes);
    filteredRecipes = Search.searchFromSearchBar(option, filteredRecipes);
    hideRecipes();
    displayRecipes(filteredRecipes);
    var closeTag = document.querySelector("[data-close-tag='"+ option +"']");
    closeTag.addEventListener('click', function (e) {
        var index = filteredRecipes.indexOf(option);
        if(index !== -1) {
            filteredRecipes = filteredRecipes.splice(index, 1);
            hideRecipes();
            displayRecipes(filteredRecipes);
        }
    })
})

appareilsSelect.addEventListener('change', function (){
    var option = appareilsSelect.value;
    displayTags(option, 'appareils');
    filteredRecipes = Search.searchFromSearchBar(option, filteredRecipes);
    hideRecipes();
    displayRecipes(filteredRecipes);
})

ustensilsSelect.addEventListener('change', function (){
    var option = ustensilsSelect.value;
    displayTags(option, 'ustensils');
    filteredRecipes = Search.searchFromSearchBar(option, filteredRecipes);
    hideRecipes();
    displayRecipes(filteredRecipes);
})

function displayListOfIngredients(recipes) {
    const ingredientsSection = document.getElementById("ingredients");
    const ingredients = RecipesService.fetchAllIngredientsOfRecipes(recipes);

    ingredients.forEach((ingredient) => {
        const ingredientModel = ingredientsFactory(ingredient, ingredientsSection);
        ingredientModel.getIngredientListDOM();
    })
}

function displayListOfAppareils(recipes) {
    const appareilsSection = document.getElementById("appareils");
    const appareils = RecipesService.fetchAllAppareilsOfRecipes(recipes);

    appareils.forEach((appareil) => {
        const appareilModel = appareilsFactory(appareil, appareilsSection);
        appareilModel.getAppareilListDOM();
        //appareilsSection.appendChild(appareilDOM);*/
        //appareilsFactory(appareil, appareilsSection);
    })
}

function displayListOfUstensils(recipes) {
    const ustensilsSection = document.getElementById("ustensils");
    const ustensils = RecipesService.fetchAllUstensilsOfRecipes(recipes);

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
    recipesCards.forEach((recipeCard) => {
        recipesSection.removeChild(recipeCard);
    });
}

function init(){
    displayRecipes(recipes);
    displayListOfIngredients(recipes);
    displayListOfAppareils(recipes);
    displayListOfUstensils(recipes);
}

function updateSelects(filteredRecipes) {
    //displayListOfIngredients(filteredRecipes);
    //displayListOfAppareils(filteredRecipes);
    //displayListOfUstensils(filteredRecipes);
}

searchBar.addEventListener('input',  function () {
    if (searchBar.value.trim().length >=0 && searchBar.value.trim().length <=2){
        filteredRecipes = [...recipes];
    }else {
        filteredRecipes = Search.searchFromSearchBar(searchBar.value, recipes);
    }
    hideRecipes();
    //updateSelects(filteredRecipes);
    displayRecipes(filteredRecipes);
});

init();