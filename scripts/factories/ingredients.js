function ingredientsFactory(data) {
    function getIngredientListDOM (){
        const a = document.createElement('a');
        a.textContent = data;
        a.setAttribute("class", "dropdown-item");

        return (a);
    }

    return { getIngredientListDOM }
}export default ingredientsFactory;