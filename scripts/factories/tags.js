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
            closeButton.setAttribute("class", "btn btn-primary text-white close-button");
            closeButton.dataset.closeTag = data;
        } else if (selectId === 'appareils') {
            tag.setAttribute("class", "btn btn-success");
            closeButton.setAttribute("class", "btn btn-success text-white close-button");
            closeButton.dataset.closeTag = data;
        } else {
            tag.setAttribute("class", "btn btn-danger");
            closeButton.setAttribute("class", "btn btn-danger text-white close-button");
            closeButton.dataset.closeTag = data;
        }
        tag.textContent = data;

        buttonGroup.appendChild(tag);
        buttonGroup.appendChild(closeButton);

        return (buttonGroup);
    }

    return { getTagDOM }
}export default tagsFactory;