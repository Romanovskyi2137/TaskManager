"use strict"
export {taskTemp}

function taskTemp (value){
    return `<li>
                <span>${value}</span>
                <input type="checkbox" class="checkbox"></input>
                <img class="closeBtn" src="/src/img/close_icon.png"></img>
            </li>`
}