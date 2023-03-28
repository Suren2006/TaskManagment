import { Task } from "./task.js";

export function editFunction(id, allTask) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("Tasks")).length; i++) {
        if (id.includes(JSON.parse(localStorage.getItem("Tasks"))[i]._id)) {
            let parent, newName, newDesc, newStatus
            parent = document.getElementById(id).parentElement;
            newName = "Buy New Phone";
            newDesc = "White";
            newStatus = "In Progress"
            const task = new Task(id, newName, newDesc, newStatus)
            parent.children[1].innerHTML = task.name;
            parent.children[2].innerHTML = task.description;
            parent.children[3].innerHTML = task.status;
            allTask[i]._name = task.name;
            allTask[i]._desc = task.description;
            allTask[i]._status = task.status;
            localStorage.setItem("Tasks", JSON.stringify(allTask))
        }
    }
}