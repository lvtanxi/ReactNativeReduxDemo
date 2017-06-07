//这里主要是写不同的Types对应的Function

import * as Types from './Types'

export function addTodo(todo) {
    return {
        type: Types.ADD_TODO,
        params: todo
    }
}

export function deleteTodo(index) {
    return {
        type: Types.DELETE_TODO,
        params: index
    }
}





