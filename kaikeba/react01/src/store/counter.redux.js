// reducer:具体状态修改执行者
export default (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}

function add () {
    return {type: 'add'}
}

function minus () {
    return {type: 'minus'}
}

function asyncAdd() {
    return (dispatch,state) => {
        console.log(state);
        
        setTimeout(() => {
            dispatch({
                type: 'add'
            })
        }, 1000);
    }
}

export {add, minus, asyncAdd}
