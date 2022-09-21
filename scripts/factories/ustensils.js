function ustensilsFactory(data) {
    function getUstensilListDOM (){
        const a = document.createElement('a');
        a.textContent = data;
        a.setAttribute("class", "dropdown-item");

        return (a);
    }

    return { getUstensilListDOM }
}export default ustensilsFactory;