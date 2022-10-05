function ingredientsFactory(data, select) {
    function getIngredientListDOM (){
        const option = document.createElement('option');
        option.text = data;
        //a.setAttribute("class", "dropdown-item text-white");

        select.add(option, null);
        return (select);
    }

    return { getIngredientListDOM }
}export default ingredientsFactory;