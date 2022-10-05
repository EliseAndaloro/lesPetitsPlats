function ustensilsFactory(data, select) {
    function getUstensilListDOM (){
        const option = document.createElement('option');
        option.text = data;
        //a.setAttribute("class", "dropdown-item");

        select.add(option, null);
        return (select);
    }

    return { getUstensilListDOM }
}export default ustensilsFactory;