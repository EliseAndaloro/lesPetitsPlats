function tagsFactory(data, selectId) {
    function getTagDOM (){
        const buttonGroup = document.createElement("div");
        buttonGroup.setAttribute("class", "btn-group")

        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.addEventListener('click', function (){
            buttonGroup.style.display = "none";
        })

        const tag = document.createElement('button');
        if (selectId === 'ingredients') {
            tag.setAttribute("class", "btn btn-primary");
            closeButton.setAttribute("class", "btn btn-primary text-white");
        } else if (selectId === 'appareils') {
            tag.setAttribute("class", "btn btn-success");
            closeButton.setAttribute("class", "btn btn-success text-white");
        } else {
            tag.setAttribute("class", "btn btn-danger");
            closeButton.setAttribute("class", "btn btn-danger text-white");
        }
        tag.textContent = data;

        buttonGroup.appendChild(tag);
        buttonGroup.appendChild(closeButton);

        return (buttonGroup);
    }

    return { getTagDOM }
}export default tagsFactory;