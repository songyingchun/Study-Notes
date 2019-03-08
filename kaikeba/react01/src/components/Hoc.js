import React, { Component } from 'react'

// 高阶组件
const withName = Comp => {
    // 重写生命周期
    class NewComponent extends Component {
        componentDidMount() {

        }
        render() {
            return <Comp {...this.props}name = "高阶组件试用介绍"/>
        }
    }
    return NewComponent
}

const withLog = Comp => {
    console.log(Comp.name + '渲染了');
    return props => < Comp {...props}/>
}

@withLog
@withName
@withLog

class Kaikeba extends Component {
    render() {
        console.log('do something')
        return (
            <div>{this.props.stage}-{this.props.name}</div>
        )
    }
}

export default Kaikeba
