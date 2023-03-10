"use strict"

export {localStorageUpdate};



function localStorageUpdate(el){
    localStorage.setItem('taskManager', JSON.stringify(el))
}