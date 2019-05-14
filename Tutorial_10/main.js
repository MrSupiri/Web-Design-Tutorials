function getRadioValue(radioArray) {
    var i;
    for (i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}

function getSelectedValue(selectList) {
    return selectList[selectList.selectedIndex].value;
}

function getSelectedText(selectList) {
    return selectList.options[selectList.selectedIndex].text;
}

function CheckOptions(formRef) {

}