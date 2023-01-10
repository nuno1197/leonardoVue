//função para mudar a skin
function changeSkin() {
    //obter o selectbox
    var selectBox = document.getElementById("selectBox");
    //obter valor selecionado
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    alert(selectedValue);
}

export {changeSkin}