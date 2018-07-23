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

init Events & Lifecycle -> beforeCreate -> 
init injections & reactivity -> created ->
Compile template -> beforeMount ->
create vm.$el -> mounted ->
beforeMount ->
Virtual DOM re-render and patch -> updated ->
beforeDestroy ->
Teardown watchers, child components and event listeners -> destroyed

## 模板语法

### 插值

#### 文本
Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。

v-once：当数据改变时，插值处的内容不会更新。

#### 原始HTML
v-html：为了输出真正的 HTML，你需要使用 v-html 指令。

#### 特性
v-bind: Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令

#### 使用 JavaScript 表达式
对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持

## 指令

### 参数
v-bind：指令可以用于响应式地更新 HTML。

v-on 指令，它用于监听 DOM 事件。
### 修饰符
指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
v-on:submit.prevent

## 缩写

### v-bind缩写

v-bind:href -> :href

v-on:click -> @click

# 计算属性和侦听器

## 计算属性

对于任何复杂逻辑，你都应当使用计算属性。

## 计算属性缓存 vs 方法
计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

## 计算属性 vs 侦听属性
当你有一些数据需要随着其它数据变动而变动时

## 计算属性的 setter 
计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

# Class与Style绑定

## 绑定 HTML Class
v-bind:class="" 

对象写对象字符串,对象属性值只能为true/false
```html
<div v-bind:class="{ active: isActive, active2: isActive }"></div>
```
```javascript
data: {
  isActive: true
}
```

写对象，对象属性值只能是true/false
```html
<div v-bind:class="classObject"></div>
```
```javascript
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

数组直接写数组成员对象字符串，对象成员的值只能true/false
```html
<div v-bind:class="[{active: active}, {errorClass: errorClass}]"></div>
```
```javascript
data: {
  errorClass: true
  active: true
}
```

数组成员，成员可以指定类名
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
```javascript
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

三元表达式
```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

混合
```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

## 绑定内联样式

### 对象语法
v-bind:style=""

直接写对象字符串
```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

写对象
```html
<div v-bind:style="styleObject"></div>
```

多重值
```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

# 条件渲染
v-if=""、v-show=""、v-for=""

## v-if
```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

## v-else
```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

## v-else-if
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## v-show

v-if是真正的渲染。v-show是基于css进行切换。需求频繁切换，v-show好; 很少改变，用v-if。

v-show 不支持 <template> 元素，也不支持 v-else。

## v-if与v-for
v-for比v-if有更高的优先级

# 列表渲染

## v-for
v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。
```html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```
v-for 块中，我们拥有对父作用域属性的完全访问权限。
```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
用 of 替代 in 作为分隔符
```html
<ul id="example-2">
  <li v-for="(item, index) of items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
``` 

一个对象的v-for
```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

index、key
```html
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```

## key

v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的且唯一的 id。



# 资料：
https://cn.vuejs.org/v2/guide/index.html
