const addBtn = document.getElementById('add-btn')
const todoinput = document.getElementById('todo-input')
const todoItemsContainer = document.getElementById('todo-items-container')


addBtn.addEventListener('click', () => {
    const value = todoinput.value
    console.log('User entered', value);
    
    const li = document.createElement('li') 
    li.innerText = value

    const delBtn = document.createElement('button')
    delBtn.innerText = 'X'
    delBtn.addEventListener('click', function() {
        li.remove()
    })

    li.appendChild(delBtn)

    todoItemsContainer.appendChild(li)
    todoinput.value = ''


})