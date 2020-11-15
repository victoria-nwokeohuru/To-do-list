const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

const storage = localStorage.getItem("todoList");

if(storage) {
    list.innerHTML = storage;
}

form.addEventListener('submit', function(ev){
    ev.preventDefault();
    if (input.value.length > 0 ) {
        const li = document.createElement('li');
        li.classList.add("listText");
        const listContent = `${input.value}<span class="close">\u00D7</span>`;
        li.innerHTML = listContent;
        list.appendChild(li);
        input.value = '';
    }

    localStorage.setItem("todoList", list.innerHTML);
});

list.addEventListener('click', function(ev){
    console.log(ev);
    if (ev.target.classList.contains("listText")) {
        ev.target.classList.toggle('checked');      
    }

    if (ev.target.classList.contains('close')) {
        list.removeChild(ev.target.parentElement); 
    }

    localStorage.setItem("todoList", list.innerHTML);
})