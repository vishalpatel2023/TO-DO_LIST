
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("You must write something!");
        return;
    }
    else{
        // console.log("Working??");
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        console.log(li);
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false);

// to save task in local storage 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// clear all task in one click
function clearTasks(){
    listContainer.innerHTML = "";
    saveData();
}
showTask();