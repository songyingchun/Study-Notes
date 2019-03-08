import React, { Component } from 'react'

// Dialog
function Dialog(props) {
    return (
        <div style={{border: `4px solid ${props.color || 'blue'}`}}>
            {props.children}
            <div className="footer">{props.footer}</div>
        </div>
    )
}

function welcomeDialog() {
    const confirmBtn = <button onClick={()=>alert('react好')}>确定</button>
    return (
        <Dialog color="green">
            <h1>欢迎光临</h1>
            <h1>感谢使用React</h1>
        </Dialog>
    )
}

// 模拟接口
const api = {
  getUser: () => ({name: 'jerry', age: 20})
}

const Fetcher = (props) => {
  let user = api[props.name]();
  return props.children(user);
}

export default class Composition extends Component {
  render() {
    return (
      <div>
        <welcomeDialog />>
        {/* children可以是任意表达式 */}
        <Fetcher name="getUser">
          {({name, age}) => (<p>{name}-{age}</p>)}
        </Fetcher>
      </div>
    )
  }
}
