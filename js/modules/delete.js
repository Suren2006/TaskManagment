export function deleteFunction(id, allTask) {
    for (let i = 0;i<JSON.parse(localStorage.getItem("Tasks")).length;i++) {
        if(id.includes(JSON.parse(localStorage.getItem("Tasks"))[i]._id)) {
            document.getElementById(id).parentElement.remove()
            let task = JSON.parse(localStorage.getItem("Tasks"));
            task.splice(i,1);
            localStorage.setItem("Tasks", JSON.stringify(task));
            allTask.splice(i,1);
        }
    }
}

// առանձնացրու ստորիջում պահելն ու վերցնելը, դրանք ջնջելու ֆունկցիայի հետ բացարձակ կապ չունեն
// նաև առանձին ֆունկցիա որ id-ով զանգվածից վերցնի task-ը
