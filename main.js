//getting our objects
let input = document.querySelector("#input");
let  button = document.querySelector("#button");
let list = document.querySelector("#list");
let el = document.getElementsByTagName('li');

// function that will allow adding elements to lists on clicking
button.addEventListener('click',() => {
    let txt = input.value;
    if(txt ==''){
        alert('write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
},)


//this function will allow us to check the clicked elements
list.addEventListener('click', e => {
    if(e.target.tagName == 'li'){
         e.target.classList.toggle('checked');
    }
})



