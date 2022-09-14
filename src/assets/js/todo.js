const todos = document.querySelector('#todoContainer');
const dones = document.querySelector('#doneContainer');
const nottodos = document.querySelector('#nottodoContainer');
let input=document.querySelector('#inputt');
const T=`<iconify-icon inline icon="ant-design:check-circle-twotone" style="color: green;" width="20" height="20"></iconify-icon>`
const F=`<iconify-icon inline icon="ant-design:close-circle-twotone" style="color: red;" width="20" height="20"></iconify-icon>`
let todo = [
    { id: 1, content: 'alo ali', state:F },
    { id: 2, content: 'alo reza', state: T },
    { id: 3, content: 'alo sara', state: F}
]
const render = db => {
    renderDone(db.filter(item => item.state==T))
    renderNotToDo(db.filter(item => item.state==F))
    todos.innerHTML = ''
    db.map(item => (
        todos.innerHTML += `
        <div class="card widthh">
        <div class="card-body  d-flex flex-column align-items-center">
            <h5 class="card-title">ID:${item.id}</h5>
            <p class="card-text ">CONTENT:${item.content}</p>
            <p class="card-text d-flex align-items-center justify-content-center" onclick="checkToDo(${item.id})">
            <span>STATE:</span>
            ${item.state}
            </p>
            <button  class="btn btn-danger" onclick="deleteToDo(${item.id})">Delete</button>
        </div>
        </div>
        `
    ))

}
const renderDone = db => {
    dones.innerHTML = ''
    db.map(item => (
        dones.innerHTML += `
        <div class="card widthh">
        <div class="card-body  d-flex flex-column align-items-center">
            <h5 class="card-title">ID:${item.id}</h5>
            <p class="card-text ">CONTENT:${item.content}</p>
            <p class="card-text d-flex align-items-center justify-content-center" onclick="checkToDo(${item.id})">
            <span>STATE:</span>
            ${item.state}
            </p>
            <button  class="btn btn-danger" onclick="deleteToDo(${item.id})">Delete</button>
        </div>
        </div>
        `
    ))

}
const renderNotToDo = db => {
    nottodos.innerHTML = ''
    db.map(item => (
        nottodos.innerHTML += `
        <div class="card widthh">
        <div class="card-body  d-flex flex-column align-items-center">
            <h5 class="card-title">ID:${item.id}</h5>
            <p class="card-text ">CONTENT:${item.content}</p>
            <p class="card-text d-flex align-items-center justify-content-center" onclick="checkToDo(${item.id})">
            <span>STATE:</span>
            ${item.state}
            </p>
            <button  class="btn btn-danger" onclick="deleteToDo(${item.id})">Delete</button>
        </div>
        </div>
        `
    ))

}
const checkToDo = id => {
    //console.log(id)
    todo = todo.map(item => item.id === id ? { ...item, state:(item.state==F)? T:F} :item)
    render(todo)
}
const deleteToDo = id => {
    todo = todo.filter(item => item.id !== id)
    render(todo)

}
const addToDo=()=>{
   // console.log('h1')
    todo=[...todo,{id:Math.floor(Math.random()*1000),content:input.value,state:F}]
    input.value=''
    render(todo)

}

render(todo);

