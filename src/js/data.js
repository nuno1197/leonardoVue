//função para mudar a skin
function changeSkin() {
    //obter o selectbox
    var selectBox = document.getElementById("selectBox");
    //obter valor selecionado
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var topbarelements= document.getElementsByClassName("v-toolbar")

    //alert(topbarelements.length);

    if (selectedValue==1)
    {
        for (var i = 0; i < topbarelements.length; i++) {
            topbarelements[i].style.backgroundColor="#000000";
            selectBox.style.backgroundColor="#000000";
        }

    }
}

export {changeSkin}