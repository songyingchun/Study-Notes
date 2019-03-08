// 转换dom 为
// 
import {createVNode} from './kvdom'
function createFlement (type, props, ...children) {
    props.children = children
    delete props.__source
    delete props.__self
    // 判断组件类型
    let vtype;
    if(typeof type === 'string') {
        // 原生标签，div span
        vtype = 1;
    } else if(typeof type === 'function'){
        if (type.isClassComponent) {
            // 类组件
            vtype = 2;
        } else {
            // 函数组件
            vtype = 3;
        }
    }

    return createVNode(vtype, type, props)
}

// 实现Component
export class Component {
    // 区分function 和 class 组件
    static isClassComponent = true;
    constructor (props) {
        this.props = this.props
        this.state = {}
    }
    setState(state){
        //...
    }
}

export default {
    createFlement
}