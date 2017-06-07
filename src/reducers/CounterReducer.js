//计数器的Reducer

import * as Types from './../actions/Types'
/**
 *  定义一个state来存储我们想要存储的数据
 * @type {{currentCount: number}} 一个state对象
 */
const initialState = {
    todos: ["Item1", "Item2", "Item3"]
};

/**
 * 导出对state的操作的方法
 * @param state initialState
 * @param action Types中对应的方法
 * @returns {{currentCount: number}} 返回改变后的state
 */
export default function counterReducer(state = initialState, action = {}) {
    let {type, params} = action;
    switch (type) {
        case Types.ADD_TODO:
            return {
                todos: push(state.todos, params)
            };
        case Types.DELETE_TODO:
            return {
                todos: []
            };
        default:
            return state;
    }
}

function push(array, param) {
   if(array.length===0)
       return [param];
    array.push(param);
    return array;
}

