# 前言

**语法提案的批准流程**

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

# let和const命令

**let**

- 变量在代码块外无效。
- 适合用于for循环。不需要再用闭包保存变量。
- 不存在变量提升，暂时性死区。
- 不允许重复声明。
- 块级作用域。
- 允许在块级作用域内声明函数。
- 不属于顶层对象的属性。

for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。

**const**

- const一旦声明变量，就必须立即初始化。
- 不能重新赋值。const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的。
- 不属于顶层对象的属性。

ES6有六种声明：var、function、let、const、import、class。

# 变量的解构赋值

## 数组的解构赋值

- 解构不成功，变量的值就等于undefined。
- 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
- 只有当一个数组成员严格等于undefined，默认值才会生效。

## 对象的解构赋值

- 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
- 只有当一个对象属性严格等于undefined，默认值才会生效。

## 字符串的解构赋值

- 字符串被转换成了一个类似数组的对象。
- length属性。

## 数值和布尔值的解构赋值
```javascript
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```
## 函数参数的解构赋值

- 函数参数的解构也可以使用默认值。

## 圆括号问题

以下三种解构赋值不得使用圆括号。
- 变量声明语句
- 函数参数
- 赋值语句的模式

可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

## 用途
- 交换变量的值
- 从函数返回多个值
- 函数参数的定义
- 提取 JSON 数据
- 函数参数的默认值
- 遍历 Map 结构
- 输入模块的指定方法

# 字符串的扩展

## 字符的 Unicode 表示法

- 将码点放入大括号，就能正确解读该字符。

```javascript
'\z' === 'z'  // true 
'\172' === 'z' // true ASCII为172的字符,为'z'
'\x7A' === 'z' // true 十六进制
'\u007A' === 'z' // true ES5
'\u{7A}' === 'z' // true ES6
```

## codePointAt()

知识普及：

一个字节(byte)表示8位，1位等于比特(bit)。

ASCII编辑：一个字节能表示最大整数就是255，表示大小写英文字母、数字和一些符号。

GB2312：中国制定，把中文编入去。至少需要两个字节，16bit。

Unicode：Unicode是国际组织制定的可以容纳世界上所有文字和符号的字符编码方案。用两个字节表示一个字符，一个字符需要16位。能够使计算机实现跨语言、跨平台的文本转换及处理。

UTF：UTF是“Unicode Transformation Format”的缩写，可以翻译成Unicode字符集转换格式。

UTF-8：以字节为单位对Unicode进行编码。UTF-8的特点是对不同范围的字符使用不同长度的编码。

JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。

UTF-16转换规则：
如果编码小于等于16位，那么编码就是对应的16位无符号整数。如果大于0x10000，我们先计算U'=U-0x10000，然后将U'写成二进制形式：yyyy yyyy yyxx xxxx xxxx，U的UTF-16编码（二进制）就是：110110yyyyyyyyyy 110111xxxxxxxxxx。

- 能够正确处理 4 个字节储存的字符，返回一个字符的码点。
- codePointAt方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是 1，但是必须向codePointAt方法传入 2。
- 解决这个问题的一个办法是使用for...of循环，因为它会正确识别 32 位的 UTF-16 字符。

```javascript
var s = "𠮷";   // 0x20BB7
// ES5
s.charCodeAt(0) // 55362    
s.charCodeAt(1) // 57271
// ES6
s.codePointAt(0) // 134071

// 1.求U'。
// U' = 0x20BB7 - 0x10000 = 0x10BB7
// 2.把U'写成二进制形式。
// parseInt("0x10BB7", 16).toString(2) // '00010000101110110111'
// 3.代入110110yyyyyyyyyy 110111xxxxxxxxxx，不够的前面补0。
// 得到：1101100001000010 1101111110110111 
// 4.分别转成十进制
// parseInt("1101100001000010", 2).toString(10)     // 55362
// parseInt("1101111110110111", 2).toString(10)     // 57271
```

## String.fromCodePoint()

- 可以识别大于0xFFFF的字符。

```javascript
String.fromCodePoint(0x20BB7)
// "𠮷"
```

字符串方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
charPointAt(index)|能够正确处理 2 个字节储存的字符|字符编码|否
codePointAt(index)|能够正确处理 4 个字节储存的字符|字符编码|否|"𠮷".codePointAt(0) // 134071
String.fromCharCode(code)|识别 16 位的 UTF-16 字符|字符|否
String.fromCodePoint(code)|识别 32 位的 UTF-16 字符|字符|否|String.fromCodePoint(0x20BB7)// "𠮷"
charAt(index)|字符串给定位置的字符|字符|否
at(index)|可以识别 Unicode 编号大于0xFFFF的字符|字符|否
normalize()|用来将字符的不同表示方法统一为同样的形式|布尔值|否|'\u01D1'.normalize() === '\u004F\u030C'.normalize()  // true
includes(str)|表示是否找到了参数字符串|布尔值|否
startsWith(str)|表示参数字符串是否在原字符串的头部|布尔值|否
endsWith(str)|表示参数字符串是否在原字符串的尾部|布尔值|否
repeat(time)|用于头部补全|新字符串|否|'x'.padStart(5, 'ab') // 'ababx'
padStart(length, str)|用于头部补全|新字符串|否|'x'.padStart(5, 'ab') // 'ababx'
padEnd(length, str)|用于尾部补全|新字符串|否|'x'.padEnd(5, 'ab') // 'xabab'
matchAll(regex)|一次性取出所有匹配|遍历器|否|

## 模板字符串

- 反引号（`）标识。
- 可以用来定义多行字符串，所有模板字符串的空格和换行，都是被保留的。
- 在字符串中嵌入变量，将变量名写在${}之中。大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。模板字符串之中还能调用函数。大括号中的值不是字符串，将按照一般的规则转为字符串。如果是对象，将默认调用对象的toString。
- 在模板字符串中需要使用反引号，则前面要用反斜杠转义。
- 模板字符串甚至还能嵌套。

**不用模板字符串**

```javascript
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;

template = template
  .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
  .replace(expr, '`); \n $1 \n  echo(`');

template = 'echo(`' + template + '`);';

function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}

let parse = eval(compile(template));
div.innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });
```

- 标签模板：紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。标签模板的另一个应用，就是多语言转换（国际化处理）。

```javascript
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
```

**String.raw()方法**

模板处理函数的第一个参数（模板字符串数组），还有一个raw属性。

> * String.raw：可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组。

```javascript
String.raw({ raw: 'test' }, 0, 1, 2);
// 't0e1s2t'

// 等同于
String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2);
```


