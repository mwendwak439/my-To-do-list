const savebtn=document.getElementById ('btn-save')
const input =document.getElementById ('input1')
const tasksect=document.getElementById('taskContainer')

savebtn.addEventListener('click',(e)=>{
    e.preventDefault();
if(input.value ===''){
    alert("please input task")
}
else
{  
    const taskdiv=document.createElement('div')
    
const save=document.createElement("p")
save.innerHTML=input.value

const deletebtn=document.createElement("button")
deletebtn.innerHTML="delete"
  
taskdiv.appendChild(save);
tasksect.appendChild(taskdiv)
taskdiv.appendChild(deletebtn);


deletebtn.addEventListener('click',()=>{
    taskdiv.remove();
    });

    input.value='';
}
    
});


