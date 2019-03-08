import React, { Component } from 'react'

function Cart(props) {
    return (
      <table>
          <tbody>
              {props.data.map(d => (
                  <tr key={d.text}>
                      <td>{d.text}</td>
                      <td>{d.text}</td>
                      <td>{d.count}</td>
                      <td>${d.price*d.count}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    )
}

export default class cartSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [
                {
                    id: 1, 
                    text: 'Web全栈架构师', 
                    price: 666},
                {
                    id: 2,
                    text: 'Web全栈架构师',
                    price: 666
                }
            ],
            text: '',   // 商品名
            cart: [],
        }

        // 回调写法1
    }

    addGood = () => {
        this.setState(prevState => ({
            goods: [...prevState.good, {id: 3, text: prevState.text, price: 666}]
        }))
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addToCart(good) {
        const newCart = [...this.state.cart];  // 创建全新数据
        const idx = newCart.findIndex(c=>c.text === good.text);
        const item = newCart[idx];

        if(item) {
            newCart.splice(idx, 1, {...item, count: item.count + 1})
        } else {
            newCart.push({...good, count: 1})
        }
        this.setState({cart: newCart})
    }
  render() {
      const title = this.props.title ? <h1>{this.props.title}</h1> : null;
      const goods = this.state.goods.map(good =>(
          <li key={good.id}>{good.text}</li>
        ))
    return (
      <div>
        {/* 条件语句 */}
        {title}
        {/* 添加商品 */}
        <div>
            <input type="text" value={this.state.text} onChange={}></input>
            <button onClick={(e) => this.addToCart(good)}>添加商品</button>
        </div>
        {/* 列表渲染 */}
        <ul>{goods}</ul>
        {/* 购物车 */}
        <Cart props={'12'}></Cart>
      </div>
    )
  }
}
