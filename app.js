let text = document.querySelector('#text');
let btn1 = document.querySelector('.ok');
let drop = document.querySelectorAll('.drop');
let start = document.querySelector('.start');
let imgSrc = "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/cancel_close_delete_remove_reject-512.png";
let id = 0;
let allTasks;
btn1.addEventListener('click', f1);

function f1() {
    if(text.value == "") {
        alert("Список задач пуст");
    }
    else {
    let textMassage = function(){
    return text.value.replace(/(<([^>]+)>)/ig,''); 
    }
    id++;
    let span = document.createElement('span');
    span.setAttribute("id", id);
    span.setAttribute("class", "dropspan");
    span.draggable = "true";
    span.innerHTML += `Задача №${id} : ${textMassage()} <img src=${imgSrc} id=${id} style="width:20px; cursor:pointer;"> <br>`;
    
    let deleteImg = span.querySelector('img');
    //console.log(deleteImg);
    deleteImg.onclick = function() {
        if(deleteImg.id == span.id) {
            span.style.display = "none";
        }
    }

    start.appendChild(span);        
    text.value = '';
    allTasks = start.getElementsByTagName('span');
    for(let i = 0; i < allTasks.length; i++) {
        allTasks[i].addEventListener('dragstart', f3);
        function f3(event){
        event.dataTransfer.setData("text", event.target.id);
        }
     }
  }
}

for(let i = 0; i < drop.length; i++) {
drop[i].addEventListener('dragover', function(event){
    event.preventDefault();
});

drop[i].addEventListener('drop', function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(id));
    this.style.background = "#e6fff2";
    });
}

text.addEventListener('focus', function(){
    this.style.background = "#ebebe0";
}); 

text.addEventListener('blur', function(){
    this.style.background = "#eeffcc";
});
