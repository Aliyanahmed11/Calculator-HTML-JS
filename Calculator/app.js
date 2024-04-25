function addnum(num){
    var inputField = document.getElementById("inputField")
    inputField.value += num; 
}
function allClear(){
    var inputField = document.getElementById("inputField")
    inputField.value = ""; 
}
function clearInput(){
    var inputField = document.getElementById("inputField");
    inputField.value = inputField.value.slice(0, -1); 
}
function result(){
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value) 

}