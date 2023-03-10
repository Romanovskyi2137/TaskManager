"use strict"
// import {taskTemp} from 'template.js';
// import {localStorageUpdate} from 'local_storage_servise.js'

const refs = {
    main: document.querySelector('.main'),
    input: document.querySelector('input'),
    btn: document.querySelector('button'),
    form: document.querySelector('.form'),
    saveBtn: document.querySelector('.saveBtn')
}

refs.form.addEventListener('submit', (e) => {e.preventDefault()})
refs.btn.addEventListener('click', onBtnClick);
refs.main.addEventListener('click', onMainClick);
// refs.saveBtn.addEventListener('click', () => {
//     localStorageUpdate(refs.main.innerHTML)
// })


function onMainClick (e){
    let element = e.target.nodeName;

    if(element === 'INPUT'){
        onCheckboxChange(e)
    } else if(element === 'IMG'){
        onCloseBtnClick(e)
    }

}


function onBtnClick(){
    let inputValue = refs.input.value

    if(inputValue){
        refs.input.value = '';
        refs.main.insertAdjacentHTML('beforeend', taskTemp(inputValue));
    } else{
        return
    }

}

function onCloseBtnClick(e){
    e.target.parentNode.remove()
}

function onCheckboxChange (e){
    e.target.parentNode.classList.toggle("completedTask")
    e.target.toggleAttribute('checked')
}


//  get data form localStorage, if data == true,  render a markup
function getTasks(){
    const data = localStorage.getItem('taskManager');
    console.log(data)
    if (data){
        return
    } else {
        refs.main.innerHTML = JSON.parse(data)
    }
};
getTasks()

// save changes every DELAY 
const DELAY = 1000;

const saveInterval = setInterval(() => {
    localStorageUpdate(refs.main.innerHTML)
}, DELAY)


function localStorageUpdate(el){
    localStorage.setItem('taskManager', JSON.stringify(el))
}

function taskTemp (value){
    return `<li>
                <span>${value}</span>
                <input type="checkbox" class="checkbox"></input>
                <img class="closeBtn" src="img/close_icon.png"></img>
            </li>`
}