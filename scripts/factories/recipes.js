function recipesFactory(data) {
    const { name, ingredients, time, description } = data;
    function getRecipeCardDOM (){
        const divCard = document.createElement('div');
        divCard.setAttribute("class", "card");

        const imgCard = document.createElement('img');
        imgCard.setAttribute('class', 'card-img-top');
        imgCard.setAttribute('src', 'https://fakeimg.pl/250x100/');

        const divCardBody = document.createElement('div');
        divCardBody.setAttribute('class', 'card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.textContent = name + ' ' + time;

        const cardText = document.createElement('div');
        cardText.setAttribute('class', 'card-text');
        cardText.appendChild(displayIngredients(ingredients));

        const recipeDescription = document.createElement('p');
        recipeDescription.setAttribute('class', 'description')
        recipeDescription.textContent = description;

        cardText.appendChild(recipeDescription);

        divCard.appendChild(imgCard);
        divCardBody.appendChild(cardTitle);
        divCardBody.appendChild(cardText);
        divCard.appendChild(divCardBody);

        return divCard;
    }

    function displayIngredients (ingredients) {
        const textIngredientCard = document.createElement('div');
        ingredients.forEach((ingredient) => {
            const pIngredientCard = document.createElement('p');
            pIngredientCard.setAttribute('class', 'font-weight-bold')
            pIngredientCard.textContent = ingredient.ingredient + ': ';

            const spanQuantityCard = document.createElement('span');
            spanQuantityCard.textContent = ingredient.quantity + ' ' + displayUnit(ingredient.unit) + ' ';
            spanQuantityCard.setAttribute('class', 'font-weight-normal');

            textIngredientCard.appendChild(pIngredientCard);
            pIngredientCard.appendChild(spanQuantityCard);
        });
        return textIngredientCard;
    }

    function displayUnit(unit) {
        if (unit === 'ml' || unit === 'cl') {
            return unit;
        } else if (unit === 'grammes') {
            return 'g';
        } else {
            return '';
        }
    }

    return { getRecipeCardDOM }
}export default recipesFactory;