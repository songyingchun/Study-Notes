// import React, { Component } from 'react'
// import { ReactDOM } from "react-dom";

import React from './kcreate'
import ReactDOM, {Component} from './kreact-dom'

function Comp(props) {
    return <h2>函数组件, {props.name}</h2>
}

class Comp2 extends Component {
    render () {
        return <h2>class组件</h2>
    }
}

const jsx = (
    <div id="demo1">
        <span>hi</span>
        <Comp name="kaikeba"></Comp>
    </div>
)

console.log(jsx)

ReactDOM.render(jsx, document.querySelector('#root'))