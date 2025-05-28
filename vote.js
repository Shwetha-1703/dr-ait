function vote(){
var Name = document.getElementById("Name").value;
var Age = document.getElementById("Age").value; 
var res = document.getElementById("res");
if(age>18){
    res.innerHTML = "you are eligible";
}else{
    res.innerHTML = "you are still child 😁😁";
}
} 