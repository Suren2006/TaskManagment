import { Task } from "./modules/task.js";
import { addTasks } from "./modules/create.js";
import { idGenerate } from "./modules/generate.js";
import { editFunction } from "./modules/edit.js";
import { deleteFunction } from "./modules/delete.js";

let allTask = [];

if (localStorage.getItem("Tasks") !== null) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("Tasks")).length; i++) {
        allTask.push(JSON.parse(localStorage.getItem("Tasks"))[i]);
    }
}

function createList(name, desc, status) {
    let t = new Task(idGenerate(), name, desc, status)
    allTask.push(t)
    localStorage.setItem("Tasks", JSON.stringify(allTask));
    addTasks()
    addDeleteFunction();
}


let createbutton = document.createElement("button");
createbutton.innerHTML = "Create";
createbutton.setAttribute("id", "createBtn")
document.body.appendChild(createbutton);
let removebutton = document.createElement("button");
removebutton.innerHTML = "Remove all";
removebutton.setAttribute("id", "removeBtn")
document.body.appendChild(removebutton);
document.getElementById("createBtn").addEventListener("click", function () { createList("Buy Something", "Black", "Done") });
document.getElementById("removeBtn").addEventListener("click", function () {
    localStorage.clear()
    if (document.getElementsByTagName("ol")[0] !== undefined) {
        document.getElementsByTagName("ol")[0].remove();
    }
    allTask = [];
})

addTasks()
addDeleteFunction();
function addDeleteFunction() {
    if (document.getElementsByTagName("ol")[0] != undefined) {
        for (let j = 0; j < (document.getElementsByTagName("ol")[0].childElementCount) * 2; j++) {
            let btn = document.getElementsByTagName("button")[j + 2];
            if (j % 2 == 0) {
                btn.addEventListener("click", function () { deleteFunction(btn.getAttribute("id"), allTask); });
            } else {
                btn.addEventListener("click", function () { editFunction(btn.getAttribute("id"), allTask); });
            }
        }
    }
}

//շիլա է, առանձնացրու բիզնես լոգիկան, ներկայացումից

// Ynker Naira ays masy chem popoxel ete karelia bacatreq biznes logikan vorn e

