function appareilsFactory(data, select) {
    console.log(select);
    function getAppareilListDOM (){
        const option = document.createElement('option');
        option.text = data;
        //option.setAttribute("class", "dropdown-item");
        select.add(option, null);
        return (select);
    }

    return { getAppareilListDOM }
}export default appareilsFactory;