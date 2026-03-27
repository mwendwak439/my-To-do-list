const savebtn=document.getElementById ('btn-save')
const input =document.getElementById ('input1')
const tasksect=document.getElementById('taskContainer')
const duedate=document.getElementById('tasktime')

savebtn.addEventListener('click',()=>{
    
if(input.value ===''){
    alert("please input task")
}
else
{  
    const taskdiv=document.createElement('div')
    taskdiv.setAttribute('class','subdiv')
                    
                const save=document.createElement("p")
                save.setAttribute('class','peri')
                save.innerHTML=input.value

                        const date=document.createElement("p")
                        date.setAttribute('class','peri')
                        date.innerHTML=`📅due:${duedate.value}`



const deletebtn=document.createElement("button")
deletebtn.innerHTML="delete"
  
taskdiv.appendChild(save);
taskdiv.appendChild(date);
taskdiv.appendChild(deletebtn);
tasksect.appendChild(taskdiv)


deletebtn.addEventListener('click',()=>{
    taskdiv.remove();
    });

    input.value='';
}
    
});


