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
divTime.style.textAlign = "center";
divTime.innerHTML = d;

//***************************/

var ul = document.getElementById("myUl");

function addNewElement(){
    let inputField = document.getElementById("inputField").value;
    let divForTextTask = document.createElement("li");
    divForTextTask.className = "todoItem";
    divForTextTask.innerHTML = inputField;
    
    if(inputField ==""){
        alert("You must write something")
    }else{
        localStorage.setItem("task", document.body.appendChild(divForTextTask));
        
    }
    document.getElementById("inputField").value = "";

};






function add() {
  var item = document.getElementById("newItem").value;
  var itemTxt = document.createTextNode(item);
  var li = document.createElement("li");
  var btn = document.createElement("button");
  var btnx = document.createTextNode("x");
  btn.setAttribute("onclick", "remove()");
  btn.appendChild(btnx);
  li.appendChild(itemTxt);
  li.appendChild(btn);
  ul.appendChild(li);
  localStorage["list"] = ul.innerHTML
}

function remove() {
  var task = this.event.currentTarget.parentNode;
  ul.removeChild(task);
  localStorage["list"] = ul.innerHTML // updating localstorage
}

if (localStorage["list"]) {
  ul.innerHTML = localStorage["list"];
}