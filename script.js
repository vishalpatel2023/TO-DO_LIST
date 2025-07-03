
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
        let date = new Date().toLocaleString();
        // li.innerHTML = inputBox.value;
        li.innerHTML = `${inputBox.value} <small style="color: gray;">(${date})</small>`;
        // console.log(li);
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        updateStats();
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
    updateStats();
},false);

// to save task in local storage 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    updateStats();
}
// clear all task in one click
function clearTasks(){
    listContainer.innerHTML = "";
    saveData();
    updateStats();
}

function updateStats() {
    const total = listContainer.querySelectorAll("li").length;
    const completed = listContainer.querySelectorAll("li.checked").length;
    const pending = total - completed;

    document.getElementById("task-stats").innerText =
        `📊 Total: ${total} ✅ Completed: ${completed} 🕒 Pending: ${pending}`;
}

showTask();

const backgrounds = [
    "linear-gradient(135deg, #153677, #4e085f)",
    "linear-gradient(135deg, #ff9966, #ff5e62)",
    "linear-gradient(135deg, #00c9ff, #92fe9d)",
    "linear-gradient(135deg, #f857a6, #ff5858)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)"
];

let bgIndex = 0;

document.getElementById("bg-toggle").addEventListener("click", () => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    document.querySelector(".container").style.background = backgrounds[bgIndex];
    localStorage.setItem("bgIndex", bgIndex); // Save user's choice
});
