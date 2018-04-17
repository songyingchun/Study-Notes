# 第1章 JavaScript简介
一个完整的JavaScript由三部分组成：核心（ECMAScript）、文档对象模型（DOM）、浏览对象模型（BOM）。

ECMA-262规定了语法、类型、语句、关键字、保留字、操作符、对象

文档对象模型是针对 XML 但经过扩展用于 HTML 的应用程序编程接口。

DOM1 级的目标主要是映射文档的结构。

DOM2 的基础上又扩充了（DHTML 一直都支持的）鼠标和用户界面事件、范围、遍历（迭代 DOM文档的方法）等细分模块：
> * DOM 视图（DOM Views）：定义了跟踪不同文档（例如，应用 CSS 之前和之后的文档）视图的接口；
> * DOM 事件（DOM Events）：定义了事件和事件处理的接口；
> * (DOM 样式（DOM Style）：定义了基于 CSS 为元素应用样式的接口； 
> * DOM 遍历和范围（DOM Traversal and Range）：定义了遍历和操作文档树的接口。

浏览器对BOM的扩展:
> * 弹出新浏览器窗口的功能；
> * 移动、缩放和关闭浏览器窗口的功能；
> * 提供浏览器详细信息的 navigator 对象；
> * 提供浏览器所加载页面的详细信息的 location 对象；
> * 提供用户显示器分辨率详细信息的 screen 对象；
> * 对 cookies 的支持；
> * 像 XMLHttpRequest 和 IE的 ActiveXObject 这样的自定义对象。

**小结**
JavaScript 是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：
> * ECMAScript，由 ECMA-262 定义，提供核心语言功能；
> * 文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
> * 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。

# 第2章 在HTML中使用JavaScript

HTML 4.01 为&lt;script> 定义了下列 6 个属性：
> * async ：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或
等待加载其他脚本。只对外部脚本文件有效。
> * charset ：可选。表示通过 src 属性指定的代码的字符集。
> * defer ：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有
效。IE7 及更早版本对嵌入脚本也支持这个属性。
> * language ：已废弃。
> * src ：可选。表示包含要执行代码的外部文件。
> * type ：可选。可以看成是 language 的替代属性。

通过 &lt;script> 元素的 src 属性还可以包含来自外部域的 JavaScript 文件。在这一点上， &lt;script> 与 <img> 元素非常相似，即它的 src属性可以是指向当前 HTML 页面所在域之外的某个域中的完整URL。

## 标签的位置
浏览器在遇到 &lt;body> 标签时才开始呈现内容。会导致浏览器在呈现页面时出现明显的延迟，而延迟期间的浏览器窗口中将是一片空白。为了避免这个问题，现代 Web 应用程序一般都把全部 JavaScript 引用放在 &lt;body> 元素中页面内容的后面。

## 延迟脚本

在 &lt;script> 元素中设置defer 属性，相当于告诉浏览器立即下载，但延迟执行。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTML Page</title>
        <script type="text/javascript" defer="defer" src="example1.js"></script>
        <script type="text/javascript" defer="defer" src="example2.js"></script>
    </head>
    <body>
    <!-- 这里放内容 -->
    </body>
</html>
```

## 异步脚本

async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与 defer不同的是，标记为 async 的脚本并不保证按照指定它们的先后顺序执行。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTML Page</title>
        <script type="text/javascript" async src="example1.js"></script>
        <script type="text/javascript" async src="example2.js"></script>
    </head>
    <body>
    <!-- 这里放内容 -->
    </body>
</html>
```

## 嵌入代码与外部文件

> * 可维护性
> * 可缓存
> * 适应未来

## 文档模式

标准模式：

```html
<!-- HTML 4.01 严格型 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 严格型 -->
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- HTML 5 -->
<!DOCTYPE html>
```

准标准模式：

```html
<!-- HTML 4.01 过渡型 -->
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML 4.01 框架集型 -->
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- XHTML 1.0 过渡型 -->

<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- XHTML 1.0 框架集型 -->

<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

## &lt;noscript> 元素
当浏览器不支持 JavaScript 时如何让页面平稳地退化。这个元素可以包含能够出现在文档 &lt;body> 中的任何 HTML 元素&lt;script> 元素除外。


# 第3章 基本概念

## 语法
### 区分大小写

变量区分大小写

### 标识符

标识符，就是指变量、函数、属性的名字，或者函数的参数。

> * 第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）；
> * 其他字符可以是字母、下划线、美元符号或数字。

标识符中的字母也可以包含扩展的 ASCII或 Unicode字母字符（如 À和 Æ）。

### 注释

```html
// 单行注释

/*
* 这是一个多行
* （块级）注释
*/
```

### 语句
语句以一个分号结尾；如果省略分号，则由解析器确定语句的结尾。

### 关键字和保留字

**关键字：**

```
break do instanceof typeof
case else new var
catch finally return void
continue for switch while
debugger* function this with
default if throw
delete in try
```

**保留字：**

```
abstract enum int short
boolean export interface static
byte extends long super
char final native synchronized
class float package throws
const goto private transient
debugger implements protected volatile
double import public
```

第 5 版把在非严格模式下运行时的保留字缩减为下列这些：

```
class enum extends super
const export import
```

在严格模式下，第 5 版还对以下保留字施加了限制：

```
implements package public
interface private static
let protected yield
```

## 数据类型

5 种简单数据类型Undefined 、 Null 、 Boolean 、 Number和 String。
复杂数据类型—— Object，Object 本质上是由一组无序的名值对组成的。

### typeof

> * "undefined" ——如果这个值未定义；
> * "boolean" ——如果这个值是布尔值；
> * "string" ——如果这个值是字符串；
> * "number" ——如果这个值是数值；
> * "object" ——如果这个值是对象或null；
> * "function" ——如果这个值是函数。

### Undefined 类型
因为未经初始化的值默认就会取得 undefined 值。

### Null 类型
null 值表示一个空对象指针，而这也正是使用 typeof 操作符检测 null 值时会返回 "object" 的原因。

undefined 值是派生自 null 值的，因此 ECMA-262规定对它们的相等性测试要返回 true 。

```javascript
alert(null == undefined); //true
```

### Boolean 类型
要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()。

数据类型|true|false  
:-:|:-:|:-:
Boolean|true|false
String|任何非空字符串|""
Number|任何非零数字值（包括无穷大）|0和 NaN 
Object|任何对象|null
Undefined|n/a|undefined

### Number 类型

八进制|十六进制
:-:|:-:
0|0x

**浮点数值**

浮点数值需要的内存空间是保存整数值的两倍，因此 ECMAScript会不失时机地将浮点数值转换为整数值。

* 小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。
* 如果浮点数值本身表示的就是一个整数（如 1.0），那么该值也会被转换为整数。

极大或极小的数值，可以用 e 表示法。

```javascript
var floatNum = 3.125e7;
```

浮点数值的最高精度是 17 位小数

```javascript
0.1 + 0.2  ==  0.30000000000000004
```

**数值范围**

Number.MIN_VALUE：5e-324
Number.MAX_VALUE：1.7976931348623157e+308

isFinite() 函数。这个函数在参数位于最小与最大数值之间时会返回 true 。

**NaN**

这个数值用于表示一个本来要返回数值的操作数未返回数值的情况。

NaN 与任何值都不相等，包括 NaN 本身。

```javascript
alert(NaN == NaN); //false
```

isNaN() 帮我们确定这个参数是否“不是数值”。

isNaN() 也适用于对象。

有 3 个函数可以把非数值转换为数值： Number() 、 parseInt() 和 parseFloat() 。

Number() 函数的转换规则如下。
> * 如果是 Boolean 值， true 和 false 将分别被转换为 1 和 0。
> * 如果是数字值，只是简单的传入和返回。
> * 如果是 null 值，返回 0
> * 如果是字符串，遵循下列规则：
>   * 如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即 "1"会变成 1， "123" 会变成 123，而 "011" 会变成 11（注意：前导的零被忽略了）；
>   * 如果字符串中包含有效的浮点格式，如 "1.1" ，则将其转换为对应的浮点数值（同样，也会忽略前导零）；
>   * 如果字符串中包含有效的十六进制格式，例如 "0xf" ，则将其转换为相同大小的十进制整数值；
>   * 如果字符串是空的（不包含任何字符），则将其转换为 0；
>   * 如果字符串中包含除上述格式之外的字符，则将其转换为 NaN 。
> * 如果是对象，则调用对象的 valueOf() 方法，然后依照前面的规则转换返回的值。如果转换的结果是 NaN ，则调用对象的 toString() 方法，然后再次依照前面的规则转换返回的字符串值。

parseInt() 它会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或者负号， parseInt()就会返回 NaN （ Number() 对空字符返回 0）；如果第一个字符是数字字符， parseInt() 会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个非数字字符。

```javascript
var num1 = parseInt("1234blue"); // 1234
var num2 = parseInt(""); // NaN
var num3 = parseInt("0xA"); // 10（十六进制数）
var num4 = parseInt(22.5); // 22
var num5 = parseInt("070"); // 56（八进制数）
var num6 = parseInt("70"); // 70（十进制数）
var num7 = parseInt("0xf"); // 15（十六进制数）
```

要解析的值是十六进制格式的字符串，那么指定基数 16 作为第二个参数。

```javascript
var num = parseInt("0xAF", 16); //175

var num1 = parseInt("10", 2); //2 （按二进制解析）
var num2 = parseInt("10", 8); //8 （按八进制解析）
var num3 = parseInt("10", 10); //10 （按十进制解析）
var num4 = parseInt("10", 16); //16 （按十六进制解析）
```

### String 类型

String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列

**字符字面量**
字面量|含义
:-|:-
\n|换行
\t|制表
\b|空格
\r|回车
\f|进纸
\\|斜杠
\'|单引号
\"|双引号
\xnn|以十六进制代码 nn 表示的一个字符（其中 n 为0～F）
\unnnn|以十六进制代码 nnnn 表示的一个Unicode字符（其中 n 为0～F）

**字符串的特点**
如果字符串中包含双字节字符，那么 length 属性可能不会精确地返回字符串中的字符数目。

**转换为字符串**
数值、布尔值、对象和字符串值都有 toString() 方法。但 null 和 undefined 值没有这个方法。在调用数值的 toString() 方法时，可以传递一个参数：输出数值的基数。

在不知道要转换的值是不是 null 或 undefined 的情况下，还可以使用转型函数 String()。
> * 如果值有 toString() 方法，则调用该方法（没有参数）并返回相应的结果；
> * 如果值是 null ，则返回 "null" ；
> * 如果值是 undefined ，则返回 "undefined" 。

### Object 类型
ECMAScript 中的对象其实就是一组数据和功能的集合。

Object 的每个实例都具有下列属性和方法。
> * constructor ：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是 Object() 。
> * hasOwnProperty(propertyName) ：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。
> * isPrototypeOf(object) ：用于检查传入的对象是否是传入对象的原型。
> * propertyIsEnumerable(propertyName) ：用于检查给定的属性是否能够使用 for-in 语句来枚举。
> * toLocaleString() ：返回对象的字符串表示，该字符串与执行环境的地区对应。
> * toString() ：返回对象的字符串表示。
> * 返回对象的字符串、数值或布尔值表示。通常与 toString() 方法的返回值
相同。

## 操作符

### ~~一元操作符~~
只能操作一个值的操作符叫做一元操作符。

**递增和递减操作符**

递增和递减操作符遵循下列规则。
> * 在应用于一个包含有效数字字符的字符串时，先将其转换为数字值，再执行加减 1 的操作。字符串变量变成数值变量。
> * 在应用于一个不包含有效数字字符的字符串时，将变量的值设置为 NaN。字符串变量变成数值变量。
> * 在应用于布尔值 false 时，先将其转换为 0 再执行加减 1 的操作。布尔值变量变成数值变量。
> * 在应用于布尔值 true 时，先将其转换为 1 再执行加减 1 的操作。布尔值变量变成数值变量。
> * 在应用于浮点数值时，执行加减 1 的操作。
> * 在应用于对象时，先调用对象的 valueOf() 方法以取得一个可供操作的值。然后对该值应用前述规则。如果结果是 NaN ，则在调用 toString() 方法后再应用前述规则。对象变量变成数值变量。


**一元加和减操作符**

该操作符会像 Number() 转型函数一样对这个值执行转换。

### 位操作符
位操作符并不直接操作 64 位的值。先将 64 位的值转换成 32 位的整数，然后执行操作，最后再将结果转换回 64 位。

对于有符号的整数，32 位中的前 31 位用于表示整数的值。第 32 位用于表示数值的符号：0 表示正数，1 表示负数。这个表示符号的位叫做符号位。

负数同样以二进制码存储，但使用的格式是二进制补码。
1. 求这个数值绝对值的二进制码（例如，要求18 的二进制补码，先求 18 的二进制码）；
2. 求二进制反码，即将 0 替换为 1，将 1 替换为 0；
3. 得到的二进制反码加 1。

当对数值应用位操作符时，后台会发生如下转换过程：64 位的数值被转换成 32位数值，然后执行位操作，最后再将 32 位的结果转换回 64 位数值。但这个转换过程也导致了一个严重的副效应，即在对特殊的 NaN 和 Infinity 值应用位操作时，这两个值都会被当成 0 来处理。

**按位非（NOT）**
按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码。

```javascript
var num1 = 25; // 二进制 00000000000000000000000000011001
var num2 = ~num1; // 二进制 11111111111111111111111111100110
alert(num2); // -26
```

**按位与（AND）**
按位与操作符由一个和号字符（ & ）表示。按位或操作在有一个位是 1的情况下就返回1。

第一个数值的|第二个数值的位|结 果
-|-|-
1 | 1 | 1
1 | 0 | 1
0 | 1 | 1
0 | 0 | 0

```javascript
25  = 0000 0000 0000 0000 0000 0000 0001 1001
3   = 0000 0000 0000 0000 0000 0000 0000 0011
---------------------------------------------
AND = 0000 0000 0000 0000 0000 0000 0000 0001
```

**按位或（OR）**
按位或操作符由一个竖线符号（|）表示。按位或操作在有一个位是 1的情况下就返回 1。

第一个数值的|第二个数值的位|结 果
-|-|-
1 | 1 | 1
1 | 0 | 1
0 | 1 | 1
0 | 0 | 0

```javascript
25 = 0000 0000 0000 0000 0000 0000 0001 1001
3  = 0000 0000 0000 0000 0000 0000 0000 0011
--------------------------------------------
OR = 0000 0000 0000 0000 0000 0000 0001 1011
```

**按位异或（XOR）**
按位异或操作符由一个插入符号（^）表示。在两个数值对应位上只有一个 1 时才返回 1。

第一个数值的|第二个数值的位|结 果
-|-|-
1 | 1 | 0
1 | 0 | 1
0 | 1 | 1
0 | 0 | 0

```javascript
25 = 0000 0000 0000 0000 0000 0000 0001 1001
3 = 0000 0000 0000 0000 0000 0000 0000 0011
---------------------------------------------
XOR = 0000 0000 0000 0000 0000 0000 0001 1010
```

~~**左移**~~
左移操作符由两个小于号（<<）表示，这个操作符会将数值的所有位向左移动指定的位数。左移不会影响操作数的符号位。

~~**有符号的右移**~~
有符号的右移操作符由两个大于号（>>）表示，这个操作符会将数值向右移动，但保留符号位（即正负号标记）。

**无符号右移**
无符号右移操作符由 3 个大于号（>>>）表示，这个操作符会将数值的所有 32 位都向右移动。无符号右移操作符会把负数的二进制码当成正数的二进制码。

### ~~布尔操作符~~

~~**逻辑非**~~
逻辑非操作符由一个叹号（！）表示。
> * 如果操作数是一个对象，返回 false ；
> * 如果操作数是一个空字符串，返回 true ；
> * 如果操作数是一个非空字符串，返回 false ；
> * 如果操作数是数值 0，返回 true ；
> * 如果操作数是任意非 0 数值（包括 Infinity ），返回 false ；
> * 如果操作数是 null ，返回 true ；
> * 如果操作数是 NaN ，返回 true ；
> * 如果操作数是 undefined ，返回 true 。

~~**逻辑与**~~
逻辑与操作符由两个和号（ && ）表示。

第一个操作数|第二个操作数|结 果
-|-|-
true | true | true
true | false | false
false | true | false
false | false | false

> * 如果第一个操作数是对象，则返回第二个操作数；
> * 如果第二个操作数是对象，则只有在第一个操作数的求值结果为true 的情况下才会返回该对象；
> * 如果两个操作数都是对象，则返回第二个操作数；
> * 如果有一个操作数是 null ，则返回 null ；
> * 如果有一个操作数是 NaN ，则返回 NaN ；
> * 如果有一个操作数是 undefined ，则返回 undefined 。

~~**逻辑或**~~
逻辑或操作符由两个竖线符号（ || ）表示。

第一个操作数|第二个操作数|结 果
-|-|-
true | true | true
true | false | true
false | true | true
false | false | false

> * 如果第一个操作数是对象，则返回第一个操作数；
> * 如果第一个操作数的求值结果为 false ，则返回第二个操作数；
> * 如果两个操作数都是对象，则返回第一个操作数；
> * 如果两个操作数都是 null ，则返回 null ；
> * 如果两个操作数都是 NaN ，则返回 NaN ；
> *  如果两个操作数都是 undefined ，则返回 undefined 。

### 乘性操作符
ECMAScript 定义了 3 个乘性操作符：乘法、除法和求模。如果参与乘性计算的某
个操作数不是数值，后台会先使用 Number() 转型函数将其转换为数值。

**乘法**
乘法操作符由一个星号（ * ）表示。

> * 如果操作数都是数值，执行常规的乘法计算，即两个正数或两个负数相乘的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果乘积超过了 ECMAScript 数值的表示范围，则返回 Infinity 或 -Infinity ；
> * 如果有一个操作数是 NaN ，则结果是 NaN ；
> * 如果是 Infinity 与 0 相乘，则结果是 NaN ；
> * 如果是 Infinity 与非 0 数值相乘，则结果是 Infinity 或 -Infinity ，取决于有符号操作数的符号；
> * 如果是 Infinity 与 Infinity 相乘，则结果是 Infinity ；
> * 如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。

**除法**
除法操作符由一个斜线符号（/）表示。

> * 如果操作数都是数值，执行常规的除法计算，即两个正数或两个负数相除的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果商超过了 ECMAScript 数值的表示范围，则返回 Infinity 或 -Infinity ；
> * 如果有一个操作数是 NaN ，则结果是 NaN ；
> * 如果是 Infinity 被 Infinity 除，则结果是 NaN ；
> * 如果是零被零除，则结果是 NaN ；
> * 如果是非零的有限数被零除，则结果是 Infinity 或 -Infinity ，取决于有符号操作数的符号；
> * 如果是 Infinity 被任何非零数值除，则结果是 Infinity 或 -Infinity ，取决于有符号操作数的符号；
> * 如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。

**求模**
求模（余数）操作符由一个百分号（ % ）表示。

> * 如果操作数都是数值，执行常规的除法计算，返回除得的余数；
> * 如果被除数是无穷大值而除数是有限大的数值，则结果是 NaN ；
> * 如果被除数是有限大的数值而除数是零，则结果是 NaN ；
> * 如果是 Infinity 被 Infinity 除，则结果是 NaN ；
> * 如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；
> * 如果被除数是零，则结果是零；
> * 如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。

### 加性操作符

~~**加法**~~

加法操作符（+）。

如果两个操作符都是数值。
> * 如果有一个操作数是 NaN ，则结果是 NaN ；
> * 如果是 Infinity 加 Infinity ，则结果是 Infinity ；
> * 如果是 -Infinity 加 -Infinity ，则结果是 -Infinity ；
> * 如果是 Infinity 加 -Infinity ，则结果是 NaN ；
> * 如果是+0 加+0，则结果是+0；
> * 如果是-0 加-0，则结果是-0；
> * 如果是+0 加-0，则结果是+0。
> * 如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来；
> * 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来。
> * 如果有一个操作数是对象、数值，则调用它们的 toString() 方法取得相应的字符串值，然后再应用前面关于字符串的规则。
> * 如果有一个是布尔值，则调用Number()方法取得相应的数值。
> * 对于 undefined 和 null ，则分别调用 String() 函数并取得字符串 "undefined" 和 "null" 。

~~**减法**~~

减法操作符（-）。

> * 如果两个操作符都是数值，则执行常规的算术减法操作并返回结果；
> * 如果有一个操作数是 NaN ，则结果是 NaN ；
> * 如果是 Infinity 减 Infinity ，则结果是 NaN ；
> * 如果是 -Infinity 减 -Infinity ，则结果是 NaN ；
> * 如果是 Infinity 减 -Infinity ，则结果是 Infinity ；
> * 如果是 -Infinity 减 Infinity ，则结果是 -Infinity ；
> * 如果是+0 减+0，则结果是+0；
> * 如果是+0 减-0，则结果是-0；
> * 如果是-0 减-0，则结果是+0；
> * 如果有一个操作数是字符串、布尔值、 null 或 undefined ，则先在后台调用 Number() 函数将其转换为数值，然后再根据前面的规则执行减法计算。如果转换的结果是 NaN ，则减法的结果就是 NaN ；
> *  如果有一个操作数是对象，则调用对象的 valueOf() 方法以取得表示该对象的数值。如果得到的值是 NaN ，则减法的结果就是 NaN 。如果对象没有 valueOf() 方法，则调用其 toString()方法并将得到的字符串转换为数值。

### 关系操作符
小于（<）、大于（>）、小于等于（<=）和大于等于（>=）

> * 如果两个操作数都是数值，则执行数值比较。
> * 如果两个操作数都是字符串，则比较两个字符串对应的字符编码值。
> * 如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。
> *  如果一个操作数是对象，则调用这个对象的 valueOf() 方法，用得到的结果按照前面的规则执行比较。如果对象没有 valueOf() 方法，则调用 toString() 方法，并用得到的结果根据前面的规则执行比较。
> *  如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。

### 相等操作符

**相等和不相等**
> * 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值—— false 转换为 0，而
true 转换为 1；
> * 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值；
> * 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类
型值按照前面的规则进行比较；
> * null 和 undefined 是相等的。
> * 要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。
> * 如果有一个操作数是 NaN ，则相等操作符返回 false ，而不相等操作符返回 true 。重要提示：
即使两个操作数都是 NaN ，相等操作符也返回 false ；因为按照规则， NaN 不等于 NaN 。
> * 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，
则相等操作符返回 true ；否则，返回 false 。

~~**全等和不全等**~~

### ~~条件操作符~~

```javascript
var max = (num1 > num2) ? num1 : num2;
```
~~**赋值操作符**~~

> * 乘/赋值（ *= ）;
> * 除/赋值（ /= ）；
> * 模/赋值（ %= ）；
> * 加/赋值（ += ）；
> * 减/赋值（ = ）；
> * 左移/赋值（ <<= ）；
> * 有符号右移/赋值（ >>= ）；
> * 无符号右移/赋值（ >>>= ）。

### ~~逗号操作符~~

使用逗号操作符可以在一条语句中执行多个操作。

## ~~语句~~

### ~~do-while~~

do-while 语句是一种后测试循环语句。循环体内的代码至少会被执行一次。

do {
    statement
} while (expression);

### ~~while~~

while 语句属于前测试循环语句，也就是说，在循环体内的代码被执行之前。

while(expression) statement

### ~~for语句~~

for 语句也是一种前测试循环语句，但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力。

for (initialization; expression; post-loop-expression) statement

### ~~for-in 语句~~

for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性。先检测确认该对象的值不是 null 或 undefined 。

for (property in expression) statement

### ~~label语句~~
使用 label 语句可以在代码中添加标签，以便将来使用。

### ~~break 和 continue 语句~~

```javascript
var num = 0;
outermost:
    for (var i=0; i < 10; i++) {
        for (var j=0; j < 10; j++) {
            if (i == 5 && j == 5) {
            continue outermost;
        }
    num++;
    }
}
alert(num); //95
```

### ~~with 语句~~

with 语句的作用是将代码的作用域设置到一个特定的对象中。

with (expression) statement;

### ~~switch 语句~~

switch 语句中使用任何数据类型。每个 case 的值不一定是常量，可以是变量，甚至是表达式。

```javascript
switch ("hello world") {
    case "hello" + " world":
        alert("Greeting was found.");
        break;
    case "goodbye":
        alert("Closing was found.");
        break;
    default:
        alert("Unexpected message was found.");
}
```

## 第4章 变量、作用域和内存问题

### 基本类型和引用类型的值

基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值。

引用类型的值是保存在内存中的对象。JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。为此，引用类型的值是按引用访问的。

### 传递参数

ECMAScript 中所有函数的参数都是按值传递的。基本类型值的传递如同基本类型变量的复制一样，而引用类型值的传递，则如同引用类型变量的复制一样。

### 检测类型

instanceof语法：
result = variable instanceof constructor

## 执行环境及作用域

当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。

当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端，始终都是当前执行的代码所在环境的变量对象。如果这个环境是函数，则将其活动对象（activation object）作为变量对象。活动对象在最开始时只包含一个变量，即 arguments 对象（这个对象在全局环境中是不存在的）。作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含环境。这样，一直延续到全局执行环境；全局执行环境的变量对象始终都是作用域链中的最后一个对象。

[arguments, 外部环境变量，下一个外部环境变量]

### 延长作用域链

> * try-catch 语句的 catch 块；
> * with 语句。

这两个语句都会在作用域链的前端添加一个变量对象。对 with 语句来说，会将指定的对象添加到作用域链中。对 catch 语句来说，会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。

### ~~没有块级作用域~~

## 垃圾收集

### 标记清除

垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。

### 引用计数

引用计数的含义是跟踪记录每个值被引用的次数。

循环引用指的是对象 A 中包含一个指向对象 B 的指针，而对象 B 中也包含一个指向对象 A 的引用。

当函数执行完毕后， objectA 和 objectB 还将继续存在，因为它们的引用次数永远不会是 0。假如这个函数被重复多次调用，就会导致大量内存得不到回收。

## 小结

~~基本类型值和引用类型值：~~

> * 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
> * 从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本；
> * 引用类型的值是对象，保存在堆内存中；
> * 包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针；
> * 从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同一个对象；
> * 确定一个值是哪种基本类型可以使用 typeof 操作符，而确定一个值是哪种引用类型可以使用instanceof 操作符。

执行环境：

> * 执行环境有全局执行环境（也称为全局环境）和函数执行环境之分；
> * 每次进入一个新执行环境，都会创建一个用于搜索变量和函数的作用域链；
> * 函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含（父）环境，乃至全局环境；
> * 全局环境只能访问在全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据；
> * 变量的执行环境有助于确定应该何时释放内存。

~~垃圾收集：~~

> * 离开作用域的值将被自动标记为可以回收，因此将在垃圾收集期间被删除。
> * “标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存。
> * 另一种垃圾收集算法是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数。JavaScript引擎目前都不再使用这种算法；但在 IE 中访问非原生 JavaScript 对象（如 DOM 元素）时，这种算法仍然可能会导致问题。
> * 当代码中存在循环引用现象时，“引用计数”算法就会导致问题。
> * 解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回收内存，应该及时解除不再使用的全局对象、全局对象属性以及循环引用变量的引用。

# 第5章 引用类型

## Array 类型

数组的 length 属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。

instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的 Array 构造函数。如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。为了解决这个问题，ECMAScript 5 新增了 Array.isArray() 方法。这个方法的目的是最终确定某个值到底是不是数组，而不管它是在哪个全局执行环境中创建的。

### 转换方法

toString() 方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。

valueOf() 返回的还是数组。

当调用数组的 toLocaleString() 方法时，它也会创建一个数组值的以逗号分隔的字符串。为了取得每一项的值，调用的是每一项的 toLocaleString() 方法，而不是 toString() 方法。

### 栈方法

栈是一种 LIFO（Last-In-First-Out，后进先出）的数据结构，也就是最新添加的项最早被移除。

> * push([item1[, item2 [, . . . [, itemN]]]])：可以接收任意数量的参数，把它们逐个添加到数组末尾，并**返回修改后数组的长度**。
> * pop()：从数组末尾移除最后一项，减少数组的 length 值，然后**返回移除的项**。

### 队列方法

队列数据结构的访问规则是 FIFO（First-In-First-Out，先进先出）。

> * unshift([item1[, item2 [, . . . [, itemN]]]])：在数组前端添加任意个项并**返回新数组的长度**。
> * shift()：它能够移除数组中的第一个项并**返回该项**。

### 重排序方法

> * reverse()：反转数组项的顺序。
> * sort([sortFunction])：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。 sort() 方法会调用每个数组项的 toString() 转型方法，然后比较得到的字符串，以确定如何排序。

正序顺序：

```javascript
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
```

### 操作方法

> * concat([item1[, item2 [, . . . [, itemN]]]])：这个方法会先创建当前数组一个副本，然后将接收到的参数
添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat() 方法传递参数的情况下，它只是复制当前数组并返回副本。如果传递给 concat() 方法的是一或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中。
> * slice([start, end])：基于当前数组中的一或多个项创建一个新数组。
> * splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])：向数组的中部插入项。

### 位置方法

> * indexOf([searchElement[, fromIndex]])：返回某个值在数组中的第一个匹配项的索引。两个参数分为是要查找的项和（可选的）表示查找起点位置的索引。
> * lastIndexOf(searchElement[, fromIndex])：返回指定的值在数组中的最后一个匹配项的索引。两个参数分为是要查找的项和（可选的）表示查找起点位置的索引。

### 迭代方法

> * every(fn[, context])：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true ，则返回 true 。
> * filter(fn[, context])：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
> * forEach(fn[, context])：对数组中的每一项运行给定函数。这个方法没有返回值。
> * map(fn[, context])：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
> * some(fn[, context])：对数组中的每一项运行给定函数，如果该函数对任一项返回 true ，则返回 true 。

### 归并方法

> * reduce(callbackfn[, initialValue])：从数组的第一项开始，逐个遍历到最后。迭代数组的所有项，然后构建一个最终返回的值。
> * reduceRight(callbackfn[, initialValue])：从数组的最后一项开始，向前遍历到第一项。迭代数组的所有项，然后构建一个最终返回的值。

```javascript
var values = [1,2,3,4,5];
    var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15
```

方法|参数|作用|返回|是否改变原数组
:-|:-|:-|:-|:-
push|([item1[, item2 [, . . . [, itemN]]]])|逐个添加到数组末尾|修改后数组的长度|是
pop|无|从数组末尾移除最后一项|移除的项|是
unshift|([item1[, item2 [, . . . [, itemN]]]])|在数组前端添加任意个项|新数组的长度|是
shift|无|移除的项|添加的项|是
reverse|无|反转数组项的顺序|排序后的数组|是
sort|([sortFunction])|没有参数时，每个数组项调用toString() 转型方法，然后比较得到的字符串，以确定如何排序。有参数时，按函数返回值确定如何排序，小于0为正序，大于0为反序。|排序后的数组|是
concat|([item1[, item2 [, . . . [, itemN]]]])|创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。如果参数是数组，则把每一项添加到结果数组中。|新数组。|否
slice|([start, end])|基于当前数组中的一或多个项创建一个新数组。|新数组|否
splice|(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])|向数组的中部插入项。|原数组改变。返回删除的数组|是
indexOf|([searchElement[, fromIndex]])|某个值在数组中的第一个匹配项的索引|匹配项的索引|否
lastIndexOf|([searchElement[, fromIndex]])|某个值在数组中的最后一个匹配项的索引|匹配项的索引|否
every|(fn[, context])|检测每一项是否满足条件|布尔值|否
filter|(fn[, context])|过滤数组|筛选的数组|否
forEach|(fn[, context])|每一项运行给定函数|无|否
map|(fn[, context])|每次函数调用的结果组成的数组|新数组|否
some|(fn[, context])|检测某一项是否满足条件|布尔值|否
reduce|(callbackfn[, initialValue])|顺序迭代数组的所有项，然后构建一个最终返回的值。|根据返回值|否
reduceRight|(callbackfn[, initialValue])|反序迭代数组的所有项，然后构建一个最终返回的值。|根据返回值|否


## Date 类型

UTC 时间 1970 年 1 月 1 日午夜起至该日期止经过的毫秒数。

> * Date.parse(dateVal)：分析一个包含日期的字符串，并返回该日期与 1970 年 1 月 1 日午夜之间相差的毫秒数。

dateVal参数：
> * 月/日/年”，如 6/13/2004；
> * “英文月名 日,年”，如 January 12,2004；
> * 英文星期几 英文月名 日 年 时:分:秒 时区”，如 Tue May 25 2004 00:00:00 GMT-0700。
> * ISO 8601 扩展格式 YYYY-MM-DDTHH:mm:ss.sssZ（例如 2004-05-25T00:00:00）。只有兼容ECMAScript 5的实现支持这种格式。

> * Date.UTC(year, month, day[, hours[, minutes[, seconds[,ms]]]])：返回协调通用时间 (UTC)（或 GMT）1970 年 1 月 1 日午夜与所指定的日期之间相差的毫秒数。

参数：
> * year必需。为了确保跨世纪日期的精确性，需要指定完整的年份。如果year 处于0 到 99 之间，则 year 就被假定为 1900 + year。
> * month必需。月份，用从 0 到 11 的整数表示（1 月至 12 月）。 
> * day必需。日期，用从 1 到 31 的整数表示。   
> * hours可选。如果提供了 minutes，则必须提供此参数。一个指定小时的，从 0 到 23 的整数（午夜到 11pm）。
> * minutes可选。如果提供了 seconds，则必须提供此参数。  一个指定分钟的，从 0 到 59 的整数。
> * seconds可选。如果提供了 milliseconds，则必须提供此参数。  一个指定秒的，从 0 到 59 的整数。  
> * ms可选。一个指定毫秒的，从 0 到 999 的整数。

> *  Data.now()：返回表示调用这个方法时的日期和时间的毫秒数。

### ~~继承的方法~~
Date 类型也重写了 toLocaleString() 、 toString() 和 valueOf() 方法。

Date 类型的 toLocaleString() 方法会按照与浏览器设置的地区相适应的格式返回日期和时间。这大致意味着时间格式中会包含 AM 或 PM，但不会包含时区信息（当然，具体的格式会因浏览器而异）。

而 toString() 方法则通常返回带有时区信息的日期和时间，其中时间一般以军用时间（即小时的范围是 0 到 23）表示。

Date 类型的 valueOf() 方法，则根本不返回字符串，而是返回日期的毫秒表示。

### ~~日期格式化方法~~

> * Date.toDateString()：以特定于实现的格式显示星期几、月、日和年；
> * Date.toTimeString()：以特定于实现的格式显示时、分、秒和时区；
> * Date.toLocaleDateString()：以特定于地区的格式显示星期几、月、日和年；
> * Date.toLocaleTimeString()：以特定于实现的格式显示时、分、秒；
> * Date.toUTCString()：以特定于实现的格式完整的 UTC 日期。

与 toLocaleString() 和 toString() 方法一样，以上这些字符串格式方法的输出也是因浏览器而异的，因此没有哪一个方法能够用来在用户界面中显示一致的日期信息。

### ~~日期/时间组件方法~~

> * getTime()：返回表示日期的毫秒数；与 valueOf() 方法返回的值相同。
> * setTime(毫秒)：以毫秒数设置日期，会改变整个日期。
> * getFullYear()：取得4位数的年份（如2007而非仅07）。
> * getUTCFullYear()：返回UTC日期的4位数年份。
> * setFullYear(年)：设置日期的年份。传入的年份值必须是4位数字（如2007而非仅07）。
> * setUTCFullYear(年)：返回表示日期的毫秒数；与 valueOf() 方法返回的值相同。
> * getMonth()：返回日期中的月份，其中0表示一月，11表示十二月。
> * getUTCMonth()：返回UTC日期中的月份，其中0表示一月，11表示十二月。
> * setMonth(月)：设置日期的月份。传入的月份值必须大于0，超过11则增加年份。
> * setUTCMonth(月)：设置UTC日期的月份。传入的月份值必须大于0，超过11则增加年份。
> * getDate()：返回日期月份中的天数（1到31）。
> * getUTCDate()：返回UTC日期月份中的天数（1到31）。
> * setDate(日)：设置日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份。
> * setUTCDate(日)：设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份。
> * getDay()：返回日期中星期的星期几（其中0表示星期日，6表示星期六）。
> * getUTCDay()：返回UTC日期中星期的星期几（其中0表示星期日，6表示星期六）。
> * getHours()：返回日期中的小时数（0到23）。
> * getUTCHours()：返回UTC日期中的小时数（0到23）。
> * setHours(时)：设置日期中的小时数。传入的值超过了23则增加月份中的天数。
> * setUTCHours(时)：设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数。
> * getMinutes()：返回日期中的分钟数（0到59）。
> * getUTCMinutes()：返回UTC日期中的分钟数（0到59）。
> * setMinutes(分)：设置日期中的分钟数。传入的值超过59则增加小时数。
> * setUTCMinutes(分)：设置UTC日期中的分钟数。传入的值超过59则增加小时数。
> * getSeconds()：返回日期中的秒数（0到59）。
> * getUTCSeconds()：返回UTC日期中的秒数（0到59）。
> * setSeconds(秒)：设置日期中的秒数。传入的值超过了59会增加分钟数。
> * setUTCSeconds(秒)：设置UTC日期中的秒数。传入的值超过了59会增加分钟数。
> * getMilliseconds()：返回日期中的毫秒数。
> * getUTCMilliseconds()：返回UTC日期中的毫秒数。
> * setMilliseconds(毫秒)：设置日期中的毫秒数。
> * setUTCMilliseconds(毫秒)：设置UTC日期中的毫秒数。
> * getTimezoneOffset()：返回本地时间与UTC时间相差的分钟数。例如，美国东部标准时间返回300。在某地进入夏令时的情况下，这个值会有所变化。

## RegExp 类型

~~标志：~~
> * g ：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
> * i ：表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写；
> * m ：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。

使用RegExp 构造函数，它接收两个参数：一个是要匹配的字符串模式，另一个是可选的标志字符串。

由于 RegExp 构造函数的模式参数是字符串，所以在某些情况下要对字符进行双重转义。所有元字符必须双重转义，那些已经转义过的字符也是如此。

字面量模式|等价的字符串
:-:|:-:
/name\/age/|"name\\/age"
/\d.\d{1,2}/|"\\d.\\d{1,2}"
/\w\\hello\\123/|"\\w\\\\hello\\\\123"

### RegExp 实例方法

> * exec(str)：在没有匹配项的情况下返回 null 。返回的数组虽然是 Array 的实例，但包含两个额外的属性： index 和 input 。index 表示匹配项在字符串中的位置，而 input 表示应用正则表达式的字符串。数组中的第一项是匹配的整个字符串，第二项包含与第一个捕获组匹配的内容，第三项包含与第二个捕获组匹配的内容。即使在模式中设置了全局标志（ g ），它每次也只会返回一个匹配项。在不设置全局标志的情况下，在同一个字符串上多次调用 exec() 将始终返回第一个匹配项的信息。而在设置全局标志的情况下，每次调用 exec() 则都会在字符串中继续查找新匹配项，如下面的例子所示。

> * ~~test(str)：在模式与该参数匹配的情况下返回true ；否则，返回 false 。~~

### RegExp 构造函数属性

长属性名|短属性名|说明
input|$_|最近一次要匹配的字符串。Opera未实现此属性
lastMatch|$&|最近一次的匹配项。Opera未实现此属性
lastParen|$+|最近一次匹配的捕获组。Opera未实现此属性
leftContext|$`|input字符串中lastMatch之前的文本
multiline|$*|布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性
rightContext|$'|Input字符串中lastMatch之后的文本

> * input：属性返回了原始字符串；
> * lastMatch：属性返回最近一次与整个正则表达式匹配的字符串；
> * lastParen：属性返回最近一次匹配的捕获组。

## Function 类型

```javascript
var sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐
```
这种语法会导致解析两次代码（第一次是解析常规 ECMAScript代码，第二次是解析传入构造函数中的字符串），从而影响性能。

### 函数声明与函数表达式

解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行。

### 作为值的函数

根据某个对象属性对数组进行排序：

```javascript
function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}
```

### 函数内部属性

> * caller：这个属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为 null 。

### 函数属性和方法

每个函数都包含两个属性： length 和 prototype 。其中， length 属性表示函数希望接收的命名参数的个数。length属性默认writable为false。prototype 属性是不可枚举的，因此使用 for-in 无法发现。

每个函数继承的 toLocaleString() 和 toString() 方法始终都返回函数的代码。另外一个继承的valueOf() 方法同样也只返回函数代码。

## 基本包装类型

### Number 类型

Number 类型也重写了 valueOf() 、 toLocaleString() 和 toString()方法。

> * toString(num)：传递一个表示基数的参数，告诉它返回几进制数值的字符串形式。
> * toLocaleString()：返回字符串。
> * valueOf()：对象表示的基本类型的数值。
> * toFixed()：按照指定的小数位返回数值的字符串表示。
> * toExponential()：以指数表示法（也称 e 表示法）表示的数值的字符串形式。
> * toPrecision()：表示某个数值的最合适的格式。这个方法接收一个参数，即表示数值的所有数字的位数（不包括指数部分）。

```javascript
var num = 99;
alert(num.toPrecision(1)); //"1e+2"
alert(num.toPrecision(2)); //"99"
alert(num.toPrecision(3)); //"99.0"
```

### String 类型

继承的 valueOf() 、 toLocaleString() 和 toString() 方法，都返回对象所表示的基本字符串值。

字符串中包含双字节字符（不是占一个字节的 ASCII 字符），每个字符也仍然算一个字符。

**字符方法**

> * charAt(index)：返回索引的字符。
> * charCodeAt(index)：返回索引的字符字符编码。


**字符串操作方法**

> * concat([item1[, item2 [, . . . [, itemN]]]])：拼接任意多个字符串。
> * slice([start[, end]])：slice() 方法会将传入的负值与字符串的长度相加。
> * substring([start[, end]])：所有负值参数都转换为 0。
> * substr([start[, length]])：substr() 方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为 0。

**字符串位置方法**

> * indexOf(string)：返子字符串的位置（如果没有找到该子字符串，则返回 -1 ）。字符串的开头向后搜索子字符串。
> * lastIndexOf(string)：返子字符串的位置（如果没有找到该子字符串，则返回 -1 ）。从字符串的末尾向前搜索子字符串。

**字符串大小写转换方法**

> * toLowerCase()：转为小写。
> * toLocaleLowerCase()：针对特定地区。
> * toUpperCase()：转为大写。
> * toLocaleUpperCase()：针对特定地区。

**字符串的模式匹配方法**

> * match(pattern)：返回了一个数组。数组的第一项是与整个模式匹配的字符串，之后的每一项（如果有）保存着与正则表达式中的捕获组匹配的字符串。
> * search(string/pattern)：返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回 -1 。
> * replace(string/pattern, string/function)：返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回 -1 。

replace() 方法的第二个参数也可以是一个函数。在只有一个匹配项（即与模式匹配的字符串）的情况下，会向这个函数传递 3 个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串。在正则表达式中定义了多个捕获组的情况下，传递给函数的参数依次是模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项……，但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串。这个函数应该返回一个字符串，表示应该被替换的匹配项。

字符序列|替换文本
:-|:-
$$|$
$&|匹配整个模式的子字符串。与 RegExp.lastMatch 的值相同
$'|匹配的子字符串之前的子字符串。与 RegExp.leftContext 的值相同
$`|匹配的子字符串之后的子字符串。与 RegExp.rightContext 的值相同
$n|匹配第n个捕获组的子字符串，其中n等于0～9。
$nn|匹配第nn个捕获组的子字符串，其中nn等于01～99。

> * split(string/pattern[, length])：基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。接受可选的第二个参数，用于指定数组的大小，
以便确保返回的数组不会超过既定大小。
> * localeCompare()：比较两个字符串。

localeCompare(string)返回下列值中的一个：
> * 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是 -1 ，具体的值要视实现而定）；
> * 如果字符串等于字符串参数，则返回 0 ；
> * 如果字符串在字母表中应该排在字符串参数之后，则返回一个正数（大多数情况下是 1 ，具体的值同样要视实现而定）。

> * fromCharCode(string)：接收一或多个字符编码，然后将它们转换成一个字符串。

 
方法|参数|作用|返回|是否改变原字符串
:-|:-|:-|:-|:-
concat|([item1[, item2 [, . . . [, itemN]]]])|拼接任意多个字符串|新字符串|否
slice|([start[, end]])|创建新字符串|新字符串|否
substring|([start[, end]])|创建新字符串|新字符串|否
substr|([start[, length]])|创建新字符串|新字符串|否
indexOf|(string)|查找字符串|字符串的位置|否
lastIndexOf|(string])|查找字符串|字符串的位置|否
toLowerCase|无|转为小写|新字符串|否
toLocaleLowerCase|无|转为小写|新字符串|否
toUpperCase|无|转为大写|新字符串|否
toLocaleUpperCase|无|转为大写|新字符串|否
match|(pattern)|匹配字符串|匹配数组|否
search|(string/pattern)|查找字符串|第一个匹配项的索引|否
replace|(string/pattern, string/function)|替换字符串|新的字符串|否
split|(string/pattern[, length])|分割字符串|分割字符串数组|否
localeCompare|(string)|比较两个字符串|-1/0/1|否
fromCharCode|(string)|将一个或多个字符编码转成一个字符串|新的字符串|否

## 单体内置对象

### Global 对象

**URI 编码方法**

> * encodeURI(uri)：用于整个 URI。不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号。
> * encodeURIComponent(uri)：用于对 URI 中的某一段。任何非标准字符进行编码。
> * decodeURI(uri)：对使用 encodeURI() 替换的字符进行解码。
> * encodeURIComponent(uri)：解码使用 encodeURIComponent() 编码的所有字符。

**eval() 方法**

被执行的代码具有与该执行环境相同的作用域链。这意味着通过 eval() 执行的代码可以引用在包含环境中定义的变量。

在 eval() 中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在 eval() 执行的时候创建。

**window 对象**

```javascript
var global = function(){
    return this;
}();
```

### Math 对象

> * Math.min()：求最小值。
> * Math.max()：求最大值。
> * Math.ceil()：向上舍入。
> * Math.floor()：向下舍入。
> * Math.round()：标准舍入。
> * Math.random()：返回大于等于 0 小于 1 的一个随机数。

```javascript
值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
```

# 第6章 面向对象的程序设计

通过类可以创建任意多个具有相同属性和方法的对象。

ECMA-262 把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数。”

## 理解对象

### 属性类型

**数据属性**

> * [[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。设置为 false 之后无法设置回true。
> * [[Enumerable]]：表示能否通过 for-in 循环返回属性。
> * [[Writable]]：表示能否修改属性的值。
> * [[Value]]：包含这个属性的数据值。

修改属性默认的特性，要用Object.defineProperty() 方法。
> * Object.defineProperty(object, propertyname, descriptor)：修改属性描述符。返回已修改对象。

```javascript
var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});
```

**访问器属性**

> * [[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。对于直接在对象上定义的属性，这个特性的默认值为true 。
> * [[Enumerable]]：表示能否通过 for-in 循环返回属性。对于直接在对象上定义的属性，这个特性的默认值为 true 。
> * [[Get]]：在读取属性时调用的函数。默认值为 undefined 。
> * [[Set]]：在写入属性时调用的函数。默认值为 undefined 。

访问器属性不能直接定义，必须使用 Object.defineProperty() 来定义。

```javascript
var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, "year", {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
})
```

**定义多个属性**

> * Object.defineProperties(object, descriptors)：批量修改数据属性、访问器属性描述符。

**读取属性的特性**

> * Object.getOwnPropertyDescriptor(object, propertyname)：获取数据属性、访问器属性描述符|描述符对象。

## 创建对象

### 工厂模式 

```javascript
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}
```

解决了创建多个相似对象的问题。但却没有解决对象识别的问题（即怎样知道一个对象的类型）。

### 构造函数模式 

```javascript
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };
}
```

new 操作符经历四个步骤：

1. 创建一个新对象；
2. 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
3. 执行构造函数中的代码（为这个新对象添加属性）；
4. 返回新对象。

**构造函数的问题**

每个方法都要在每个实例上重新创建一遍。


### 原型模式

```javascript
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};
```

**理解原型对象**

> * prototype.isPrototypeOf(obj)：object 的原型链中具有 prototype，则isPrototypeOf 方法返回 true。

```javascript
alert(Person.prototype.isPrototypeOf(person1)); //true
```

**原型与 in 操作符**

in 操作符会在通过对象能够访问给定属性时返回 true ，无论该属性存在于实例中还是原型中。

> * Object.getPrototypeOf(object)：获取prototype的值。
> * Object.hasOwnProperty(object, propertyname)：检测自定义属性。
> * Object.keys(object)：返回一个包含所有可枚举属性的字符串数组。

**更简单的原型语法**

原生的 constructor 属性是不可枚举的。

```javascript
// 重设构造函数，只适用于 ECMAScript 5  兼容的浏览器
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});
```

**原型的动态性**

实例中的指针仅指向原型，而不指向构造函数。

```javascript  
function Person(){
}
var friend = new Person();
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};
friend.sayName(); //error
```

**原型对象的问题**

省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值。原型模式的最大问题是由其共享的本性所导致的。

### 组合使用构造函数模式和原型模式

```javascript
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor : Person,
    sayName : function(){
        alert(this.name);
    }
}
```
构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。

### 动态原型模式

检查某个应该存在的方法是否有效，来决定是否需要初始化原型。

```javascript
function Person(name, age, job){
    //属性
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayName != "function"){
        Person.prototype.sayName = function(){
            alert(this.name);
        };
    }
}
```

### 寄生构造函数模式

该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象。

```javascript
function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}

var friend = new Person("Nicholas", 29, "Software Engineer");
```
与构造函数模式区别在于它不用this,而是在内部创建一个新的对象。

创建一个具有额外方法的特殊数组。

```javascript
function SpecialArray(){
    //创建数组
    var values = new Array();
    //添加值
    values.push.apply(values, arguments);
    //添加方法
    values.toPipedString = function(){
        return this.join("|");
    };
    //返回数组
    return values;
}
```

返回的对象与构造函数或者与构造函数的原型属性之间没有关系。

### 稳妥构造函数模式

```javascript
function Person(name, age, job){
    //创建要返回的对象
    var o = new Object();
    //可以在这里定义私有变量和函数
    //添加方法
    o.sayName = function(){
        alert(name);
    };
    //返回对象
    return o;
}

var friend = Person("Nicholas", 29, "Software Engineer");
```

稳妥构造函数模式提供的这种安全性，使得它非常适合在某些安全执行环境。

## 继承

### 原型链

基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。

构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

**确定原型和实例的关系**

```javascript
alert(instance instanceof Object); //true

alert(Object.prototype.isPrototypeOf(instance)); //true
```

**原型链的问题**

1. 引用类型值的原型属性会被所有实例共享。
2. 在创建子类型的实例时，不能向超类型的构造函数中传递参数。

### 借用构造函数

```javascript
function SuperType(){
    this.colors = ["red", "blue", "green"];
}
function SubType(){
    // 继承了 SuperType
    SuperType.call(this);
}
```

**借用构造函数的问题**

无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数复用就无从谈起了。

### 组合继承

```javascript
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    //继承属性
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};
```

组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为JavaScript 中最常用的继承模式。而且， instanceof 和 isPrototypeOf() 也能够用于识别基于组合继承建的对象。

### 原型式继承

```javascript
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
```

ECMAScript 5 通过新增 Object.create() 方法规范化了原型式继承。

### 寄生式继承

```javascript
function createAnother(original){
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function(){ //以某种方式来增强这个对象
        alert("hi");
    };
    return clone; //返回这个对象
}
```

### 寄生组合式继承

```javascript
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};

function SubType(name, age){
    SuperType.call(this, name); // 第二次调用 SuperType()
    this.age = age;
}

// SubType.prototype = new SuperType(); // 第一次调用 SuperType()

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    alert(this.age);
};

function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
}
```

高效率体现在它只调用了一次 SuperType 构造函数，并且因此避免了在 SubType.
prototype 上面创建不必要的、多余的属性。

# 第7章 函数表达式

## 递归

方法|作用|返回|是否改变原对象
:-|:-|:-|:-|:-
Object.defineProperty(object, propertyname, descriptor)|修改数据属性、访问器属性描述符|改变后的对象|是
Object.defineProperties(object, descriptors)|修改数据属性、访问器属性描述符|改变后的对象|是
Object.getOwnPropertyDescriptor(object, descriptors)|获取数据属性、访问器属性描述符|描述符对象|否
Object.getPrototypeOf(object)|获取prototype的值|prototype值|否
Object.hasOwnProperty(object, propertyname)|检测自定义属性|布尔值|否
Object.keys(object)|返回一个包含所有可枚举属性的字符串数组|数组|否
Object.create(obj[, descriptors])|返回一个实例，它的[[prototype]]值为obj|对象|否

### 寄生式继承

```javascript
function createAnother(original){
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function(){ //以某种方式来增强这个对象
        alert("hi");
    };
    return clone; //返回这个对象
}
```



# 第15章 使用Canvas绘图
检测getContext方法

```javascript
if (canvas.getContext){}
```

## 上下文

### 填充和描边
> * context.fillStyle：填充
> * context.strokeStyle：描边

### 绘制矩形
矩形是唯一一种可以直接在 2D 上下文中绘制的形状。
包括三个方法：
> * fillRect(x, y, width, height) 
> * strokeRect(x, y, width, height) 
> * clearRect(x, y, width, height)

```javascript
//绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
//绘制半透明的蓝色矩形
context.fillStyle = "rgba(0,0,255,0.5)";
context.fillRect(30, 30, 50, 50);
// 在两个矩形重叠的地方清除一个小矩形
context.clearRect(40, 40, 10, 10);
```

### 绘制路径
1. 调用 beginPath() 方法，表示要开始绘制新路径

2. 绘制方法:

> * arc(x, y, startAngle, endAngle, counterclockwise): counterclockwise为false表示顺时针。
> * arcTo(x1, y1, x2, y2, radius) ：从上一点开始绘制一条弧线，到 (x2,y2) 为止，并且以给定的半径 radius 穿过 (x1,y1) 。
> * bezierCurveTo(c1x, c1y, c2x, c2y, x, y) ：从上一点开始绘制一条曲线，到 (x,y) 为止，并且以 (c1x,c1y) 和 (c2x,c2y) 为控制点。
> * lineTo(x, y) ：从上一点开始绘制一条直线，到 (x,y) 为止。
> * moveTo(x, y) ：将绘图游标移动到 (x,y) ，不画线。
> * quadraticCurveTo(cx, cy, x, y) ：从上一点开始绘制一条二次曲线，到 (x,y) 为止，并且以 (cx,cy) 作为控制点。
> * rect(x, y, width, height) ：从点 (x,y) 开始绘制一个矩形，宽度和高度分别由 width 和height 指定。这个方法绘制的是矩形路径，而不是strokeRect() 和fillRect() 所绘制的独立的形状。

3. 创建路径后有三个选择：

    1. 连接到起点，调用closePath()。
    2. 填充，调用fill()。
    3. 描边，调用stroke()。

```javascript
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext){
    var context = drawing.getContext("2d");
    // 开始路径
    context.beginPath();
    // 绘制外圆
    context.arc(100, 100, 99, 0, 2 > * Math.PI, false);
    // 绘制内圆
    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 > * Math.PI, false);
    // 绘制分针
    context.moveTo(100, 100);
    context.lineTo(100, 15);
    // 绘制时针
    context.moveTo(100, 100);
    context.lineTo(35, 100);
    // 描边路径
    context.stroke();
}
```

### 绘制文本
绘制方法：
> * fillText(font, textAlign, textBaseline)
> * strokeText(font, textAlign, textBaseline)

参数：
> * font ：表示文本样式、大小及字体
> * textAlign ：表示文本对齐方式。可能的值有 "start" 、 "end" 、 "left" 、 "right" 和 "center" 。建议使用 "start" 和 "end"
> * textBaseline ：表示文本的基线。可能的值有 "top" 、 "hanging" 、 "middle" 、 "alphabetic" 、"ideographic" 和 "bottom" 。

```javascript
context.font = "bold 14px Arial";
context.textAlign = "center";
context.textBaseline = "middle";
context.fillText("12", 100, 20);
```

### 变换
方法：
> * rotate(angle) ：围绕原点旋转图像 angle 弧度。
> *  scale(scaleX, scaleY) ：缩放图像，在 x 方向乘以 scaleX ，在 y 方向乘以 scaleY 。 scaleX和 scaleY 的默认值都是 1.0。
> * translate(x, y) ：将坐标原点移动到 (x,y) 。执行这个变换之后，坐标(0,0)会变成之前由 (x,y)表示的点。
> * transform(m1_1, m1_2, m2_1, m2_2, dx, dy) ：直接修改变换矩阵，方式是乘以如下矩阵。<code>
m1_1 m1_2 dx
m2_1 m2_2 dy
0    0    1</code>
> * setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy) ：将变换矩阵重置为默认状态，然后再调用 transform() 。

```javascript
// 变换原点
context.translate(100, 100);
// 绘制分针
context.moveTo(0,0);
context.lineTo(0, -85);
// 绘制时针
context.moveTo(0, 0);
context.lineTo(-65, 0);
```

重置：
> * save()：所有设置都会进入一个栈结构，得以妥善保管。
> * restore()：在保存设置的栈结构中向前返回一级。

### 绘制图像
> * drawImage(image, x, y, w, h, tx, ty, tw, th)：x,y,w,h表示源图像的x,y坐标，宽度和高度。tx,ty,tw,th表示目标图像的x,y坐标，宽度和高度。
> * canvas.toDataURL()：获取操作结果。会存在跨域问题。

### 阴影
属性：
> * shadowColor：用 CSS 颜色格式表示的阴影颜色，默认为黑色。
> * shadowOffsetX：形状或路径 x 轴方向的阴影偏移量，默认为 0。
> * shadowOffsetY ：形状或路径 y 轴方向的阴影偏移量，默认为 0。
> * shadowBlur ：模糊的像素数，默认 0，即不模糊。

```javascript
// 设置阴影
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 4;
context.shadowColor = "rgba(0, 0, 0, 0.5)";
```
### 渐变

**线性渐变：**
> * createLinearGradient(sx, sy, ex, ey)：起点的 x 坐标、起点的 y 坐
标、终点的 x 坐标、终点的 y 坐标。返回CanvasGradient 对象的实例。

```javascript
var gradient = context.createLinearGradient(30, 30, 70, 70);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");

//绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);

//绘制渐变矩形
context.fillStyle = gradient;
context.fillRect(30, 30, 50, 50);
```

**径向渐变：**
> * createRadialGradient(sx, sy, sr, ex, ey, er)：三个参数指定的是起点圆的原心（x 和 y）及半径，后三个参数指定的是终点圆的原心（x 和 y）及半径。

```javascript
var gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");
//绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
//绘制渐变矩形
context.fillStyle = gradient;
context.fillRect(30, 30, 50, 50);
```

### 模式
> * createPattern(image, pattern)：第二个参数包括 "repeat" 、 "repeat-x" 、
"repeat-y" 和 "no-repeat" 。

```javascript
var image = document.images[0],
    pattern = context.createPattern(image, "repeat");

//绘制矩形
context.fillStyle = pattern;
context.fillRect(10, 10, 150, 150);
```

### 使用图像数据
> * getImageData(x, y, w, h)：取得其数据的画面区域的 x 和 y 坐标以及该区域的像素宽度和高度。

```javascript
var imageData = context.getImageData(10, 5, 50, 50);
```

返回的对象是 ImageData 的实例。每个 ImageData 对象都有三个属性： width 、 height 和data 。其中 data 属性是一个数组，保存着图像中每一个像素的数据。每一个像素用4个元素来保存，分别表示红、绿、蓝和透明度值。

简单的灰阶过滤器：
```javascript  
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext){
    var context = drawing.getContext("2d"),
        image = document.images[0],
        imageData, data,
        i, len, average,
        red, green, blue, alpha;
    //绘制原始图像
    context.drawImage(image, 0, 0);
    //取得图像数据
    imageData = context.getImageData(0, 0, image.width, image.height);
    data = imageData.data;
    for (i=0, len=data.length; i < len; i+=4){
        red = data[i];
        green = data[i+1];
        blue = data[i+2];
        alpha = data[i+3];
        //求得 rgb 平均值
        average = Math.floor((red + green + blue) / 3);
        //设置颜色值，透明度不变
        data[i] = average;
        data[i+1] = average;
        data[i+2] = average;
    }
    //回写图像数据并显示结果
    imageData.data = data;
    context.putImageData(imageData, 0, 0);
}
```

### 合成
属性：
> * globalAlpha：一个介于 0 和 1 之间的值，用于指定所有绘制的透
明度。

```javascript
//绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
//修改全局透明度
context.globalAlpha = 0.5;
//绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
```

> * globalCompositionOperation：表示后绘制的图形怎样与先绘制的图形结合。
可能值：
> * source-over （默认值）：后绘制的图形位于先绘制的图形上方。
> * source-in ：后绘制的图形与先绘制的图形重叠的部分可见，两者其他部分完全透明。
> * source-out ：后绘制的图形与先绘制的图形不重叠的部分可见，先绘制的图形完全透明。
> * source-atop ：后绘制的图形与先绘制的图形重叠的部分可见，先绘制图形不受影响。
> * destination-over ：后绘制的图形位于先绘制的图形下方，只有之前透明像素下的部分才可见。
> * destination-in ：后绘制的图形位于先绘制的图形下方，两者不重叠的部分完全透明。
> * destination-out ：后绘制的图形擦除与先绘制的图形重叠的部分。
> * destination-atop ：后绘制的图形位于先绘制的图形下方，在两者不重叠的地方，先绘制的图形会变透明。
> * lighter ：后绘制的图形与先绘制的图形重叠部分的值相加，使该部分变亮。
> * copy ：后绘制的图形完全替代与之重叠的先绘制图形。
> * xor ：后绘制的图形与先绘制的图形重叠的部分执行“异或”操作。

```javascript
//绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
//设置合成操作
context.globalCompositeOperation = "destination-over";
//绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
```

## WebGL
WebGL是针对Canvas的3D上下文。WebGL 并不是 W3C 制定的标准。

### 类型化数组

类型化数组的核心就是一个名为 ArrayBuffer 的类型

```javascript
var buffer = new ArrayBuffer(20);   // 在内存中分配 20B
var bytes = buffer.byteLength;
```

**视图**

创建数组缓冲器视图

```javascript
//基于整个缓冲器创建一个新视图
var view = new DataView(buffer);

//创建一个开始于字节 9 的新视图
var view = new DataView(buffer, 9);

//创建一个从字节 9 开始到字节 18 的新视图
var view = new DataView(buffer, 9, 10);
```

**类型化视图**

方法：
> * Int8Array ：表示 8 位二补整数。
> * Uint8Array ：表示 8 位无符号整数。
> * Int16Array ：表示 16 位二补整数。
> * Uint16Array ：表示 16 位无符号整数。
> * Int32Array ：表示 32 位二补整数。
> * Uint32Array ：表示 32 位无符号整数。
> * Float32Array ：表示 32 位 IEEE 浮点值。
> * Float64Array ：表示 64 位 IEEE 浮点值。

```javascript
//创建一个新数组，使用整个缓冲器
var int8s = new Int8Array(buffer);
//只使用从字节 9 开始的缓冲器
var int16s = new Int16Array(buffer, 9);
//只使用从字节 9 到字节 18 的缓冲器
var uint16s = new Uint16Array(buffer, 9, 10);
```

每个视图构造函数都有一个名为 BYTES_PER_ELEMENT 的属性，表示类型化数组的每个元素需要多少字节。

```javascript
//需要 10 个元素空间
var int8s = new Int8Array(buffer, 0, 10 > * Int8Array.BYTES_PER_ELEMENT);
//需要 5 个元素空间
var uint16s = new Uint16Array(buffer, int8s.byteOffset + int8s.byteLength, 5 > * Uint16Array.BYTES_PER_ELEMENT);
```

```javascript
//创建一个数组保存 10 个 8 位整数（10 字节）
var int8s = new Int8Array(10);
//创建一个数组保存 10 个 16 位整数（20 字节）
var int16s = new Int16Array(10);
//创建一个数组保存 5 个 8 位整数（10 字节）
var int8s = new Int8Array([10, 20, 30, 40, 50]);
// 遍历
for (var i=0, len=int8s.length; i < len; i++){
    console.log("Value at position " + i + " is " + int8s[i]);
}
```

```javascript
var uint16s = new Uint16Array(10),
sub = uint16s.subarray(2, 5);
```

> * subarray(sindex[, eindex])：基于底层数组缓冲器的子集创建一个新视图。

```javascript
var uint16s = new Uint16Array(10),
    sub = uint16s.subarray(2, 5);
```

### WebGL上下文
```javascript
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext){
    try {
        gl = drawing.getContext("experimental-webgl");
    } catch (ex) {
    // 什么也不做
    }
    if (gl){
    //使用 WebGL
    } else {
        alert("WebGL context could not be created.");
    }
}
```

> * getContext("experimental-webgl", obj)：第二个参数是一个对象

obj对象：
> * alpha ：值为 true ，表示为上下文创建一个 Alpha 通道缓冲区；默认值为 true 。
> * depth ：值为 true ，表示可以使用 16 位深缓冲区；默认值为 true 。
> * stencil ：值为 true ，表示可以使用 8 位模板缓冲区；默认值为 false 。
> * antialias ：值为 true ，表示将使用默认机制执行抗锯齿操作；默认值为 true 。
> * premultipliedAlpha ：值为 true ，表示绘图缓冲区有预乘 Alpha 值；默认值为 true 。
> * preserveDrawingBuffer ：值为 true ，表示在绘图完成后保留绘图缓冲区；默认值为 false 。
建议确实有必要的情况下再开启这个值，因为可能影响性能。

**方法命名：**

> * gl.uniform4f()：接收 4 个浮点数。
> * gl.uniform3i()：接收 4 个整数。
> * gl.uniform3iv()：接收 3 个值的整数数组。

f 表示浮点数， i 表示整数， v表示矢量。

**准备绘图：**

清理缓冲区

```javascript
gl.clearColor(0,0,0,1); //black
gl.clear(gl.COLOR_BUFFER_BIT);
```

**视口与坐标**

```javascript
gl.viewport(0, 0, drawing.width, drawing.height);
```

**缓冲区**

```javascript
// 创建缓冲区
var buffer = gl.createBuffer();
// 将buffer设置为上下文的当前缓冲区
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// 
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1]), gl.STATIC_DRAW);
```

> * bufferData()

gl.bufferData() 的最后一个参数用于指定使用缓冲区的方式，取值范围是如下几个常量。

> * gl.STATIC_DRAW ：数据只加载一次，在多次绘图中使用。
> * gl.STREAM_DRAW ：数据只加载一次，在几次绘图中使用。
> * gl.DYNAMIC_DRAW ：数据动态改变，在多次绘图中使用。

> * deleteBuffer()：释放内存

```javascript
gl.deleteBuffer(buffer);
```

**错误**

> * getError()

返回一个常量

> * gl.NO_ERROR ：上一次操作没有发生错误（值为 0）。
> * gl.INVALID_ENUM ：应该给方法传入 WebGL 常量，但却传错了参数。
> * gl.INVALID_VALUE ：在需要无符号数的地方传入了负值。
> * gl.INVALID_OPERATION ：在当前状态下不能完成操作。
> * gl.OUT_OF_MEMORY ：没有足够的内存完成操作。
> * gl.CONTEXT_LOST_WEBGL ：由于外部事件（如设备断电）干扰丢失了当前 WebGL 上下文。

```javascript
var errorCode = gl.getError();
while(errorCode){
    console.log("Error occurred: " + errorCode);
    errorCode = gl.getError();
}
```

**绘图**
WebGL 只能绘制三种形状：点、线和三角。

> * drawArrays()：用于数组缓冲区。
> * drawElements()：用于元素数组缓冲区。

第一个参数常量：

> * gl.POINTS ：将每个顶点当成一个点来绘制。
> * gl.LINES ：将数组当成一系列顶点，在这些顶点间画线。每个顶点既是起点也是终点，因此数组中必须包含偶数个顶点才能完成绘制。
> * gl.LINE_LOOP ：将数组当成一系列顶点，在这些顶点间画线。线条从第一个顶点到第二个顶点，再从第二个顶点到第三个顶点，依此类推，直至最后一个顶点。然后再从最后一个顶点到第一
个顶点画一条线。结果就是一个形状的轮廓。
> * gl.LINE_STRIP ：除了不画最后一个顶点与第一个顶点之间的线之外，其他与 gl.LINE_LOOP相同。
> * gl.TRIANGLES ：将数组当成一系列顶点，在这些顶点间绘制三角形。除非明确指定，每个三角形都单独绘制，不与其他三角形共享顶点。
> * gl.TRIANGLES_STRIP ：除了将前三个顶点之后的顶点当作第三个顶点与前两个顶点共同构成一个新三角形外，其他都与 gl.TRIANGLES 相同。例如，如果数组中包含 A、B、C、D 四个顶
点，则第一个三角形连接 ABC，而第二个三角形连接 BCD。
> * gl. TRIANGLES_FAN ：除了将前三个顶点之后的顶点当作第三个顶点与前一个顶点及第一个顶点共同构成一个新三角形外，其他都与 gl.TRIANGLES 相同。例如，如果数组中包含 A、B、C、D 四个顶点，则第一个三角形连接 ABC，而第二个三角形连接 ACD。

# 第16章 HTML脚本编程
## [跨文档消息传递](https://html.spec.whatwg.org/multipage/web-messaging.html#web-messaging)

跨文档消息传送（cross-document messaging），有时候简称为 XDM。XDM 的核心是 postMessage() 方法。

> * postMessage(message, url)

postMessage方法参数：

> * message:传递字符串。有些浏览器支持数据结构。最好的办法是传入的数据上调用 JSON.stringify()。
> * url:域名。

```javascript
var iframeWindow = document.getElementById("myframe").contentWindow;
iframeWindow.postMessage("A secret", "http://www.wrox.com");
```

接收到 XDM 消息时，会触发 window 对象的 message 事件。这个事件是以异步形式触发的。

onmessage处理程序的事件对象：
> * data：作为 postMessage() 第一个参数传入的字符串数据。
> * origin ：发送消息的文档所在的域，例如 "http://www.wrox.com" 。
> * source ：发送消息的文档的 window 对象的代理。这个代理对象主要用于在发送上一条消息的窗口中调用 postMessage() 方法。如果发送消息的窗口来自同一个域，那这个对象就是window 。

```javascript
EventUtil.addHandler(window, "message", function(event){
    //确保发送消息的域是已知的域
    if (event.origin == "http://www.wrox.com"){
        //处理接收到的数据
        processMessage(event.data);
        //可选：向来源窗口发送回执
        event.source.postMessage("Received!", "http://p2p.wrox.com");
    }
});
```

## 原生拖放

### 拖放事件

拖动某元素时，将依次触发下列事件：

> * dragstart
> * drag
> * dragend