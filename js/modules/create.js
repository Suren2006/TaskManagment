import { Task } from "./task.js"

export function addTasks() {
    if (localStorage.getItem("Tasks") != null) {
        let tasks = JSON.parse(localStorage.getItem("Tasks"));
        if (document.getElementsByTagName("ol")[0] !== undefined) {
            document.getElementsByTagName("ol")[0].remove()
        }
        document.body.append(document.createElement('ol'))
        let ol = document.getElementsByTagName("ol")[0];
        for (let i = 0; i < tasks.length; i++) {
            let createli = document.createElement("li");
            ol.append(createli);
            let li = document.getElementsByTagName("li")[i];
            for (let j = 0; j < 5; j++) {
                let div = document.createElement("div");
                const task = new Task(tasks[i]._id, tasks[i]._name, tasks[i]._desc, tasks[i]._status)
                let taskItem = (j == 0) ? task._id :
                    (j == 1) ? task.name :
                        (j == 2) ? task.description :
                            (j == 3) ? task.status :
                                task._date;
                div.appendChild(document.createTextNode(JSON.stringify(taskItem).slice(1, length - 1)));
                li.appendChild(div);
            }
            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("id", "delete" + (tasks[i]._id));
            deleteBtn.setAttribute("class", "deleteBtn");
            deleteBtn.innerHTML = "Delete";
            li.appendChild(deleteBtn);
            let editBtn = document.createElement("button");
            editBtn.setAttribute("id", "edit" + tasks[i]._id);
            editBtn.setAttribute("class", "editBtn");
            editBtn.innerHTML = "Edit";
            li.appendChild(editBtn);
        }
    }
}
