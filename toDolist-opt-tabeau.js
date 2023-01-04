const prompt = require("prompt");

let toDo = [];
let done = [];
let in_progress = [];

function addTask(task){
    toDo.push(task);
    console.log(`la tâche "$(task)" a été ajouté à la ToDo liste. `);
}

function moveTask(task, source, destination){
    let index_task = source.indexOf(task);
    if (index_task !== -1){
        destination.push(task);
        console.log(`la tâche "$(task)" a été deplacé avec succés du tableau "$(source)" au tableau "$(destination)".`);
    }
    else {
        console.log(`la tâche "$(task)" n'existe pas dans le tableau "$(source)".`);
    }
}

function removeTask(task, list){
    let index_task = source.indexOf(task);
    if (index_task !== -1){
        list.splice(index,1)
        console.log(`la tâche "$(task)" a été retiré de la liste "$(list)".`)
    }
    else {
        console.log(`la tâche "$(task)" n'existe pas dans la liste "$(list)".`);
    }
}

function print_tasks(list){
    console.log(`Les tâches de la liste "$(list)" sont : `)
    for (let i = 0; i < list.length ; i++){
        console.log(`"$(i+1)". "$(list[i])"`);
    }
}

