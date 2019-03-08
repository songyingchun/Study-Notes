import React, { Component } from 'react'
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import {connect, Provider} from 'react-redux'
import {login} from '../store/user.redux'
import store from '../store'
function App(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/foo">foo</Link>
                </li>
            </ul>
            {/* 路由配置 */}
            <Switch>
                <Route path="/" component={Home}></Route>
                {/* <Route path="/about" component={About}></Route> */}
                <PrivateRoute path="/about" component={About}></PrivateRoute>
                <Route path="/detail:course" component={Detail}></Route>
                <Route path="/login" component={Login}></Route>
                <Route component={NoMatch}></Route>
            </Switch>
        </div>
    )
}

@connect(
    state => ({isLogin: state.user.isLogin})
)

// 路由守卫：定义可以验证的高阶组件
class PrivateRoute extends Component {
    
    render() {
        const {
            isLogin,
            component: Component,
            ...rest
        } = this.props;
        // render和component二选一
    return <Route {...rest} render={
        (props) => this.props.isLogin ? 
            <Component {...props}></Component> :
            <Redirect to={{pathname: '/login', state: {from: props.location.pathname}}}></Redirect>
        }></Route>
    }
}

@connect(
    state => ({
        isLogin: state.user.isLogin
    }),
    {
        login
    }
)
// 登录组件
class Login extends Component {
    render () {
        const from = this.props.location.state.from || '/';
        if(this.props.isLogin) {
            return (
                <Redirect to={from}></Redirect>
            )
        }
        return (
            <div>
                <p>请先登录</p>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
function NoMatch(props) {
    return <div>404页面</div>
}

function Home() {
    return <div>
        <ul>
            <li><Link to="/detail/web">Web</Link></li>
            <li><Link to="/detail/python">python</Link></li>
            <li><Link to="/detail/java">java</Link></li>
        </ul> 
    </div>
}

function Detail({match, history, location}) {
    // match - 参数获取等路由信息
    // history - 导航
    // location - url 定位
    console.log(match, history, location);
    
    return <div>
        {/* 获取参数 */}
        {match.params.course}
        <div> 
            <button onClick={history.goBack}>回退</button>
            <button onClick={()=> history.push({
                pathname: '/',
                state: {
                    foo: 'bar'
                }
            })}>回到首页</button>
        </div>
    </div>
}
function About() {
    return <div>
        <h2>用户中心</h2>
        <div>
            <Link to="/about/me">个人信息</Link>
            <Link to="/about/order">订单</Link>
        </div>
        <Switch>
            <Route path="/about/me" component={()=>(<div>我的信息</div>)}></Route>
            <Route path="/about/order" component={()=>(<div>订单信息</div>)}></Route>
            {/* 重定向 */}
            <Redirect to="/about/me"></Redirect>
        </Switch>
    </div>
}
export default class RouterSample extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
            <App></App>
        </Provider> 
      </BrowserRouter>
    )
  }
}
