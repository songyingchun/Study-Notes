// 转换vdom为dom
export function initVNode(vnode) {
    // vnode是虚拟dom树
    const {vtype} = vnode;
    if(!vtype) {
        // 文本节点,TextNode
        return document.createTextNode(vnode)
    }

    if(vtype === 1) {
        // 原生节点
        return createElement(vnode)
    } else if (vtype === 2) {
        // class组件
        return createClassComp(vnode)
    } else {
        return createFuncComp(vnode)
    }
}

function createElement(vnode) {
    const {type,props} = vnode
    const node = document.createElement(type)
    // 属性处理
    const {key, children, ...rest} = props
    Object.keys(rest).forEach(attr => {
        // 特殊处理
        if (attr === 'className') {
            node.setAttribute('class', rest[attr])
        } else {
            node.setAttribute(attr, rest[attr])
        }
    })

    // 递归可能存在子元素
    children.forEach( c => {
        node.appendChild(initVNode(c))
    })
    return node;
}

function createClassComp(vnode) {
    const {type, props} = vnode
    const component = new type(props)
    // 执行class组件的render得到vdom
    const newNode = component.render()
    return initVNode(newNode);
}

function createFuncComp(vnode) {
    return null;
}
// vdom diff

export function createVNode(vtype, type, props) {
    const vnode = {
        vtype, type, props
    }
    return vnode
}