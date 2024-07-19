// const list=[]
// let array= " ";
// function todoapp(){
//   const y =document.querySelector('.val'); 
//   const x = y.value;
//   const a =document.querySelector('.dat')
//   const b = a.value;
//   // list.push(x);
//   // console.log(list);
//   y.value='';
//   a.value="";
  
//   // for(count=0;count<list.length;count++){
//   //   let p=list[count];
//     let m = `<p>${x}      ${b}<button onclick="del()">Delete</button></p>`;
//     document.querySelector('.hi').innerHTML +=m;

//   }
//   function del(){
//     document.querySelector('.hi').innerHTML="";
    
    
//   }
const todoList = [{
  name: 'Talk To Your Husband',
  dueDate: '2026-12-22'
}, {
  name: 'Prepare For Your Exam',
  dueDate: '2023-12-14'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
    
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value='';
  

  renderTodoList();
}
  
