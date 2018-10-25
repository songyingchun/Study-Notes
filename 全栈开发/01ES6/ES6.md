# 变量
var 
1. 可以重复声明
2. 无法限制修改
3. 没有块级作用域

let 不能重复声明，常量可以修改，块级作用域
const 不能重复声明，常量不可以修改，块级作用域

# Promise-承诺

Promise.all 所有成功才成功，有一个失败就失败。
Promise.all([p1, p2]).then(function (results) {}, function (err) {});

Promise.race 有一个成功就成功，所有失败才失败。
Promise.race([p1, p2]).then(function (results) {}, function (err) {});

#generator-生成器

普通函数——一路到底
generator函数——中间能停。
```js
function *show () {
    alert('a');
    let a = yield;
    alert('b');
    alert(a);
}

let gen = show();
gen.next(12);
gen.next(5);
// a b 5
```
yield传参
yield返回

一定要有next才能执行函数。用next()调用会返回一个带有value和done的对象。
