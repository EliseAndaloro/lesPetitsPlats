function appareilsFactory(data) {
    function getAppareilListDOM (){
        const a = document.createElement('a');
        a.textContent = data;
        a.setAttribute("class", "dropdown-item");

        return (a);
    }

    return { getAppareilListDOM }
}export default appareilsFactory;