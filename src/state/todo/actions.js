import * as todoTypes from './types'

export function addTodo(title){
    return {
        type: todoTypes,
        payload: {
            title: title
        }
    }
}

export function toogleTodoStatus(id, completed){
    return{
        type: todoTypes.TOOGLE_TODO_STATUS,
        payload: {
            id: id,
            completed: completed
        }
    }
}

export function toogleTodoTitle(id, title){
    return{
        type: todoTypes.TOGGLE_TITLE,
        payload: {
            id: id,
            title: title 
        }
    }
}

export function removeTodo(id){
    return{
        type: todoTypes.REMOVER_TODO,
        payload: {
            id: id
        }
    }
}