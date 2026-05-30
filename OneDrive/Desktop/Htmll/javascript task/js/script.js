
const tasks = JSON.parse(window.localStorage.getItem("Tasks") ) || [] ;


let table = document.querySelector("tbody") ;
let complete = document.querySelector(".complete-task") ;
let wait = document.querySelector(".wait-task")   ;
let all = document.querySelector(".all") ;
let addTAsk = document.querySelector(".add-task") ;
let idTaskName =document.querySelector("#task-name") ;
let idTaskDesc =document.querySelector("#task-dsc") ; 
 let idTaskStatus1 =document.querySelector("#completing") ; 
 let idTaskStatus2 =document.querySelector("#waitting") ; 
 let divTaskStatus =document.querySelector("#task-status") ; 

function display (){
    table.innerHTML = ""
    tasks.forEach((task,index) => {
        
         table.innerHTML += `
             <tr>
      <th scope="row">${index+1}</th>
      <td>${task.taskName}</td>
      <td>${task.taskDescription}</td>
      <td>${task.taskStatus ? "complete" : "Watting"}</td>
      <td class="d-flex gap-2">
        <button class="btn btn-success" onclick=" deletTask (${index})"> Delet </button>
        <button class="btn btn-success" onclick="editTask(${index})" > Edit </button>
      </td>
    </tr>         
         `

    });

}

display () ;


all.addEventListener('click' ,  ()=>{
display () 
} )

complete.addEventListener('click', function completeTaskFilter (){

    let completeTask = tasks.filter((elment , index ) =>{

      return elment.taskStatus === true ;

    })

    table.innerHTML = ""
completeTask.forEach((task ,index)=>{
table.innerHTML += `
             <tr>
      <th scope="row">${index+1}</th>
      <td>${task.taskName}</td>
      <td>${task.taskDescription}</td>
      <td>${task.taskStatus ? "complete" : "Watting"}</td>
      <td class="d-flex gap-2">
        <button class="btn btn-success " onclick=" deletTask (${index})"> Delet </button>
        <button class="btn btn-success " onclick="editTask(${index})" > Edit </button>
      </td>
    </tr>

         `
}) ;

} ) ;





wait.addEventListener('click', function waitTaskFilter (){

    let waitTask = tasks.filter((elment , index ) =>{

      return elment.taskStatus === false ;

    })

    table.innerHTML = ""
waitTask.forEach((task ,index)=>{
table.innerHTML += `
             <tr>
      <th scope="row">${index+1}</th>
      <td>${task.taskName}</td>
      <td>${task.taskDescription}</td>
      <td>${task.taskStatus ? "complete" : "Watting"}</td>
      <td class="d-flex gap-2">
        <button class="btn btn-success " onclick=" deletTask (${index})"> Delet </button>
        <button class="btn btn-success " onclick="editTask(${index})" > Edit </button>
      </td>
    </tr>

         `
}) ;

} ) ;



addTAsk.addEventListener('click' , function addNewTask (){


  let newTask = {
     taskName: idTaskName.value,
     taskDescription: idTaskDesc.value ,
     taskStatus: idTaskStatus1.checked
  }

  tasks.push(newTask);
  window.localStorage.setItem("Tasks" , JSON.stringify(tasks)) ;
  display();
  idTaskName.value = "";
  idTaskDesc.value = "";
   idTaskStatus1.checked = "" ;
   idTaskStatus2.checked = "" ;
} ) ;


function clearTasks(){

tasks.splice(0 , tasks.length) ;
localStorage.clear() ;
display () ;
} ;



 function deletTask (index){
 tasks.splice(index ,1  ) ;
  window.localStorage.setItem("Tasks" , JSON.stringify (tasks)) ;
 display() ;
 } ;

function editTask (index ){

 let edditing ={
  taskName : prompt("Enter Task Name") ,
   taskDescription : prompt("Enter Task Description") ,
   taskStatus : +prompt("Enter Status (complete / waiting) \n Press 1 if the task is completed. \n Press Another Number if the task is waiting.") === 1
 }
 
 tasks.splice(index , 1 ,edditing)  ;

    window.localStorage.setItem("Tasks" , JSON.stringify (tasks)) ;
  display() ;
} ;
