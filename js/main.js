// find elements on the page

const form = document.querySelector('#form')
const taskInput = document.querySelector('#taskInput')
const taskList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

//adding task
form.addEventListener('submit', addTask)

//Deleting task
taskList.addEventListener('click', deleteTask)

function deleteTask(event) {
    console.log(event.target)
}

function addTask(event) {
    //отменяем отправку формы
    event.preventDefault()

    //Достаем текст задачи из поля ввода
    let taskText = taskInput.value

    //формируем разметку для новой задачи
    const taskHtml = `
        <li class="list-group-item d-flex justify-content-between task-item">
            <span class="task-title">${taskText}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                    <img src="./img/tick.svg" alt="Done" width="18" height="18">
                </button>
                <button type="button" data-action="delete" class="btn-action">
                    <img src="./img/cross.svg" alt="Done" width="18" height="18">
                </button>
            </div>
        </li>
    `
    //добавляем ее на страницу
    taskList.insertAdjacentHTML('beforeend', taskHtml)

    // Очищаем поле ввода и возвращаем на него фокус
    taskInput.value = ''
    taskInput.focus()

    //Скрываем первый блок, если задачи есть
    if (taskList.children.length > 1) {
        emptyList.classList.add('none')
    }

}