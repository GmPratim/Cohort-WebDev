const todoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const todoItemsContainer = document.getElementById('ul-id')
const deleteAllBtn = document.getElementById('delete-all')

addBtn.addEventListener('click', () => {
    const value = todoInput.value
    if(!value) return
    const li = document.createElement ('li')
    const delBtn = document.createElement('button')
    delBtn.innerText = 'x'
    delBtn.addEventListener('click', function() {
        // li.style.textDecoration = 'line-through';
        li.remove()
    })

    li.innerText = value
    li.appendChild(delBtn)
    todoItemsContainer.appendChild(li)
    todoInput.value = ''   
});


todoInput.addEventListener('keydown', function (event) {
    if(event.key === 'Enter') {
const value = todoInput.value
    if(!value) return
    const li = document.createElement ('li')
    const delBtn = document.createElement('button')
    delBtn.innerText = 'x'
    delBtn.addEventListener('click', function() {
        // li.style.textDecoration = 'line-through';
        li.remove()
    })

    li.innerText = value
    li.appendChild(delBtn)
    todoItemsContainer.appendChild(li)
    todoInput.value = ''   

    }
})


deleteAllBtn.addEventListener('click', () => {
    todoItemsContainer.innerHTML =''
})



