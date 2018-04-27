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
