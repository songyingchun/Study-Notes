import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import CommentList from './components/CommentList';
// import Lifecycle from './Lifecycle';
// import Hoc from './components/Hoc';
// import ContextSample from './components/ContextSample';
import store from './store'
import ReduxTest from './components/ReduxTest';
import {Provider} from 'react-redux'
import KFormSample from './components/KFormSample';
import AntdTest from './components/AntdTest';
import RouterSample from './components/RouterSample';
// ReactDOM.render(<h1>React真酷</h1>, document.querySelector('#root'))
// ReactDOM.render(<CommentList/>, document.querySelector('#root'))
// ReactDOM.render( <Hoc stage = "React" /> , document.querySelector('#root'))
// ReactDOM.render( <ContextSample /> , document.querySelector('#root'))
// ReactDOM.render(<KFormSample /> , document.querySelector('#root'))
// let someProp = 'some value'
// ReactDOM.render(<Lifecycle />, document.querySelector('#root'))
// ReactDOM.render(<AntdTest />, document.querySelector('#root'))
ReactDOM.render(<RouterSample />, document.querySelector('#root'))
// 动态渲染

// function tick() {
//     // ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>, document.querySelector('#root'))

//     ReactDOM.render( <Lifecycle />, document.querySelector('#root'))
// }

// setInterval(() => {
//     tick()
// }, 1000);

// function render() {
//     ReactDOM.render( 
//         <Provider store={store}>
//              <ReduxTest />
//         </Provider>
//      , document.querySelector('#root'))
// }
// render();