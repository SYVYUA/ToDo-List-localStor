let todoTaskArr = {
    forDate: "",
    forIndex: 1,
    forTextTask: "",
    forButRedact: "button"
};

//for date
let date = new Date();
let curr_date = date.getDate();
let curr_month = date.getMonth()+1;//+1 бо почина з 0 і випада місяць на 1 менше
let curr_year = date.getFullYear();
let curr_hour = date.getHours();
let curr_minutes = date.getMinutes();
let curr_sec = date.getSeconds();
let d = (curr_date + "." + curr_month + "." + curr_year+"<br>"+curr_hour+":"+curr_minutes+":"+curr_sec);
let divTime = document.createElement("div");
divTime.style.textAlign = "center";;
divTime.innerHTML = d;
//***************************/

let inputField = document.getElementById("inputField").nodeValue;
let divForTextTask = document.createElement("div");
divForTextTask.className = "divForTextTask";
function addNewElement(){
    todoTaskArr.forDate = d;
    
}