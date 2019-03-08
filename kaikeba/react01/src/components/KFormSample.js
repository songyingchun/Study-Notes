import React, { Component } from 'react'

// hoc: 包装用户表单，增加数据管理能力、校验
function kFormCreate(Comp) {
    return class extends Component {
            constructor(props){
            super(props);
            this.options = {};  // 字段选项
            this.state = {};    // 各字段值
        }
        
        handleChange = e => {
            const {name,value} = e.target;
            this.setState()
        }
        getFieldDec = (field, optinos, InputComp) => {
            this.options[field] = optinos;
            return (
                <div>
                    {
                        React.cloneElement(InputComp, {
                        name: field,    // 控件name
                        value: this.state[field] || '', // 控件值
                        onChange: this.handleChange //change事件处理
                    })}
                </div>
            )
        }

        render() {
            return (<Comp {...this.props} getFieldDec={this.getFieldDec}></Comp>)
        }
    }
}

@kFormCreate
class KFormSample extends Component {
  render() {
      const {getFieldDec} = this.props;
    return (
      <div>
          {
              getFieldDec('name', {
                  rules: [{required: true,message: '请填写用户名'}]
              })(<input type="text"/>)
          }
          {
              getFieldDec('pwd', {
                  rules:[{required: true, message: '请填写用户名'}]
              })(<input type="password"/>)
          }
        <input type="password"></input>
        <button>登录</button>
      </div>
    )
  }
}

export default KFormSample