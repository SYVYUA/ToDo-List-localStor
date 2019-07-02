let list = document.querySelector('ul');
let todos;
function toLocal(){
	todos = list.innerHTML;
	localStorage.setItem("todos",todos);
}

list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
	   toLocal();
    } else if(ev.target.tagName === "SPAN") {
       let div = ev.target.parentNode;
       div.remove();
	   toLocal();
    }
}, false);

function newElement() {
  //for date
  let date = new Date();
  let curr_date = date.getDate();
  let curr_month = date.getMonth()+1;//+1 бо почина з 0 і випада місяць на 1 менше
  let curr_year = date.getFullYear();
  let curr_hour = date.getHours();
  let curr_minutes = date.getMinutes();
  let cur_second = date.getSeconds();
  var d = (curr_date + "." + curr_month + "." + curr_year+"<br>"+curr_hour+":"+curr_minutes+":"+cur_second+" ");
  let divTime = document.createElement("div");
  divTime.style.textAlign = "left";
  divTime.innerHTML = d;
//***************************/
    let li = document.createElement("li");
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Field must not to be empty!");
    } else{
       document.getElementById('list').appendChild(divTime);
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
	 toLocal();
}

if(localStorage.getItem("todos")){
	list.innerHTML = localStorage.getItem("todos");
}