# 前言

**语法提案的批准流程**

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

# ECMAScript6简介

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

# 正则的扩展

- RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。正则对象的修饰符是ig，它会被第二个参数i覆盖。
```javascript
var regex = new RegExp(/xyz/i);
// 等价于
var regex = /xyz/i;
// ES6
var regex = new RegExp(/xyz/, 'i');
```

- ES6 将这 4 个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。

```javascript
String.prototype.match 调用 RegExp.prototype[Symbol.match]
String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
String.prototype.search 调用 RegExp.prototype[Symbol.search]
String.prototype.split 调用 RegExp.prototype[Symbol.split]
```

- u 修饰符：ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。
- y 修饰符：叫做“粘连”（sticky）修饰符。g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始。

```javascript
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
```

- sticky 属性：表示是否设置了y修饰符。
- flags 属性：返回正则表达式的修饰符。
- s 修饰符：dotAll 模式。.不匹配两个字符：一个是四个字节的 UTF-16 字符，这个可以用u修饰符解决；另一个是行终止符（line terminator character）。引入s修饰符，使得.可以匹配任意单个字符。

以下四个字符属于”行终止符“。

名称|表示法|字符串|Unicode
-|-|-|-
换行符|U+000A|"\n"|"\u000A"
回车符|U+000D|"\r"|"\u000D"
行分隔符|U+2028||"\u2028"
段分隔符|U+2029||"\u2029"

- 后行断言：ES2018支持后行断言（lookbehind）和后行否定断言（negative lookbehind）。

```javascript
// 先行断言：x只有在y前面才匹配，/x(?=y)/。
/\d+(?=%)/.exec('100% of US presidents have been male') // [100]
// 先行否定断言：x只有在y前面才匹配，/x(?=y)/。
/\d+(?!%)/.exec('that’s all 44 of them')                 // ["44"]
// 后行断言：x只有在y后面才匹配，/(?<=y)x/。
/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
// 后行否定断言：x只有不在y后面才匹配，/(?<!y)x/。
/(?<!\$)\d+/.exec('it’s is worth about €90')                // ["90"]
```
断言|作用|公式|例子
-|-|-|-
先行断言|x只有在y前面才匹配|/x(?=y)/|/\d+(?=%)/.exec('100% of US presidents have been male') // [100]
先行否定断言|x只有不在y前面才匹配|/x(?!y)/|/\d+(?!%)/.exec('that’s all 44 of them') // ["44"]
后行断言|x只有在y后面才匹配|/(?<=y)x/|/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
后行否定断言|x只有不在y后面才匹配|/(?<!y)x/|/(?<!\$)\d+/.exec('it’s is worth about €90')         // ["90"]

后行断言需要先匹配/(?<=y)x/的x，然后再回到左边，匹配y的部分。

后行断言由于执行顺序是从右到左，第二个括号是贪婪模式，第一个括号只能捕获一个字符，所以结果是1和053。
```javascript
/(?<=(\d+)(\d+))$/.exec('1053') // ["", "1", "053"]
```

后行断言反斜杠引用，也与通常的顺序相反，必须放在对应的那个括号之前。
```javascript
/(?<=\1d(o))r/.exec('hodor')  // ["r", "o"]
```

- Unicode 属性类：ES2018 引入了一种新的类的写法\p{...}和\P{...}，允许正则表达式匹配符合Unicode 某种属性的所有字符。\P{…}是\p{…}的反向匹配，即匹配不满足条件的字符。使用的时候一定要加上u修饰符。

```javascript
// 匹配所有十进制字符
const regex = /^\p{Decimal_Number}+$/u;
regex.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼') // true

// \p{Number}甚至能匹配罗马数字。
const regex = /^\p{Number}+$/u;
regex.test('²³¹¼½¾') // true
regex.test('㉛㉜㉝') // true
regex.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ') // true

// 匹配所有空格
\p{White_Space}

// 匹配各种文字的所有字母，等同于 Unicode 版的 \w
[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \W
[^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// 匹配 Emoji
/\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

// 匹配所有的箭头字符
const regexArrows = /^\p{Block=Arrows}+$/u;
regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true
```

- 具名组匹配：允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。

```javascript
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
```

引用：如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名>的写法。

- String.prototype.matchAll(regex)：可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。

# 数值的扩展

**二进制和八进制表示法**

二进制和八进制数值的新的写法, 分别用前缀0b（或0B）和0o（或0O）表示。

进制|写法|例子
-|-|-
二进制|0b|0b10  // 2
八进制|0o|0o10  // 8
十六进制|0x|0x10  // 16

**Number.isInteger()**

- 如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。

```javascript
Number.isInteger(3.0000000000000002) // true
```
- 小于 JavaScript 能够分辨的最小值，会被自动转为 0。
```javascript
Number.isInteger(5E-325) // true
```

JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，第54位及后面的位就会被丢弃。

```javascript
Number.isInteger(3.0000000000000002) // true

// 原因:
// 3.0000000000000002.toString(2)   // "11.000000000000000000000000000000000000000000000000101"

// 3.0000000000000002.toString(2).length  // 54
```

**Number.EPSILON**

用来设置“能够接受的误差范围”。两个浮点数的差小于这个值，我们就认为这两个浮点数相等。

```javascript
function withinErrorMargin (left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}
0.1 + 0.2 === 0.3 // false
withinErrorMargin(0.1 + 0.2, 0.3) // true
```

**Number.isSafeInteger()**

JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）。

**Math.sign()**

参数为正数，返回+1；
参数为负数，返回-1；
参数为 0，返回0；
参数为-0，返回-0;
其他值，返回NaN。

**指数运算符**

ES2016 新增了一个指数运算符（**）。
指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。

```javascript
2 ** 2 // 4
2 ** 3 // 8
```

数值属性和方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Number.isFinite(number)|检查一个数值是否为有限的|布尔值|否|
Number.isNaN(number)|检查一个数值是否为NaN|布尔值|否|
Number.parseInt(number)|与parseInt(number)一样|数值|否
Number.parseFloat(number)|parseFloat(number)一样|数值|否
Number.isInteger(number)|判断一个数值是否为整数|布尔值|否
Number.EPSILON(number)|表示 1 与大于 1 的最小浮点数之间的差|数值|否|Number.EPSILON === Math.pow(2, -52)// true
Number.MAX_SAFE_INTEGER|最大安全数|9007199254740991||
Number.MIN_SAFE_INTEGER|最小安全数|-9007199254740991||
Number.isSafeInteger(number)|用来判断一个整数是否安全范围之内|布尔值|否|
Math.trunc(number)|用于去除一个数的小数部分，返回整数部分。不是数值，先用Number()转成数值|数值|否|
Math.sign(number)|判断一个数到底是正数、负数、还是零|数值|否|Math.sign(NaN) // NaN
Math.cbrt(number)|用于计算一个数的立方根|数值|否|Math.cbrt(2)  // 1.2599210498948734
Math.clz32(number)|一个数的 32 位无符号整数形式有多少个前导 0|数值|否|Math.clz32(0) // 32
Math.imul(number)|一个 32 位的带符号整数|数值|否|Math.imul(2, 4)   // 8
Math.fround(number)|一个数的32位单精度浮点数形式|数值|否|Math.fround(0)   // 0
Math.hypot(number1, number2)|所有参数的平方和的平方根|数值|否|Math.hypot(3, 4);        // 5
Math.expm1(x)||数值|否|Math.expm1(x);        // e<sup>x</sup> - 1
Math.log1p(x)|返回1 + x的自然对数,即 Math.log(1 + x)。如果x小于-1，返回NaN。|数值|否|Math.log(x)        // Math.log1p(1)  // 0.6931471805599453
Math.log10(x)|以 10 为底的x的对数，如果x小于 0，则返回 NaN|数值|否|Math.log10(2)      // 0.3010299956639812
Math.log2(x)|以 2 为底的x的对数，如果x小于 0，则返回 NaN|数值|否|Math.log2(3)      // 1.584962500721156
Math.sinh(x)|x的双曲正弦|数值|否|
Math.cosh(x)|x的双曲余弦|数值|否|
Math.tanh(x)|x的双曲正切|数值|否|
Math.asinh(x)|x的反曲正弦|数值|否|
Math.acosh(x)|x的反曲余弦|数值|否|
Math.atanh(x)|x的反曲正切|数值|否|

# 函数的扩展

**函数参数的默认值**

- 参数默认值可以与解构赋值的默认值

**函数的 length 属性**

- 返回没有指定默认值的参数个数。
- 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
```javascript
(function (a = 0, b, c) {}).length // 0
```

**作用域**

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

```javascript
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1

// 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。
```

```javascript
var x = 1;
function foo(x, y = function() { x = 2; }) {
  x = 3;
  y();
  console.log(x);
}

foo() // 2
x // 1
// 函数foo的内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，所以最后输出的就是2，而外层的全局变量x依然不受影响。
```

**rest参数**

ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。

- rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
- 函数的length属性，不包括 rest 参数。

**name属性**

- 如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。
- Function构造函数返回的函数实例，name属性的值为anonymous。
- bind返回的函数，name属性值会加上bound前缀。

```javascript
var f = function () {};
// ES6
f.name // "f"

(new Function).name // "anonymous"

(function(){}).bind({}).name // "bound "
```

**箭头函数**

- 箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
- 箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
- 箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
- 箭头函数只有一行语句，且不需要返回值，可以采用void，就不用写大括号了。
```javascript
let fn = () => void doesNotReturn();
```

注意点：
- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

**双冒号运算符**

- 函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。
```javascript
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);
```

- 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。

```javascript
let log = ::console.log;
// 等同于
var log = console.log.bind(console);
```

**尾调用优化**

指某个函数的最后一步是调用另一个函数。

尾调用优化：尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。

```javascript
function f() {
  let m = 1;
  let n = 2;
  return g(m + n);
}
f();

// 等同于
function f() {
  return g(3);
}
f();

// 等同于
g(3);
```

# 数组的扩展

**扩展运算符**

将一个数组转为用逗号分隔的参数序列。

- 主要用于函数调用。
- 可以放置表达式。
```javascript
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];
```

**替代函数的 apply 方法**
```javascript
// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])
```

**应用**

- 复制数组
- 合并数组
- 与解构赋值结合
- 将字符串转为真正的数组
- 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。比如Map 和 Set 结构，Generator 函数

> * Array.from(object)：将类似数组的对象和可遍历的对象转为真正的数组。
> * Array.of([item1[, item2 [, . . . [, itemN]]]])：将类似数组的对象和可遍历的对象转为真正的数组。如果没有参数，就返回一个空数组。
> * copyWithin(target[, start][, end])：将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
  > * target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
      start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
      end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

数组属性和方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Array.from(object)|将类似数组的对象和可遍历的对象转为真正的数组|新的数组|否|Array.from({ length: 3 });
Array.of([item1[, item2 [, . . . [, itemN]]]])|将类似数组的对象和可遍历的对象转为真正的数组。如果没有参数，就返回一个空数组|新的数组|否|var {a, b, c} = {a: ["a"], b: ["b"], c: ["c"]};<br>var d = Array.of(a, b, c);
copyWithin(target[, start][, end])|将指定位置的成员复制到其他位置，然后返回当前数组|当前数组|是|[1, 2, 3, 4, 5].copyWithin(0, 3)// [4, 5, 3, 4, 5]
find(fn[, context])|用于找出第一个符合条件的数组成员。如果没有符合条件的成员，则返回undefined。|数组成员|否|[1, 4, -5, 10].find((n) => n < 0) // -5
findIndex(fn[, context])|返回第一个符合条件的数组成员的位置。如果所有成员都不符合条件，则返回-1。|数值|否|[1, 5, 10, 15].findIndex(function(value, index, arr) { <br>   return value > 9;   <br>}) // 2
fill(number[, start][, end])|使用给定值，填充一个数组。还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。|新的数组|否|['a', 'b', 'c'].fill(7, 1, 2)<br>   // ['a', 7, 'c']
entries()|对键值对的遍历|Iterator对象|否|for (let [index, elem] of ['a', 'b'].entries()) {<br>  console.log(index, elem);<br>  }<br>// 0 "a"<br>// 1 "b"
keys()|对键名的遍历|Iterator对象|否|for (let index of ['a', 'b'].keys()) {<br>  console.log(index);<br>  }<br>// 0 <br>// 1 
values()|对键值的遍历|Iterator对象|否|for (let elem of ['a', 'b'].values()) { {<br>  console.log(elem);<br>  }<br>// "a"<br>// "b"
includes()|某个数组是否包含给定的值|布尔值|否|[1, 2, 3].includes(2)     // true

**数组的空位**

空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。ES6 则是明确将空位转为undefined。

```javascript
0 in [undefined, undefined, undefined] // true
0 in [, , ,] // false
```

# 对象的扩展

**属性的简洁表示法**

- 属性简写。这时，属性名为变量名, 属性值为变量的值。 
- 方法也可以简写。把"：function"写成"()"。
- Generator 函数前面需要加上星号。

**属性名表达式**

作为对象的属性名，即把表达式放在方括号内。

**方法的 name 属性**

有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous。

**Object.assign**

- 该参数不是对象，则会先转成对象，然后返回。
- undefined和null无法转成对象，所以如果它们作为参数，就会报错。
- 除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
- 不拷贝不可枚举的属性。
- Symbol 值的属性，也会被Object.assign拷贝。

注意点：

- Object.assign方法实行的是浅拷贝。
- 一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
- 可以用来处理数组，但是会把数组视为对象。
- 只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。

**属性的可枚举性和遍历**

目前，有四个操作会忽略enumerable为false的属性。

- for...in循环：只遍历对象自身的和继承的可枚举的属性。
- Object.keys()：返回对象自身的所有可枚举的属性的键名。
- JSON.stringify()：只串行化对象自身的可枚举的属性。
- Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

另外，ES6 规定，所有 Class 的原型的方法都是不可枚举的。

**属性的遍历**

- for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
- Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
- Object.getOwnPropertyNames(obj)：返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
- Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名。
- Reflect.ownKeys(obj)：返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

- 首先遍历所有数值键，按照数值升序排列。
- 其次遍历所有字符串键，按照加入时间升序排列。
- 最后遍历所有 Symbol 键，按照加入时间升序排列。

方法|实例属性|实例不可枚举属性|继承属性|继承不可枚举属性|Symbol|Symbol不可枚举属性
:-|:-|:-|:-|:-|:-|:-
for...in|是|否|是|否|否|否
Object.keys(obj)|是|否|是|否|否|否
Object.getOwnPropertyNames(obj)|是|是|是|是|否|否
Object.getOwnPropertySymbols(obj)|否|否|否|否|是|是
Reflect.ownKeys(obj)|是|是|是|是|是|是

**__proto__属性**

Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。

**super 关键字**

指向当前对象的原型对象。super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

**对象的扩展运算符**

将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面。
```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

- 解构赋值。

对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
```javascript
let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }
```

- 合并对象。这等同于使用Object.assign方法。
- 后面可以跟表达式。
- 后面是一个空对象，则没有任何效果。
- 扩展运算符的参数是null或undefined，这两个值会被忽略，不会报错。

**对象扩展**
对象方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Object.is(obj1, obj2)|比较两个值是否严格相等。不同之处只有两个：一是+0不等于-0，二是NaN等于自身。|布尔值|否|Object.is(NaN, NaN) // true
Object.assign(target[, source1[, source2 [, . . . [, sourceN]]]])|于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）|
Object.getOwnPropertyDescriptor(obj, propertyName)|以获取该属性的描述对象|
Object.keys(obj)|返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名|新的数组|否|
Object.getOwnPropertyNames(obj)|返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名|新的数组|否|
Object.getOwnPropertySymbols(obj)|返回一个数组，包含对象自身的所有 Symbol 属性的键名|新的数组|否|
Reflect.ownKeys(obj)|返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举|否|
Object.getOwnPropertyDescriptors(obj)|返回某个对象属性的描述对象（非继承属性）|对象属性的描述对象|否|
Object.setPrototypeOf(obj, prototype)|用来设置一个对象的prototype对象|原对象|是|const o = Object.setPrototypeOf({}, null);
Object.getPrototypeOf(obj)|读取一个对象的原型对象|原型对象|否|var a = {a: "a"}; Object.getPrototypeOf(obj);
Object.create(obj)|生成一个原型为obj的对象|对象|否|
Object.keys(obj)|返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名|数组|否|
Object.values(obj)|返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值|对象|否|
Object.entries(obj)|返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组|对象|否|

# Symbol

表示独一无二的值。它是 JavaScript 语言的第七种数据类型。

```javascript
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

- 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
- Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
- Symbol 值不能与其他类型的值进行运算，会报错。
- Symbol 值可以显式转为字符串。

```javascript
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```
- Symbol 值也可以转为布尔值，但是不能转为数值。
```javascript
let sym = Symbol();
Boolean(sym) // true
!sym  // false
```

**作为属性名的 Symbol**

- Symbol 值作为对象属性名时，不能用点运算符。
- Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。

**属性名的遍历**

> * Object.getOwnPropertySymbols(obj)：返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
> * Reflect.ownKeys(obj)：可以返回所有类型的键名，包括常规键名和 Symbol 键名。

**Symbol.for()，Symbol.keyFor()**

> * Symbol.for(str)：返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
> * Symbol.keyFor(symbol)：返回一个已登记的 Symbol 类型值的key。Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。

```javascript
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

**内置的 Symbol 值**

> * Symbol.hasInstance：当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
```javascript
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true
```

> * Symbol.isConcatSpreadable：表示该对象用于Array.prototype.concat()时，是否可以展开。
```javascript
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
```

> * Symbol.species：创建衍生对象时，会使用该属性。创建衍生对象时就会使用这个属性返回的函数，作为构造函数。
```javascript
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const a = new MyArray();
const b = a.map(x => x);

b instanceof MyArray // false
b instanceof Array // true
```

> * Symbol.match：当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
```javascript
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)
```

> * Symbol.replace：当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
```javascript
String.prototype.replace(searchValue, replaceValue)
// 等同于
searchValue[Symbol.replace](this, replaceValue)
```

> * Symbol.search：当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
```javascript
String.prototype.search(regexp)
// 等同于
regexp[Symbol.search](this)
```

> * Symbol.split：当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
```javascript
String.prototype.split(separator, limit)
// 等同于
separator[Symbol.split](this, limit)
```

> * Symbol.iterator：指向该对象的默认遍历器方法。
```javascript
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```

> * Symbol.toPrimitive：该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
```javascript
let obj = {
  [Symbol.toPrimitive](hint) {}
};
String(obj) // 'str'
```

> * Symbol.toStringTag：该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。
```javascript
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"
```

> * Symbol.unscopables：对象指定了使用with关键字时，哪些属性会被with环境排除。
```javascript
Array.prototype[Symbol.unscopables]

// 没有 unscopables 时
class MyClass {
  foo() { return 1; }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 1
}

// 有 unscopables 时
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 2
}
```

上面代码通过指定Symbol.unscopables属性，使得with语法块不会在当前作用域寻找foo属性，即foo将指向外层作用域的变量。

# Set 和 Map 数据结构

**Set**

它类似于数组，但是成员的值都是唯一的，没有重复的值。

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
```

- 去除数组的重复成员。

> * constructor：构造函数，默认就是Set函数。
> * size：返回Set实例的成员总数。
> * add(value)：添加某个值，返回 Set 结构本身。
> * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
> * has(value)：返回一个布尔值，表示该值是否为Set的成员。
> * clear()：清除所有成员，没有返回值。
> * keys()：返回键名的遍历器。
> * values()：返回键值的遍历器。
> * entries()：返回键值对的遍历器 。
> * forEach()：使用回调函数遍历每个成员。

- 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。

**WeakSet**

WeakSet与Set的区别有两点。
- WeakSet 的成员只能是对象，而不能是其他类型的值。
- WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

**Map**

“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

```javascript
const m = new Map();
const o = {p: 'Hello World'};
```

> * constructor：构造函数，默认就是Map函数。
> * size：返回Map实例的成员总数。
> * set(key, value)：添加某个值，返回 Map 结构。
> * get(key)：读取key对应的键值，如果找不到key，返回undefined。
> * has(key)：返回一个布尔值，表示某个键是否在当前 Map 对象之中。
> * delete(key)：返回true。如果删除失败，返回false。
> * clear()：清除所有成员，没有返回值。
> * keys()：返回键名的遍历器。
> * values()：返回键值的遍历器。
> * entries()：返回键值对的遍历器 。
> * forEach()：使用回调函数遍历每个成员。

与其他数据结构的互相转换

- Map 转为数组。用扩展运算符。
```javascript
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
```
- 数组 转为 Map。用Map构造函数。
```javascript
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
```
- Map 转为对象。用for...of。
```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
```
- 对象转为 Map。用set方法。
```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
```
- Map 转为 JSON
  - Map 的键名都是字符串。用JSON.stringify转。
  - Map 的键名有非字符串。用...转成数组，再用JSON.stringify转。
```javascript
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'

function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'
```

- JSON 转为 Map：用JSON.parse转。
```javascript
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}
```

**WeakMap**

WeakMap与Map的区别有两点。
- 只接受对象作为键名（null除外），不接受其他类型的值作为键名。
- 它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。

# Proxy

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改。target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

```javascript
var proxy = new Proxy(target, handler);
```

- handler没有设置任何拦截，那就等同于直接通向原对象。
```javascript
var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true
```

下面是 Proxy 支持的拦截操作一览，一共 13 种。
拦截方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
get(target, propKey, receiver)|拦截对象属性的读取|属性|否|proxy.foo
set(target, propKey, value, receiver)|拦截对象属性的设置|布尔值|否|proxy.foo = v
has(target, propKey)|拦截propKey in proxy的操作|布尔值|否|propKey in proxy
deleteProperty(target, propKey)|拦截delete proxy[propKey]的操作|布尔值|否|delete proxy[propKey]
ownKeys(target)|拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in的操作|数组|否|
getOwnPropertyDescriptor(target, propKey)|拦截Object.getOwnPropertyDescriptor(proxy, propKey)|属性的描述对象|否|
Object.defineProperty(target, proxy, propDesc)|拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)|布尔值|否|
preventExtensions(target)|拦截Object.preventExtensions(proxy)|布尔值|否|
getPrototypeOf(target)|拦截Object.getPrototypeOf(proxy)|对象|否|
isExtensible(target)|拦截Object.isExtensible(proxy)|布尔值|否|
setPrototypeOf(target, proto)|拦截Object.setPrototypeOf(proxy, proto)|布尔值|否|
apply(target, object, args)|拦截 Proxy 实例作为函数调用的操作||否|proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
construct(target, args)|拦截 Proxy 实例作为构造函数调用的操作||否|new proxy(...args)

**Proxy.revocable()**

> * Proxy.revocable()：方法返回一个可取消的 Proxy 实例。返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。

```javascript
let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked
```

**this 问题**

- Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。

# Reflect
目的：
- 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
- 修改某些Object方法的返回结果，让其变得更合理。
- 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
- Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。

**Reflect静态方法**
拦截方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Reflect.get(target, propKey, receiver)|查找并返回target对象的name属性。如果没有该属性，则返回undefined。|属性|否|Reflect.get(myObject, 'foo') // 1
Reflect.set(target, propKey, value, receiver)|设置target对象的name属性等于value|布尔值|否|Reflect.set(myObject, 'foo', 2);
Reflect.has(target, propKey)|等同于propKey in target|布尔值|否|Reflect.has(myObject, 'foo') // true
Reflect.deleteProperty(target, propKey)|用于删除对象的属性|布尔值|否|Reflect.deleteProperty(myObj, 'foo');
Reflect.ownKeys(target)|拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in的操作|数组|否|
Reflect.getOwnPropertyDescriptor(target, propKey)|基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和|对象的所有属性|否|
Reflect.defineProperty(target, proxy, propDesc)|等同于Object.defineProperty|布尔值|否|
Reflect.preventExtensions(target)|等同于Object.preventExtensions|布尔值|否|Reflect.preventExtensions(myObject) // true
Reflect.getPrototypeOf(target)|用于读取对象的__proto__属性|对象|否|Reflect.getPrototypeOf(myObj)
Reflect.isExtensible(target)|等同于Object.isExtensible|布尔值|否|Reflect.isExtensible(myObject) // true
Reflect.setPrototypeOf(target, proto)|设置对象的__proto__属性|第一个参数对象|否|Reflect.setPrototypeOf(myObj, OtherThing.prototype);
Reflect.apply(target, object, args)|等同于Function.prototype.apply.call(target, object, args)||否|const youngest = Reflect.apply(Math.min, Math, ages);
Reflect.construct(target, args)|等同于new target(...args)||否|const instance = Reflect.construct(Greeting, ['张三']);

# Promise对象

- Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。

> - then(onFulfilled[, onRejected])：第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。返回的是一个新的Promise实例。因此可以采用链式写法。
> - catch(onRejected)：用于指定发生错误时的回调函数。如果没有报错，则会跳过catch方法。
> - finally()：不管 Promise 对象最后状态如何，都会执行的操作
> - Promise.all([promise1[, promise2[, ...[, promiseN]]]])：用于将多个 Promise 实例，包装成一个新的 Promise 实例。
  > - 如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例。
  > - 全部参数实例的状态都变成fulfilled，新实例的状态才会变成fulfilled。
  > - 某个参数实例的状态都变成rejected，新实例的状态会变成rejected。
```javascript
const p = Promise.all([p1, p2, p3]);
```
> - Promise.race([promise1[, promise2[, ...[, promiseN]]]])：将多个 Promise 实例，包装成一个新的 Promise 实例。
  > - 如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例。
  > - 有一个实例率先改变状态，新实例的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给新实例的回调函数。 
```javascript
const p = Promise.race([p1, p2, p3]);
```
> - Promise.resolve(obj)：将现有对象转为 Promise 对象。
  > - obj是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
  > - thenable对象：具有then方法的对象。先将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
  > - 原始值返回一个新的 Promise 对象，状态为resolved。
  > - 不带有任何参数返回一个resolved状态的 Promise 对象。
> - Promise.reject(reason)：返回一个新的 Promise 实例，该实例的状态为rejected。
> - Promise.try()：统一同步异步操作。

# Iterator 和 for...of 循环

遍历器为各种不同的数据结构提供统一的访问机制。

- Iterator 接口主要供for...of消费。
- ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
- Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。该对象的根本特征就是具有next方法。每次调用next方法，都会返回一个代表当前成员的信息对象，具有value和done两个属性。
- 原生具备 Iterator 接口的数据结构如下。Array、Map、Set、String、TypedArray、函数的 arguments 对象、NodeList 对象
- 对于类似数组的对象（存在数值键名和length属性），部署 Iterator 接口，有一个简便方法，就是Symbol.iterator方法直接引用数组的 Iterator 接口。
- 普通对象部署数组的Symbol.iterator方法，并无效果。必须部署了 Iterator 接口后才能使用。
- 字符串是一个类似数组的对象，也原生具有 Iterator 接口。

调用 Iterator 接口的场合：
- for...of
- 解构赋值。对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法。
- 扩展运算符
- yield*
- 任何接受数组作为参数的场合

**遍历器对象的 return()，throw() **

> return()：如果for...of循环提前退出就会调用return方法。
> throw()：throw方法主要是配合 Generator 函数使用，一般的遍历器对象用不到这个方法。

# Generator 函数的语法

提供的一种异步编程解决方案。
```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```
- function关键字与函数名之间有一个星号；
- 函数体内部使用yield表达式，定义不同的内部状态。yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
- Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
- for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
- yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
```javascript
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```

> * Generator.prototype.throw(error)：接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。
> * Generator.prototype.return(str)：返回给定的值，并且终结遍历 Generator 函数。

- yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。
- Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
- Generator 函数也不能跟new命令一起用，会报错。

# ~~Generator 函数的异步应用~~

# async 函数

一句话，它就是 Generator 函数的语法糖。

- async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await。
- async函数的执行，与普通函数一模一样。
- async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
- 返回值是 Promise。如果不是，会被转成一个立即resolve的 Promise 对象。
- await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。
- await命令只能用在async函数之中，如果用在普通函数，就会报错。

```javascript
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}
```

for...of循环用于遍历同步的 Iterator 接口。新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。

```javascript
async function f() {
  for await (const x of createAsyncIterable(['a', 'b'])) {
    console.log(x);
  }
}
```

## 异步 Generator 函数

异步遍历器的设计目的之一，就是 Generator 函数处理同步操作和异步操作时，能够使用同一套接口。

await命令用于将外部操作产生的值输入函数内部，yield命令用于将函数内部的值输出。

```javascript
function fetchRandom() {
  const url = 'https://www.random.org/decimal-fractions/'
    + '?num=1&dec=10&col=1&format=plain&rnd=new';
  return fetch(url);
}

async function* asyncGenerator() {
  console.log('Start');
  const result = await fetchRandom(); // (A)
  yield 'Result: ' + await result.text(); // (B)
  console.log('Done');
}

const ag = asyncGenerator();
ag.next().then(({value, done}) => {
  console.log(value);
})
```

## yield*

- yield*语句也可以跟一个异步遍历器。

# Class 的基本语法

```javascript
class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }

  get prop() {
    return 'getter';
  }
  
  set prop(value) {
    console.log('setter: '+value);
  }
}
```

- 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式
- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
- 类必须使用new调用，否则会报错。
- 类不存在变量提升（hoist），这一点与 ES5 完全不同。
- 一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。父类的静态方法，可以被子类继承。静态方法也是可以从super对象上调用的。
- 目前并不支持静态属性。
- new.target属性用于构造函数。如果不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。子类继承父类时，new.target会返回子类。

```javascript
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

var obj = new Square(3); // 输出 false
```

# Class 的继承

涉及的知识：
构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

```javascript
function Person () {}

Person.prototype // 每个构造函数都有一个原型对象，只有函数才有。涉及到prototype会被实例对象继承。
Person.prototype.constructor // 原型对象都有一个指向构造函数的指针。
Person.prototype.__proto__ // 每个对象都有一个原型，原型对象也有自已的原型。
Person.__proto__ // 每个对象都有一个原型，继承自构造函数的原型对象。
```

Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

例子：
```javascript
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```

- ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
- 在子类的构造函数中，只有调用super之后，才可以使用this关键字。直接调用super()，super指向父类的构造函数，在这里相当于Parent.prototype.constructor.call(this)。super调用的是静态方法，super指向父类的构造函数。调用super的属性和方法时，super指向父类的原型对象。如果使用super的时候，必须显式指定是作为函数、还是作为对象使用

**类的 prototype 属性和__proto__属性**

大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

- 子类的__proto__属性，表示构造函数的继承，总是指向父类。
- 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

```javascript
class A {}

class B extends A {}

B.__proto__ === A // true B继承A的静态属性和方法。当调用静态属性和方法，super指向父类。
B.prototype.__proto__ === A.prototype // true B的实例继承A的实例。当调用继承属性和方法，super指向父类的原型对象。
```

```javascript
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;
```

作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例。

```javascript
Object.create(A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;
```

**原生构造函数的继承**
Boolean()
Number()
String()
Array()
Date()
Function()
RegExp()
Error()
Object()

- ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。

```javascript
function MyArray() {
  Array.apply(this, arguments);   // 借用构造函数继承
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

var colors = new MyArray();
colors[0] = "red";
colors.length  // 0

colors.length = 0;
colors[0]  // "red"
```

# 修饰器

**类的修饰**

- 修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类。
- 修饰器对类的行为的改变，是代码编译时发生的。

例子：
```javascript
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true

@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

**方法的修饰**

- 修饰器第一个参数是类的原型对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象。

```javascript
class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}

function readonly(target, name, descriptor){
  descriptor.writable = false;
  return descriptor;
}
```

**为什么修饰器不能用于函数？**

- 修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。

# Module 的语法

- CommonJS：用于服务器。CommonJS是同步加载模块。这种加载称为“运行时加载”，先整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取方法。

CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}

require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。

```javascript
// moduleA.js  
module.exports = function( value ){  
    return value * 2;  
}

// moduleB.js  
var multiplyBy2 = require('./moduleA');  
var result = multiplyBy2(4);
```
优点：
服务器端便于重用。
NPM中已经将近20w个模块包。
简单并容易使用。

缺点：
同步的模块方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的。
不能非阻塞的并行加载多个模块。

- AMD：用于浏览器。AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。

```javascript
require([module], callback);

require(['math'], function (math) {
　　math.add(2, 3);
});
```

优点：
适合在浏览器环境异步加载。
并行加载多个模块。

缺点：
提高开发成本，代码阅读和书写比较困难。
不符合通用的模块思维方式，是一种妥协的实现。

- CMD：CMD规范和AMD相似，尽量保持简单，并且与CommonJS和NodeJS的Modules规范保持了很大的兼容性。

```javascript
define(function(require, exports, module) {  
  var $ = require('jquery');  
  var Spinning = require('./spinning');  
  exports.doSomething = ...  
  module.exports = ...  
})  
```
优点：
依赖就近，延迟执行。
很容易在node中运行。

缺点：
依赖SPM打包，模块的加载逻辑偏重。

- ES6从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载。

```javascript
// ES6模块
import { stat, exists, readFile } from 'fs';
```

**export 命令**

- export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
- export可以直接输出声明，声明会转为接口对象；输出包含变量的对象；变量使用as关键字重命名的对象。
- export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。  

写法1：
```javascript
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```

**import 命令**

- 想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
- import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。对象属性可以改写，但不建议。
- import命令具有提升效果，会提升到整个模块的头部，首先执行。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。
- import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
- 模块的整体加载：可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。但是不允许改变那个对象。

```javascript
// 写法一
import m from "./m.js";

// 写法二
import {m} from "./m.js";

// 写法三
import {n as m} from "./m.js";

// 写法四
import * as m from './m.js';
console.log('圆面积：' + m.area(4));
console.log('圆周长：' + m.circumference(14));

// 下面两行都是不允许的
m.foo = 'hello';
m.area = function () {};
```

**export default 命令**

用到export default命令，为模块指定默认输出。

- 函数名在模块外部是无效的。加载的时候，视同匿名函数加载。
- 直接export声明的变量会自动转为接口对象。
- 一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
- 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。它后面不能跟变量声明语句，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。

```javascript
// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入

// 写法一
export default function () {
  console.log('foo');
}

// 错误
export default var a = 1;

// 写法二
export default function foo() {
  console.log('foo');
}

// 写法三
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```

**export 与 import 的复合写法**
```javascript
// 接口改名
export { foo as myFoo } from 'my_module';   // foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

// 整体输出
export * from 'my_module';

// 默认接口的写法如下。
export { default } from 'foo';

// 具名接口改为默认接口的写法如下。
export { es6 as default } from './someModule';

// 等同于
import { es6 } from './someModule';
export default es6;

// 默认接口也可以改名为具名接口。
export { default as es6 } from './someModule';

// 下面三种import语句，没有对应的复合写法。
import * as someIdentifier from "someModule";
import someIdentifier from "someModule";
import someIdentifier, { namedIdentifier } from "someModule";
```

**import()**

import()函数，完成动态加载。

# Module的加载实现

**浏览器加载**
- 浏览器加载 ES6 模块，也使用&lt;script>标签，但是要加入type="module"属性。
  - 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
  - 模块脚本自动采用严格模式，不管有没有声明use strict。
  - 模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
  - 模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
  - 同一个模块如果加载多次，将只执行一次。

**ES6 模块与 CommonJS 模块的差异**

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

**Node 加载**

- Node 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。
- ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异。
- 以下这些顶层变量在 ES6 模块之中都是不存在的。
arguments
require
module
exports
__filename
__dirname

**ES6 模块加载 CommonJS 模块**

- CommonJS 模块的输出都定义在module.exports这个属性上面。Node 的import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default xxx。

```javascript
// 写法一
import baz from './a';
// baz = {foo: 'hello', bar: 'world'};

// 写法二
import {default as baz} from './a';
// baz = {foo: 'hello', bar: 'world'};

// 写法三
import * as baz from './a';

// 不正确
import { readFile } from 'fs';

// 正确的写法一
import * as express from 'express';
const app = express.default();

// 正确的写法二
import express from 'express';
const app = express();
```

**CommonJS 模块加载 ES6 模块**

- CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。ES6 模块的所有输出接口，会成为输入对象的属性。

```javascript
// es.mjs
let foo = { bar: 'my-default' };
export default foo;

// cjs.js
const es_namespace = await import('./es.mjs');
```

**CommonJS 模块的循环加载 §**

- CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
- CommonJS 输入的是被输出值的拷贝，不是引用。

**ES6 模块的循环加载**

- ES6 模块是动态引用。

# ArrayBuffer

二进制数组由三类对象组成
- ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。
- TypedArray视图：共包括 9 种类型的视图，比如Uint8Array（无符号 8 位整数）数组视图, Int16Array（16 位整数）数组视图, Float32Array（32 位浮点数）数组视图等等。
- DataView视图：可以自定义复合格式的视图，比如第一个字节是 Uint8（无符号 8 位整数）、第二、三个字节是 Int16（16 位整数）、第四个字节开始是 Float32（32 位浮点数）等等，此外还可以自定义字节序。

简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray 视图用来读写简单类型的二进制数据，DataView视图用来读写复杂类型的二进制数据。

- 二进制数组并不是真正的数组，而是类似数组的对象。

**ArrayBuffer 对象**

ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，视图的作用是以指定格式解读二进制数据。

<<<<<<< HEAD
> * TypedArray(buffer, byteOffset=0, length?)：
  > * 第一个参数（必需）：视图对应的底层ArrayBuffer对象。
  > * 第二个参数（可选）：视图开始的字节序号，默认从 0 开始。
  > * 第三个参数（可选）：视图包含的数据个数，默认直到本段内存区域结束。

```javascript
// 创建一个8字节的ArrayBuffer
const b = new ArrayBuffer(8);

// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾
const v1 = new Int32Array(b);

// 创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾
const v2 = new Uint8Array(b, 2);

// 创建一个指向b的Int16视图，开始于字节2，长度为2
const v3 = new Int16Array(b, 2, 2);
```

视图还可以不通过ArrayBuffer对象，直接分配内存而生成　

```javascript
const f64a = new Float64Array(8);
f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];
```　

> * TypedArray(typedArray)：TypedArray 数组的构造函数，可以接受另一个 TypedArray 实例作为参数。
```javascript
const typedArray = new Int8Array(new Uint8Array(4));
```

> * TypedArray(arrayLikeObject)：构造函数的参数也可以是一个普通数组，然后直接生成 TypedArray 实例。
```javascript
const typedArray = new Uint8Array([1, 2, 3, 4]);
```

TypedArray 数组也可以转换回普通数组。
```javascript
const normalArray = [...typedArray];
// or
const normalArray = Array.from(typedArray);
// or
const normalArray = Array.prototype.slice.call(typedArray);
```

一个占据四个字节的 16 进制数0x12345678，决定其大小的最重要的字节是“12”，最不重要的是“78”。小端字节序将最不重要的字节排在前面，储存顺序就是78563412；大端字节序则完全相反，将最重要的字节排在前面，储存顺序就是12345678。目前，所有个人电脑几乎都是小端字节序，所以 TypedArray 数组内部也采用小端字节序读写数据，或者更准确的说，按照本机操作系统设定的字节序读写数据。

**BYTES_PER_ELEMENT 属性**

```javascript
Int8Array.BYTES_PER_ELEMENT // 1
Uint8Array.BYTES_PER_ELEMENT // 1
Int16Array.BYTES_PER_ELEMENT // 2
Uint16Array.BYTES_PER_ELEMENT // 2
Int32Array.BYTES_PER_ELEMENT // 4
Uint32Array.BYTES_PER_ELEMENT // 4
Float32Array.BYTES_PER_ELEMENT // 4
Float64Array.BYTES_PER_ELEMENT // 8
```

**ArrayBuffer 与字符串的互相转换**

```javascript
// ArrayBuffer 转为字符串，参数为 ArrayBuffer 对象
function ab2str(buf) {
  // 注意，如果是大型二进制数组，为了避免溢出，
  // 必须一个一个字符地转
  if (buf && buf.byteLength < 1024) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }

  const bufView = new Uint16Array(buf);
  const len =  bufView.length;
  const bstr = new Array(len);
  for (let i = 0; i < len; i++) {
    bstr[i] = String.fromCharCode.call(null, bufView[i]);
  }
  return bstr.join('');
}

// 字符串转为 ArrayBuffer 对象，参数为字符串
function str2ab(str) {
  const buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
  const bufView = new Uint16Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
```

**TypedArray.prototype.buffer**

```javascript
const a = new Float32Array(64);
const b = new Uint8Array(a.buffer);
```

**TypedArray.prototype.byteLength**

length属性表示 TypedArray 数组含有多少个成员。注意将byteLength属性和length属性区分，前者是字节长度，后者是成员长度。

```javascript
const a = new Int16Array(8);

a.length // 8
a.byteLength // 16
```

**TypedArray.prototype.set()**

TypedArray 数组的set方法用于复制数组（普通数组或 TypedArray 数组），也就是将一段内容完全复制到另一段内存。

set方法还可以接受第二个参数，表示从b对象的哪一个成员开始复制a对象。

```javascript
const a = new Uint8Array(8);
const b = new Uint8Array(8);

b.set(a);

b.set(a, 2)
```

**TypedArray.prototype.subarray()**

```javascript
const a = new Uint16Array(8);
const b = a.subarray(2,3);

a.byteLength // 16
b.byteLength // 2
```

**TypedArray.prototype.slice()**

```javascript
let ui8 = Uint8Array.of(0, 1, 2);
ui8.slice(-1)
// Uint8Array [ 2 ]
```

**TypedArray.of()**

TypedArray 数组的所有构造函数，都有一个静态方法of，用于将参数转为一个 TypedArray 实例。
```javascript
Float32Array.of(0.151, -8, 3.7)
// Float32Array [ 0.151, -8, 3.7 ]
```

**TypedArray.from()**

静态方法from接受一个可遍历的数据结构（比如数组）作为参数，返回一个基于这个结构的 TypedArray 实例。

from方法还可以接受一个函数，作为第二个参数，用来对每个元素进行遍历，功能类似map方法。

```javascript
Int8Array.of(127, 126, 125).map(x => 2 * x)
// Int8Array [ -2, -4, -6 ]

Int16Array.from(Int8Array.of(127, 126, 125), x => 2 * x)
// Int16Array [ 254, 252, 250 ]
```

**DataView 视图**

ArrayBuffer对象的各种 TypedArray 视图，是用来向网卡、声卡之类的本机设备传送数据，所以使用本机的字节序就可以了；而DataView视图的设计目的，是用来处理网络设备传来的数据，所以大端字节序或小端字节序是可以自行设定的。

DataView视图本身也是构造函数，接受一个ArrayBuffer对象作为参数，生成视图。

```javascript
DataView(ArrayBuffer buffer [, 字节起始位置 [, 长度]]);

const buffer = new ArrayBuffer(24);
const dv = new DataView(buffer);
```
=======
> * ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域。
```javascript
// 分配一段可以存放数据的连续内存区域。
const buf = new ArrayBuffer(32);

// 为了读写这段内容，需要为它指定视图。
const dataView = new DataView(buf);
dataView.getUint8(0) // 0

```

另一种 TypedArray 视图，与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。

```javascript
const buffer = new ArrayBuffer(12);

const x1 = new Int32Array(buffer);
x1[0] = 1;
const x2 = new Uint8Array(buffer);
x2[0]  = 2;

x1[0] // 2

const typedArray = new Uint8Array([0,1,2]);
typedArray.length // 3

typedArray[0] = 5;
typedArray // [5, 1, 2]
```

> * ArrayBuffer.prototype.byteLength：返回所分配的内存区域的字节长度。
> * ArrayBuffer.prototype.slice()：允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象。
> * ArrayBuffer.isView()：返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。

**TypedArray 视图**

同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。ArrayBuffer有两种视图，一种是 TypedArray 视图，另一种是DataView视图。前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。

TypedArray 视图一共包括 9 种类型，每一种视图都是一种构造函数。
- Int8Array：8 位有符号整数，长度 1 个字节。
- Uint8Array：8 位无符号整数，长度 1 个字节。
- Uint8ClampedArray：8 位无符号整数，长度 1 个字节，溢出处理不同。
- Int16Array：16 位有符号整数，长度 2 个字节。
- Uint16Array：16 位无符号整数，长度 2 个字节。
- Int32Array：32 位有符号整数，长度 4 个字节。
- Uint32Array：32 位无符号整数，长度 4 个字节。
- Float32Array：32 位浮点数，长度 4 个字节。
- Float64Array：64 位浮点数，长度 8 个字节。
>>>>>>> f3c9b12b2809a8a3e71210eafbbde3be3bbbebf4



# 总结

**字符串方法扩展**
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

**数值方法扩展**
数值属性和方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Number.isFinite(number)|检查一个数值是否为有限的|布尔值|否|
Number.isNaN(number)|检查一个数值是否为NaN|布尔值|否|
Number.parseInt(number)|与parseInt(number)一样|数值|否
Number.parseFloat(number)|parseFloat(number)一样|数值|否
Number.isInteger(number)|判断一个数值是否为整数|布尔值|否
Number.EPSILON(number)|表示 1 与大于 1 的最小浮点数之间的差|数值|否|Number.EPSILON === Math.pow(2, -52)// true
Number.MAX_SAFE_INTEGER|最大安全数|9007199254740991||
Number.MIN_SAFE_INTEGER|最小安全数|-9007199254740991||
Number.isSafeInteger(number)|用来判断一个整数是否安全范围之内|布尔值|否|
Math.trunc(number)|用于去除一个数的小数部分，返回整数部分。不是数值，先用Number()转成数值|数值|否|
Math.sign(number)|判断一个数到底是正数、负数、还是零|数值|否|Math.sign(NaN) // NaN
Math.cbrt(number)|用于计算一个数的立方根|数值|否|Math.cbrt(2)  // 1.2599210498948734
Math.clz32(number)|一个数的 32 位无符号整数形式有多少个前导 0|数值|否|Math.clz32(0) // 32
Math.imul(number)|一个 32 位的带符号整数|数值|否|Math.imul(2, 4)   // 8
Math.fround(number)|一个数的32位单精度浮点数形式|数值|否|Math.fround(0)   // 0
Math.hypot(number1, number2)|所有参数的平方和的平方根|数值|否|Math.hypot(3, 4);        // 5
Math.expm1(x)||数值|否|Math.expm1(x);        // e<sup>x</sup> - 1
Math.log1p(x)|返回1 + x的自然对数,即 Math.log(1 + x)。如果x小于-1，返回NaN。|数值|否|Math.log(x)        // Math.log1p(1)  // 0.6931471805599453
Math.log10(x)|以 10 为底的x的对数，如果x小于 0，则返回 NaN|数值|否|Math.log10(2)      // 0.3010299956639812
Math.log2(x)|以 2 为底的x的对数，如果x小于 0，则返回 NaN|数值|否|Math.log2(3)      // 1.584962500721156
Math.sinh(x)|x的双曲正弦|数值|否|
Math.cosh(x)|x的双曲余弦|数值|否|
Math.tanh(x)|x的双曲正切|数值|否|
Math.asinh(x)|x的反曲正弦|数值|否|
Math.acosh(x)|x的反曲余弦|数值|否|
Math.atanh(x)|x的反曲正切|数值|否|

**数组方法**
数组属性和方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Array.from(object)|将类似数组的对象和可遍历的对象转为真正的数组|新的数组|否|Array.from({ length: 3 });
Array.of([item1[, item2 [, . . . [, itemN]]]])|将类似数组的对象和可遍历的对象转为真正的数组。如果没有参数，就返回一个空数组|新的数组|否|var {a, b, c} = {a: ["a"], b: ["b"], c: ["c"]};<br>var d = Array.of(a, b, c);
copyWithin(target[, start][, end])|将指定位置的成员复制到其他位置，然后返回当前数组|当前数组|是|[1, 2, 3, 4, 5].copyWithin(0, 3)// [4, 5, 3, 4, 5]
find(fn[, context])|用于找出第一个符合条件的数组成员。如果没有符合条件的成员，则返回undefined。|数组成员|否|[1, 4, -5, 10].find((n) => n < 0) // -5
findIndex(fn[, context])|返回第一个符合条件的数组成员的位置。如果所有成员都不符合条件，则返回-1。|数值|否|[1, 5, 10, 15].findIndex(function(value, index, arr) { <br>   return value > 9;   <br>}) // 2
fill(number[, start][, end])|使用给定值，填充一个数组。还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。|新的数组|否|['a', 'b', 'c'].fill(7, 1, 2)<br>   // ['a', 7, 'c']
entries()|对键值对的遍历|Iterator对象|否|for (let [index, elem] of ['a', 'b'].entries()) {<br>  console.log(index, elem);<br>  }<br>// 0 "a"<br>// 1 "b"
keys()|对键名的遍历|Iterator对象|否|for (let index of ['a', 'b'].keys()) {<br>  console.log(index);<br>  }<br>// 0 <br>// 1 
values()|对键值的遍历|Iterator对象|否|for (let elem of ['a', 'b'].values()) { {<br>  console.log(elem);<br>  }<br>// "a"<br>// "b"
includes()|某个数组是否包含给定的值|布尔值|否|[1, 2, 3].includes(2)     // true

**属性遍历方法**
方法|实例属性|实例不可枚举属性|继承属性|继承不可枚举属性|Symbol|Symbol不可枚举属性
:-|:-|:-|:-|:-|:-|:-
for...in|是|否|是|否|否|否
Object.keys(obj)|是|否|是|否|否|否
Object.getOwnPropertyNames(obj)|是|是|是|是|否|否
Object.getOwnPropertySymbols(obj)|否|否|否|否|是|是
Reflect.ownKeys(obj)|是|是|是|是|是|是

**对象扩展**
对象方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Object.is(obj1, obj2)|比较两个值是否严格相等。不同之处只有两个：一是+0不等于-0，二是NaN等于自身。|布尔值|否|Object.is(NaN, NaN) // true
Object.assign(target[, source1[, source2 [, . . . [, sourceN]]]])|于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）|
Object.getOwnPropertyDescriptor(obj, propertyName)|以获取该属性的描述对象|
Object.keys(obj)|返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名|新的数组|否|
Object.getOwnPropertyNames(obj)|返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名|新的数组|否|
Object.getOwnPropertySymbols(obj)|返回一个数组，包含对象自身的所有 Symbol 属性的键名|新的数组|否|
Reflect.ownKeys(obj)|返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举|否|
Object.getOwnPropertyDescriptors(obj)|返回某个对象属性的描述对象（非继承属性）|对象属性的描述对象|否|
Object.setPrototypeOf(obj, prototype)|用来设置一个对象的prototype对象|原对象|是|const o = Object.setPrototypeOf({}, null);
Object.getPrototypeOf(obj)|读取一个对象的原型对象|原型对象|否|var a = {a: "a"}; Object.getPrototypeOf(obj);
Object.create(obj)|生成一个原型为obj的对象|对象|否|
Object.keys(obj)|返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名|数组|否|
Object.values(obj)|返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值|对象|否|
Object.entries(obj)|返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组|对象|否|

**Proxy拦截操作**
拦截方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
get(target, propKey, receiver)|拦截对象属性的读取|属性|否|proxy.foo
set(target, propKey, value, receiver)|拦截对象属性的设置|布尔值|否|proxy.foo = v
has(target, propKey)|拦截propKey in proxy的操作|布尔值|否|propKey in proxy
deleteProperty(target, propKey)|拦截delete proxy[propKey]的操作|布尔值|否|delete proxy[propKey]
ownKeys(target)|拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in的操作|数组|否|
getOwnPropertyDescriptor(target, propKey)|拦截Object.getOwnPropertyDescriptor(proxy, propKey)|属性的描述对象|否|
Object.defineProperty(target, proxy, propDesc)|拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)|布尔值|否|
preventExtensions(target)|拦截Object.preventExtensions(proxy)|布尔值|否|
getPrototypeOf(target)|拦截Object.getPrototypeOf(proxy)|对象|否|
isExtensible(target)|拦截Object.isExtensible(proxy)|布尔值|否|
setPrototypeOf(target, proto)|拦截Object.setPrototypeOf(proxy, proto)|布尔值|否|
apply(target, object, args)|拦截 Proxy 实例作为函数调用的操作||否|proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
construct(target, args)|拦截 Proxy 实例作为构造函数调用的操作||否|new proxy(...args)

**Reflect静态方法**
拦截方法|作用|返回|改变原值|例子
:-|:-|:-|:-|:-
Reflect.get(target, propKey, receiver)|查找并返回target对象的name属性。如果没有该属性，则返回undefined。|属性|否|Reflect.get(myObject, 'foo') // 1
Reflect.set(target, propKey, value, receiver)|设置target对象的name属性等于value|布尔值|否|Reflect.set(myObject, 'foo', 2);
Reflect.has(target, propKey)|等同于propKey in target|布尔值|否|Reflect.has(myObject, 'foo') // true
Reflect.deleteProperty(target, propKey)|用于删除对象的属性|布尔值|否|Reflect.deleteProperty(myObj, 'foo');
Reflect.ownKeys(target)|拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in的操作|数组|否|
Reflect.getOwnPropertyDescriptor(target, propKey)|基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和|对象的所有属性|否|
Reflect.defineProperty(target, proxy, propDesc)|等同于Object.defineProperty|布尔值|否|
Reflect.preventExtensions(target)|等同于Object.preventExtensions|布尔值|否|Reflect.preventExtensions(myObject) // true
Reflect.getPrototypeOf(target)|用于读取对象的__proto__属性|对象|否|Reflect.getPrototypeOf(myObj)
Reflect.isExtensible(target)|等同于Object.isExtensible|布尔值|否|Reflect.isExtensible(myObject) // true
Reflect.setPrototypeOf(target, proto)|设置对象的__proto__属性|第一个参数对象|否|Reflect.setPrototypeOf(myObj, OtherThing.prototype);
Reflect.apply(target, object, args)|等同于Function.prototype.apply.call(target, object, args)||否|const youngest = Reflect.apply(Math.min, Math, ages);
Reflect.construct(target, args)|等同于new target(...args)||否|const instance = Reflect.construct(Greeting, ['张三']);