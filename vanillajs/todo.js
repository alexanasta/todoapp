const btnSave = document.getElementById('save')
const taskText = document.getElementById('taskname')
const itemsList = document.getElementById('items')


const list = []

const ItemCard = (taskObject) => {
    return (
        `<div class='item ${taskObject.isDone ? 'done' : 'notdone'}'>
            <div class="title">${taskObject.title}</div>
            <div class="btn btn-eye" onClick=deleteTask(${taskObject.id})><i class="fa-solid fa-eye"></i></div>
            <div class="btn btn-trash"><i class="fa-solid fa-trash"></i></div>
            </div>
        </div>
        `
    )

}

// save button
btnSave.onclick = () => {

    const taskObject = {
        id: Date.now(),
        title: taskText.value,
        isDone: 0
    }


    // push to list
    list.push(taskObject)
    loadTasks()
}



const loadTasks = () => {
    itemsList.innerHTML = ``
    list.map(item => {
        itemsList.innerHTML += ItemCard(item)
    })


}

// delete task from array
function deleteTask(id) {

    const i = list.findIndex((obj) => obj.id === id);
    if (i > -1) {
        list.splice(i, 1);
    }
    // refresh list items
    loadTasks()

}
