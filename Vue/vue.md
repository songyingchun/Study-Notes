# 安装
## Vue Devtools
https://github.com/vuejs/vue-devtools#vue-devtools

## CND
https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js


# 介绍
## Vue.js是什么

一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

数据和 DOM 已经被建立了关联，所有东西都是响应式的

## 声明式渲染

```html
<div id="app">
  {{ message }}
</div>
```
```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

## 条件和循环

### 条件 v-if
v-if为false时不渲染html
```html
<div id="app-3">
    <p v-if="seen">现在你看到我了</p>
</div>
```
```javascript
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
```
### 循环 v-for
v-for="item in list"
```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
```javascript
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

### 处理用户输入 v-onclick

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
</div>
```

```javascript
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

### 双向绑定 v-model

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
```javascript
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```
## 组件化应用构建

一个组件本质上是一个拥有预定义选项的一个 Vue 实例。
注册：
```javascript
<div id="app-7">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
```
```javascript
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.id + 1}}.{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})
```

一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现
一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否支持某个API,如果不支持的话就加载对应的polyfill.

### 与自定义元素的关系
1.Web 组件规范仍然处于草案阶段，并且未被所有浏览器原生实现。必要时，Vue 组件也可以包装于原生自定义元素之内。
2.Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。

## Vue实例

### 数据与方法
只有当实例被创建时 data 中存在的属性才是响应式的。

### 实例生命周期钩子
created钩子可以用来在一个实例被创建之后执行代码：


# 资料：
https://cn.vuejs.org/v2/guide/index.html
