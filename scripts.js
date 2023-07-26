const tasks = document.querySelectorAll(".tasks li");
let draggedTask = null;

for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    task.addEventListener("dragstart", function (event) {  // Essa função é responsável por ao evento de clique e arraste em uma tarefa, ela mude de opacidade
        draggedTask = task;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('text/html', task.innerHTML);
        task.classList.add("dragging");
    })
}