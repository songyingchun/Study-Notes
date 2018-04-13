# 1. 第1章 JavaScript简介
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

# 2. 第2章 在HTML中使用JavaScript

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

## 2.1. 标签的位置
浏览器在遇到 &lt;body> 标签时才开始呈现内容。会导致浏览器在呈现页面时出现明显的延迟，而延迟期间的浏览器窗口中将是一片空白。为了避免这个问题，现代 Web 应用程序一般都把全部 JavaScript 引用放在 &lt;body> 元素中页面内容的后面。

## 2.2. 延迟脚本

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

## 2.3. 异步脚本

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

## 2.4. 嵌入代码与外部文件

> * 可维护性
> * 可缓存
> * 适应未来

## 2.5. 文档模式

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

## 2.6. &lt;noscript> 元素
当浏览器不支持 JavaScript 时如何让页面平稳地退化。这个元素可以包含能够出现在文档 &lt;body> 中的任何 HTML 元素&lt;script> 元素除外。


# 3. 第3章 基本概念

## 3.1. 语法
### 3.1.1. 区分大小写

变量区分大小写

### 3.1.2. 标识符

标识符，就是指变量、函数、属性的名字，或者函数的参数。

> * 第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）；
> * 其他字符可以是字母、下划线、美元符号或数字。

标识符中的字母也可以包含扩展的 ASCII或 Unicode字母字符（如 À和 Æ）。

### 3.1.3. 注释

```html
// 单行注释

/*
* 这是一个多行
* （块级）注释
*/
```

### 3.1.4. 语句
语句以一个分号结尾；如果省略分号，则由解析器确定语句的结尾。

### 3.1.5. 关键字和保留字

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

## 3.2. 数据类型

5 种简单数据类型Undefined 、 Null 、 Boolean 、 Number和 String。
复杂数据类型—— Object，Object 本质上是由一组无序的名值对组成的。

### 3.2.1. typeof

> * "undefined" ——如果这个值未定义；
> * "boolean" ——如果这个值是布尔值；
> * "string" ——如果这个值是字符串；
> * "number" ——如果这个值是数值；
> * "object" ——如果这个值是对象或null；
> * "function" ——如果这个值是函数。

### 3.2.2. Undefined 类型
因为未经初始化的值默认就会取得 undefined 值。

### 3.2.3. Null 类型
null 值表示一个空对象指针，而这也正是使用 typeof 操作符检测 null 值时会返回 "object" 的原因。

undefined 值是派生自 null 值的，因此 ECMA-262规定对它们的相等性测试要返回 true 。

```javascript
alert(null == undefined); //true
```

### 3.2.4. Boolean 类型
要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()。

数据类型|true|false  
:-:|:-:|:-:
Boolean|true|false
String|任何非空字符串|""
Number|任何非零数字值（包括无穷大）|0和 NaN 
Object|任何对象|null
Undefined|n/a|undefined

### 3.2.5. Number 类型

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

### 3.2.6. String 类型

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

### 3.2.7. Object 类型
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

## 3.3. 操作符

### 3.3.1. ~~一元操作符~~
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

# 4. 第15章 使用Canvas绘图
检测getContext方法

```javascript
if (canvas.getContext){}
```

## 4.1. 上下文

### 4.1.1. 填充和描边
> * context.fillStyle：填充
> * context.strokeStyle：描边

### 4.1.2. 绘制矩形
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

### 4.1.3. 绘制路径
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

### 4.1.4. 绘制文本
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

### 4.1.5. 变换
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

### 4.1.6. 绘制图像
> * drawImage(image, x, y, w, h, tx, ty, tw, th)：x,y,w,h表示源图像的x,y坐标，宽度和高度。tx,ty,tw,th表示目标图像的x,y坐标，宽度和高度。
> * canvas.toDataURL()：获取操作结果。会存在跨域问题。

### 4.1.7. 阴影
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
### 4.1.8. 渐变

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

### 4.1.9. 模式
> * createPattern(image, pattern)：第二个参数包括 "repeat" 、 "repeat-x" 、
"repeat-y" 和 "no-repeat" 。

```javascript
var image = document.images[0],
    pattern = context.createPattern(image, "repeat");

//绘制矩形
context.fillStyle = pattern;
context.fillRect(10, 10, 150, 150);
```

### 4.1.10. 使用图像数据
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

### 4.1.11. 合成
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

## 4.2. WebGL
WebGL是针对Canvas的3D上下文。WebGL 并不是 W3C 制定的标准。

### 4.2.1. 类型化数组

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

### 4.2.2. WebGL上下文
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

# 5. 第16章 HTML脚本编程
## 5.1. [跨文档消息传递](https://html.spec.whatwg.org/multipage/web-messaging.html#web-messaging)

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

## 5.2. 原生拖放

### 5.2.1. 拖放事件

拖动某元素时，将依次触发下列事件：

> * dragstart
> * drag
> * dragend





