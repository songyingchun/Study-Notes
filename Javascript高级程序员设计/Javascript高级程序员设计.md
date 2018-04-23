# 第1章 JavaScript简介

ECMA-262规定了语法、类型、语句、关键字、保留字、操作符、对象。

# 第2章 在HTML中使用JavaScript

HTML 4.01 为&lt;script> 定义了下列 6 个属性：
> * async ：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或
等待加载其他脚本。只对外部脚本文件有效。
> * charset ：可选。表示通过 src 属性指定的代码的字符集。
> * defer ：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。IE7 及更早版本对嵌入脚本也支持这个属性。
> * language ：已废弃。
> * src ：可选。表示包含要执行代码的外部文件。
> * type ：可选。可以看成是 language 的替代属性。

## 标签的位置
现代 Web 应用程序一般都把全部 JavaScript 引用放在 &lt;body> 元素中页面内容的后面。

## 延迟脚本

在 &lt;script> 元素中设置defer 属性，相当于告诉浏览器立即下载，但延迟执行。

## 异步脚本

async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与 defer不同的是，标记为 async 的脚本并不保证按照指定它们的先后顺序执行。

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

### 标识符

标识符，就是指变量、函数、属性的名字，或者函数的参数。

> * 第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）；
> * 其他字符可以是字母、下划线、美元符号或数字。

标识符中的字母也可以包含扩展的 ASCII或 Unicode字母字符（如 À和 Æ）。

### typeof

> * "undefined" ——如果这个值未定义；
> * "boolean" ——如果这个值是布尔值；
> * "string" ——如果这个值是字符串；
> * "number" ——如果这个值是数值；
> * "object" ——如果这个值是对象或null；
> * "function" ——如果这个值是函数。

### Null 类型
null 值表示一个空对象指针，而这也正是使用 typeof 操作符检测 null 值时会返回 "object" 的原因。undefined 值是派生自 null 值的，因此 ECMA-262规定对它们的相等性测试要返回 true 。

```javascript
alert(null == undefined); //true
```

### Boolean 类型
要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()。

数据类型|true|false  
:-|:-|:-
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

> * isFinite()：这个函数在参数位于最小与最大数值之间时会返回 true 。

**NaN**

这个数值用于表示一个本来要返回数值的操作数未返回数值的情况。

NaN 与任何值都不相等，包括 NaN 本身。

```javascript
alert(NaN == NaN); //false
```

> * isNaN()：帮我们确定这个参数是否“不是数值”。isNaN() 也适用于对象。

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

**~~递增和递减操作符~~**

递增和递减操作符遵循下列规则。
> * 在应用于一个包含有效数字字符的字符串时，先将其转换为数字值，再执行加减 1 的操作。字符串变量变成数值变量。
> * 在应用于一个不包含有效数字字符的字符串时，将变量的值设置为 NaN。字符串变量变成数值变量。
> * 在应用于布尔值 false 时，先将其转换为 0 再执行加减 1 的操作。布尔值变量变成数值变量。
> * 在应用于布尔值 true 时，先将其转换为 1 再执行加减 1 的操作。布尔值变量变成数值变量。
> * 在应用于浮点数值时，执行加减 1 的操作。
> * 在应用于对象时，先调用对象的 valueOf() 方法以取得一个可供操作的值。然后对该值应用前述规则。如果结果是 NaN ，则在调用 toString() 方法后再应用前述规则。对象变量变成数值变量。


**~~一元加和减操作符~~**

该操作符会像 Number() 转型函数一样对这个值执行转换。~~

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

### ~~乘性操作符~~
ECMAScript 定义了 3 个乘性操作符：乘法、除法和求模。如果参与乘性计算的某
个操作数不是数值，后台会先使用 Number() 转型函数将其转换为数值。

~~**乘法**~~

> * 如果操作数都是数值，执行常规的乘法计算，即两个正数或两个负数相乘的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果乘积超过了 ECMAScript 数值的表示范围，则返回 Infinity 或 -Infinity ；
> * 如果有一个操作数是 NaN ，则结果是 NaN ；
> * 如果是 Infinity 与 0 相乘，则结果是 NaN ；
> * 如果是 Infinity 与非 0 数值相乘，则结果是 Infinity 或 -Infinity ，取决于有符号操作数的符号；
> * 如果是 Infinity 与 Infinity 相乘，则结果是 Infinity ；
> * 如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。

~~**除法**~~

> * 如果操作数都是数值，执行常规的除法计算，即两个正数或两个负数相除的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果商超过了 ECMAScript 数值的表示范围，则返回 Infinity 或 -Infinity ；
> * 如果有一个操作数是 NaN ，则结果是 NaN ；
> * 如果是 Infinity 被 Infinity 除，则结果是 NaN ；
> * 如果是零被零除，则结果是 NaN ；
> * 如果是非零的有限数被零除，则结果是 Infinity 或 -Infinity ，取决于有符号操作数的符号；
> * 如果是 Infinity 被任何非零数值除，则结果是 Infinity 或 -Infinity ，取决于有符号操作数的符号；
> * 如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。

~~**求模**~~
求模（余数）操作符由一个百分号（ % ）表示。

> * 如果操作数都是数值，执行常规的除法计算，返回除得的余数；
> * 如果被除数是无穷大值而除数是有限大的数值，则结果是 NaN ；
> * 如果被除数是有限大的数值而除数是零，则结果是 NaN ；
> * 如果是 Infinity 被 Infinity 除，则结果是 NaN ；
> * 如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；
> * 如果被除数是零，则结果是零；
> * 如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。

### ~~加性操作符~~

~~**加法**~~

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

### ~~关系操作符~~
小于（<）、大于（>）、小于等于（<=）和大于等于（>=）

> * 如果两个操作数都是数值，则执行数值比较。
> * 如果两个操作数都是字符串，则比较两个字符串对应的字符编码值。
> * 如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。
> *  如果一个操作数是对象，则调用这个对象的 valueOf() 方法，用得到的结果按照前面的规则执行比较。如果对象没有 valueOf() 方法，则调用 toString() 方法，并用得到的结果根据前面的规则执行比较。
> *  如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。

### ~~相等操作符~~

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

```javascript
result = variable instanceof constructor
```

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

```javascript
function createAnother(original){
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function(){ //以某种方式来增强这个对象
        alert("hi");
    };
    return clone; //返回这个对象
}
```

方法|作用|返回|是否改变原对象
:-|:-|:-|:-|:-
Object.defineProperty(object, propertyname, descriptor)|修改数据属性、访问器属性描述符|改变后的对象|是
Object.defineProperties(object, descriptors)|修改数据属性、访问器属性描述符|改变后的对象|是
Object.getOwnPropertyDescriptor(object, descriptors)|获取数据属性、访问器属性描述符|描述符对象|否
Object.getPrototypeOf(object)|获取prototype的值|prototype值|否
Object.hasOwnProperty(object, propertyname)|检测自定义属性|布尔值|否
Object.keys(object)|返回一个包含所有可枚举属性的字符串数组|数组|否
Object.create(obj[, descriptors])|返回一个实例，它的[[prototype]]值为obj|对象|否

# 第7章 函数表达式

## 递归

### 闭包

闭包是指有权访问另一个函数作用域中的变量的函数。

当某个函数被调用时，会创建一个执行环境（execution context）及相应的作用域链。

执行环境的作用域链会被销毁，但它的活动对象仍然会留在内存中；直到匿名函数被销毁后，活动对象才会被销毁。

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

var compareNames = createComparisonFunction("name");

var result = compareNames({ name: "Nicholas" }, { name: "Greg" });
```

匿名函数作用域链：[
    全局变量对象：[
        {
            createComparisonFunction: , 
        },
        {
            result: undefined
        }
    ],
    createComparisonFunction()的活动对象: [
        {
            arguments: ["name"]
        },
        {
            propertyName: "name"
        }
    ],
    闭包的活动对象：[
        {
            arguments: [{name: "Nicholas"}, {name: "Greg"}]
        },
        {
            object1: {name: "Nicholas"}
        },
        {
            object2: {name: "Greg"}
        }
    ]
]

**闭包与变量**

```javascript
function createFunctions(){
    var result = new Array();
        for (var i=0; i < 10; i++){
            result[i] = function(){
            return i;
        };
    }
    return result;
}
```

每个函数的作用域链中都保存着 createFunctions() 函数的活动对象，所以它们引用的都是同一个变量i。

```javascript
function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
        result[i] = function(num){
            return function(){
                return num;
            };
        }(i);
    }
    return result;
}
```

创建并返回了一个访问 num 的闭包。这样一来， result 数组中的每个函数都有自己num 变量的一个副本，因此就可以返回各自不同的数值了。

### 关于 this对象

匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window。

### 模仿块级作用域

```javascript
(function(){
    //这里是块级作用域
})();
```
减少闭包占用的内存问题，因为没有指向匿名函数的引用。只要函数执行完毕，就可以立即销毁其作用域链了。

## 私有变量

有权访问私有变量和私有函数的公有方法称为特权方法。

```javascript
function MyObject(){
    //私有变量和私有函数
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    //特权方法
    this.publicMethod = function (){
        privateVariable++;
        return privateFunction();
    };
}
```

有构造函数模式的缺点。构造函数模式的缺点是针对每个实例都会创建同样一组新方法。

### 模块模式

模块模式通过为单例添加私有变量和特权方法能够使其得到增强。

```javascript
var application = function(){
    //私有变量和函数
    var components = new Array();
    //初始化
    components.push(new BaseComponent());
    //公共
    return {
        getComponentCount : function(){
            return components.length;
        },
        registerComponent : function(component){
            if (typeof component == "object"){
                components.push(component);
            }
        }
    };
}()
```

### 增强的模块模式

```javascript
var application = function(){
    //私有变量和函数
    var components = new Array();
    //初始化
    components.push(new BaseComponent());
    //创建 application 的一个局部副本
    var app = new BaseComponent();
    //公共接口
    app.getComponentCount = function(){
        return components.length;
    };
    app.registerComponent = function(component){
        if (typeof component == "object"){
            components.push(component);
        }
    };
    //返回这个副本
    return app;
}();
```

## 小结

闭包还可以用于在对象中创建私有变量，相关概念和要点如下。

> * 即使 JavaScript 中没有正式的私有对象属性的概念，但可以使用闭包来实现公有方法，而通过公
有方法可以访问在包含作用域中定义的变量。
> * 有权访问私有变量的公有方法叫做特权方法。
> * 可以使用构造函数模式、原型模式来实现自定义类型的特权方法，也可以使用模块模式、增强
的模块模式来实现单例的特权方法。

# 第8章 BOM

## window 对象

### 窗口关系及框架

每个 window 对象都有一个 name 属性，其中包含框架的名称。

top 对象始终指向最高（最外）层的框架，也就是浏览器窗口。

window 对象指向的都是那个框架的特定实例，而非最高层的框架。

parent 对象指向的就是上一层框架。

### 窗口位置

> * screenLeft：表示窗口相对于屏幕左边的位置。
> * screenTop：表示窗口相对于屏幕上边的位置。
> * screenX：表示窗口相对于屏幕左边的位置。
> * screenY：表示窗口相对于屏幕上边的位置。
> * moveTo(x, y)：将窗口精确地移动到一个新位置。
> * moveBy(px, py)：将窗口移动到相对的位置。

```javascript
var leftPos = (typeof window.screenLeft == "number") ?
    window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
    window.screenTop : window.screenY;
```

### 窗口大小

> * innerWidth：表示该容器中页面视图区的宽度。
> * innerHeight：表示该容器中页面视图区的高度。
> * outerWidth：返回浏览器窗口本身的宽度。
> * outerHeight：返回浏览器窗口本身的高度。
> * document.documentElement.clientWidth：页面视口的宽度。
> * document.documentElement.clientHeight：页面视口的高度。
> * document.body.clientWidth：页面视口的宽度。
> * document.body.clientHeight：页面视口的高度。
> * resizeTo(x, y)：调整浏览器窗口的大小。
> * resizeBy(px, py)：调整浏览器窗口的相对大小。

```javascript
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if (typeof pageWidth != "number"){
    if (document.compatMode == "CSS1Compat"){
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
```

### 导航和打开窗口

> * open(url[, framename, attribute, boolean])：第二个参数是已有窗口或框架的名称或 _self 、 _parent 、 _top 或 _blank。第三个参数是一个逗号分隔的设置字符串。第四个参数表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。导航到一个特定的 URL。
> * close()：适用于通过 window.open() 打开的弹出窗口。

### 间歇调用和超时调用

> * setTimeout(fn, time)：执行代码前需要等待多少毫秒。第一个参数传递字符串可能导致性能损失，因此不建议以字符串作为第一个参数。该方法会返回一个数值 ID，表示超时调用。
> * clearTimeout(id)：取消尚未执行的超时调用计划。
> * setInterval(fn, time)：按照指定的时间间隔重复执行代码。第一个参数传递字符串可能导致性能损失，因此不建议以字符串作为第一个参数。该方法会返回一个数值 ID，表示超时调用。
> * clearInterval(id)：取消尚未执行的超时调用计划。

### 系统对话框

> * alert(string)：接受一个字符串并将其显示给用户。
> * confirm(string)：返回的布尔值： true 表示单击了 OK， false 表示单击了Cancel。
> * prompt(tips, inputText)：提示框中除了显示 OK 和 Cancel 按钮之外，还会显示一个文本输入域，以供用户在其中输入内容。

## location 对象

location 对象的用处不只表现在它保存着当前文档的信息，还表现在它将 URL 解析为独立的片段，让开发人员可以通过不同的属性访问这些片段。

### 查询字符串参数

```javascript
function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
        //保存数据的对象
        args = {},
        //取得每一项
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        //在 for 循环中使用
        i = 0,
        len = items.length;
        
    //逐个将每一项添加到 args 对象中
    for (i=0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
        args[name] = value;
        }
    }
    return args;
}
```

### 位置操作

> * location.assign(url)：立即打开新 URL 并在浏览器的历史记录中生成一条记录。

每次修改 location 的属性（ hash 除外），页面都会以新 URL 重新加载。当通过上述任何一种方式修改 URL 之后，浏览器的历史记录中就会生成一条新记录。

> * location.replace(url)：即要导航到的 URL。虽然会导致浏览器位置改变，但不会在历史记录中生成新记
录。
> * location.reload([boolean])：不传递任何参数，页面就会从浏览器缓存中重新加载。如果要强制从服务器重新加载，为该方法传递参数 true 。

属性|作用|兼容性
:-|:-|:-
screenLeft|窗口相对于屏幕左边的位置|IE、Safari、Opera 和 Chrome
screenTop|窗口相对于屏幕上边的位置|IE、Safari、Opera 和 Chrome
screenX|窗口相对于屏幕左边的位置|Firefox、Safari、Chrome
screenY|窗口相对于屏幕上边的位置|Firefox、Safari、Chrome
innerWidth|页面视图区的宽度|IE9+
innerHeight|页面视图区的高度|IE9+
outerWidth|浏览器窗口本身的宽度|IE9+
outerHeight|浏览器窗口本身的高度|IE9+
document.documentElement.clientWidth|页面视口的宽度|IE6+标准模式
document.documentElement.clientHeight|页面视口的高度|IE6+标准模式
document.body.clientWidth|页面视口的宽度|混杂模式
document.body.clientHeight|页面视口的高度|混杂模式

方法|作用
:-|:-
moveTo(x, y)|将窗口精确地移动到一个新位置。禁用。
moveBy(px, py)|将窗口移动到相对的位置。禁用。
resizeTo(x, y)|调整浏览器窗口的大小。禁用。
resizeBy(px, py)|调整浏览器窗口的相对大小。禁用。
open(url[, framename, attribute, boolean])|导航到一个特定的 URL。
close()|适用于通过 window.open() 打开的弹出窗口。
setTimeout(fn, time)|超时调用。
clearTimeout(id)|取消超时调用。
setInterval(fn, time)|间歇调用。
clearInterval(id)|取消间歇调用。
alert(string)|接受一个字符串并将其显示给用户。
confirm(string)|显示给用户确认弹窗。
prompt(string)|显示有一个文本输入域的弹窗。
location.assign(url)|立即打开新 URL 并在浏览器的历史记录中生成一条记录。
location.replace(url)|即要导航到的 URL。
location.reload([boolean])|重新加载页面。

# 第9章 客户端检测

## 能力检测

能力检测的目标不是识别特定的浏览器，而是识别浏览器的能力。

## 怪癖检测

怪癖检测的目标是识别浏览器的特殊行为。

## 用户代理检测

```javascript
var client = function () {
	//呈现引擎
	var engine = {
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		//完整的版本号
		ver: null
	};
	//浏览器
	var browser = {
		//主要浏览器
		ie: 0,
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		//具体的版本号
		ver: null
	};
	//平台、设备和操作系统
	var system = {
		win: false,
		mac: false,
		x11: false,
		//移动设备
		iphone: false,
		ipod: false,
		ipad: false,
		ios: false,
		android: false,
		nokiaN: false,
		winMobile: false,
		//游戏系统
		wii: false,
		ps: false
	};
	//检测呈现引擎和浏览器
	var ua = navigator.userAgent;
	if (window.opera) {
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		//确定是 Chrome 还是 Safari
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		} else if (/Version\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		} else {
			//近似地确定版本号
			var safariVersion = 1;
			if (engine.webkit < 100) {
				safariVersion = 1;
			} else if (engine.webkit < 312) {
				safariVersion = 1.2;
			} else if (engine.webkit < 412) {
				safariVersion = 1.3;
			} else {
				safariVersion = 2;
			}
			browser.safari = browser.ver = safariVersion;
		}
	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
		//确定是不是 Firefox
		if (/Firefox\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	} else if (/MSIE ([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie = browser.ie = parseFloat(engine.ver);
	}
	//检测浏览器
	browser.ie = engine.ie;
	browser.opera = engine.opera;
	//检测平台
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	//检测 Windows 操作系统
	if (system.win) {
		if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
			if (RegExp["$1"] == "NT") {
				switch (RegExp["$2"]) {
					case "5.0":
						system.win = "2000";
						break;
					case "5.1":
						system.win = "XP";
						break;
					case "6.0":
						system.win = "Vista";
						break;
					case "6.1":
						system.win = "7";
						break;
					default:
						system.win = "NT";
						break;
				}
			} else if (RegExp["$1"] == "9x") {
				system.win = "ME";
			} else {
				system.win = RegExp["$1"];
			}
		}
	}
	//移动设备
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipod = ua.indexOf("iPod") > -1;
	system.ipad = ua.indexOf("iPad") > -1;
	system.nokiaN = ua.indexOf("NokiaN") > -1;
	//windows mobile
	if (system.win == "CE") {
		system.winMobile = system.win;
	} else if (system.win == "Ph") {
		if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
			;
			system.win = "Phone";
			system.winMobile = parseFloat(RegExp["$1"]);
		}
	}
	//检测 iOS 版本
	if (system.mac && ua.indexOf("Mobile") > -1) {
		if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
			system.ios = parseFloat(RegExp.$1.replace("_", "."));
		} else {
			system.ios = 2; //不能真正检测出来，所以只能猜测
		}
	}
	//检测 Android 版本
	if (/Android (\d+\.\d+)/.test(ua)) {
		system.android = parseFloat(RegExp.$1);
	}
	//游戏系统
	system.wii = ua.indexOf("Wii") > -1;
	system.ps = /playstation/i.test(ua);
	//返回这些对象
	return {
		engine: engine,
		browser: browser,
		system: system
	};
}();

```

# 第10章 DOM

## 节点层次

### Node 类型

NodeList 对象的独特之处在于，它实际上是基于 DOM 结构动态执行查询的结果。

所有节点都有的最后一个属性是 ownerDocument ，该属性指向表示整个文档的文档节点。

> * item(index)：返回索引为index的NodeList成员。

**操作节点**

> * appendChild(newElement)：插件新节点。如果节点已经是文档的一部分了，那结果就是将该节点从原来的位置转移到新位置。返回新增的节点。
> * insertBefore(newChild[, referenceChild])：把节点放在 childNodes 列表中某个特定的位置上。被插入的节点会变成参照节点的前一个同胞节点,同时被方法返回。如果参照节点是null ，则insertBefore() 与 appendChild() 执行相同的操作。
> * replaceChild(newnode, oldnode)：替换某个节点。
> * removeChild(newChild, oldChild)：删除某个节点。

**其他方法**

> * cloneNode([deep])：克隆节点。在参数为 true的情况下，执行深复制。

方法|作用|返回
appendChild(newElement)|插入新节点到最后|插入的节点
insertBefore(newnode[, referenceChild])|把节点放在 childNodes 列表中某个特定的位置上|插入的节点
replaceChild(newnode, oldnode)|替换某个节点|被替换的节点
removeChild(node)|删除某个节点|被删除的节点
cloneNode(deep)|克隆某个节点|被克隆节点

## Document 类型

**查找元素**

> * getElementById(id):返回对拥有指定 ID 的第一个对象的引用。
> * getElementsByTagName(tagname):返回元素的顺序是它们在文档中的顺序。

HTMLCollection 对象还有一个方法
> * namedItem(index):通过元素的 name 特性取得集合中的项。

> * getElementsByName(name):返回带有给定 name 特性的所有元素。

**特殊集合**

> * document.forms:包含文档中所有的 <form> 元素，与 document.getElementsByTagName("form")得到的结果相同；
> * document.images:包含文档中所有的 <img> 元素，与 document.getElementsByTagName("img") 得到的结果相同；
> * document.links:包含文档中所有带 href 特性的 <a> 元素。

**文档写入**

> * write(string):将输出流写入到网页中。会执行script标签的javascript语句。
> * writeln(string):将输出流写入到网页中。会执行script标签的javascript语句。
> * open():打开网页的输出流。
> * close():关闭网页的输出流。

### Element 类型

~~**取得特性**~~

> * getAttribute(attributename):返回指定属性名的属性值。
> * setAttribute(attributename, attributevalue):添加指定的属性，并为其赋指定的值。
> * removeAttribute(attributename):删除指定的属性。

~~**attributes 属性**~~

> * getNamedItem(name):返回 nodeName 属性等于 name 的节点；
> * removeNamedItem(name):从列表中移除 nodeName 属性等于 name 的节点；
> * setNamedItem(node):向列表中添加节点，以节点的 nodeName 属性为索引；
> * item(pos):返回位于数字 pos 位置处的节点。

### Text 类型

**规范化文本节点**

> * normalize():将所有文本节点合并成一个节点。

## DOM 操作技术

### ~~动态脚本~~

```javascript
function loadScriptString(code){
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex){
        script.text = code;
    }
    document.body.appendChild(script);
}
```

### ~~动态样式~~

```javascript
function loadStyleString(css){
    var style = document.createElement("style");
    style.type = "text/css";
    try{
        style.appendChild(document.createTextNode(css));
    } catch (ex){
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
```

## 小结

> * 最基本的节点类型是 Node ，用于抽象地表示文档中一个独立的部分；所有其他类型都继承自Node 。
> * Document 类型表示整个文档，是一组分层节点的根节点。在 JavaScript 中，document 对象是Document 的一个实例。使用 document 对象，有很多种方式可以查询和取得节点。
> * Element 节点表示文档中的所有 HTML 或 XML 元素，可以用来操作这些元素的内容和特性。
> * 另外还有一些节点类型，分别表示文本内容、注释、文档类型、CDATA 区域和文档片段。

类型|nodeType|nodeName|nodeValue|parentNode|ownerDocument|子节点|创建方法
:-|:-|:-|:-|:-|:-|:-|:-
Document|9|#document|null|null|null|可能是一个DocumentType、 Element、 ProcessingInstruction或 Comment 。
Element|1|元素的标签名|null| Document 或 Element|Document| Element 、 Text 、 Comment 、 ProcessingInstruction 、 CDATASection 或 EntityReference|createElement(str)
Text|3|#text|节点所包含的文本|Element|Document|没有子节点|createTextNode("str")
Comment|8|#comment|注释的内容| Document 或 Element|Document|没有子节点|createComment(str)
CDATASection|4|#cdata-section| CDATA 区域中的内容|null|null| Document 或 Element|没有子节点|createCDataSection()
DocumentType|10|doctype 的名称|null|null|Document|没有子节点|
DocumentFragment|11|#document-fragment|null|null|Document|Element 、ProcessingInstruction 、 Comment 、 Text 、 CDATASection 或EntityReference |createDocumentFragment()
Attr|2|特性的名称|特性的值|null|Document|没有子节点|createAttribute(str)

# 第11章 DOM 扩展

## 选择符 API

> * querySelector(selector): 返回与该模式匹配的第一个元素。
> * querySelectorAll(selector): 返回的是一个 NodeList 的实例。
> * matchesSelector(selector): 检测CSS选择符是否被querySelector、querySelectorAll方法返回。

```javascript
function matchesSelector(element, selector){
    if (element.matchesSelector){
        return element.matchesSelector(selector);
    } else if (element.msMatchesSelector){
        return element.msMatchesSelector(selector);
    } else if (element.mozMatchesSelector){
        return element.mozMatchesSelector(selector);
    } else if (element.webkitMatchesSelector){
        return element.webkitMatchesSelector(selector);
    } else {
        throw new Error("Not supported.");
    }
}
```

## 元素遍历

> * getElementsByClassName(className):返回带有指定类的所有元素的 NodeList 。

**classList 属性**

> * add(value) ：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
> * contains(value) ：表示列表中是否存在给定的值，如果存在则返回 true ，否则返回 false 。
> * remove(value) ：从列表中删除给定的字符串。
> * toggle(value) ：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。

### HTMLDocument 的变化

**readyState 属性**

Document 的 readyState 属性有两个可能的值：
> * loading:正在加载文档；
> * complete:已经加载完文档。

### 插入标记

> * innerHTML:不支持 innerHTML 的元素有： &lt;col> 、 &lt;colgroup> 、&lt;frameset> 、 &lt;head> 、 &lt;html> 、 &lt;style> 、 &lt;table> 、 &lt;tbody> 、 &lt;thead> 、 &lt;tfoot> 和 &lt;tr> 。
> * outerHTML: 返回调用它的元素及所有子节点的 HTML 标签。
> * insertAdjacentHTML():
    > * "beforebegin":在当前元素之前插入一个紧邻的同辈元素；
    > * "afterbegin":在当前元素之下插入一个新的子元素或在第一个子元素之前再插入新的子元素；
    > * "beforeend":在当前元素之下插入一个新的子元素或在最后一个子元素之后再插入新的子元素；
    > * "afterend":在当前元素之后插入一个紧邻的同辈元素。

### scrollIntoView() 方法

> * scrollIntoView([true]):滚动浏览器窗口或某个容器元素，调用元素就可以出现在视口中。

## 专有扩展

### 文档模式

文档模式决定了你可以使用哪个级别的 CSS，可以在 JavaScript 中使用哪些 API，以及如何对待文档类型（doctype）。

要强制浏览器以某种模式渲染页面，可以使用 HTTP 头部信息 X-UA-Compatible ，或通过等价的&lt;meta> 标签来设置：

```html
<meta http-equiv="X-UA-Compatible" content="IE=IEVersion">
```

> * Edge ：始终以最新的文档模式来渲染页面。忽略文档类型声明。
> * EmulateIE9 ：如果有文档类型声明，则以 IE9 标准模式渲染页面，否则将文档模式设置为 IE5。
> * EmulateIE8 ：如果有文档类型声明，则以 IE8 标准模式渲染页面，否则将文档模式设置为 IE5。
> * EmulateIE7 ：如果有文档类型声明，则以 IE7 标准模式渲染页面，否则将文档模式设置为 IE5。
> * 9 ：强制以 IE9 标准模式渲染页面，忽略文档类型声明。
> * 8 ：强制以 IE8 标准模式渲染页面，忽略文档类型声明。
> * 7 ：强制以 IE7 标准模式渲染页面，忽略文档类型声明。
> * 5 ：强制将文档模式设置为 IE5，忽略文档类型声明。

通过 document.documentMode 属性可以知道给定页面使用的是什么文档模式。

### contains() 方法

> * contains(node)：返回一个表示该关系的位掩码（ bitmask）。

掩码|节点关系
:-|:-
1|无关
2|居前
4|居后
8|包含（给定的节点是参考节点的祖先）  
16|被包含（给定的节点是参考节点的后代）

```javascript
function contains(refNode, otherNode){
    if (typeof refNode.contains == "function" &&
        (!client.engine.webkit || client.engine.webkit >= 522)){
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function"){
        return !!(refNode.compareDocumentPosition(otherNode) & 16);
    } else {
    var node = otherNode.parentNode;
    do {
        if (node === refNode){
            return true;
        } else {
            node = node.parentNode;
        }
    } while (node !== null);
        return false;
    }
}
```

### 插入文本

> * innerText：读取值时，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来。在通过
innerText 写入值时，结果会删除元素的所有子节点，插入包含相应文本值的文本节点。
> * textContent：等同于innerText。
> * outerText：读取文本值时， outerText 与 innerText 的结果完全一样。写模式下，会替换整个元素（包括子节点）。

方法|返回|返回类型
:-|:-|:-
getElementById(id)|指定 ID第一对象的引用|HTMLEXXXlement
getElementsByTagName(id)|指定 ID第一对象的引用|HTMLCollection
getElementsByName(name)|给定 name 特性的所有元素|NodeList
querySelector(selector)|返回与该模式匹配的第一个元素|HTMLEXXXlement
querySelectorAll(selector)|NodeList 的实例|NodeList
getElementsByClassName(className)|指定类的所有元素|NodeList

# 第12章 DOM2和DOM3

## DOM 变化

### 针对XML命名空间的变化

**Node 类型的变化**

在 DOM2 级中， Node 类型包含下列特定于命名空间的属性。

> * localName ：不带命名空间前缀的节点名称。
> * namespaceURI ：命名空间 URI 或者（在未指定的情况下是） null 。
> * prefix ：命名空间前缀或者（在未指定的情况下是） null 。

```html
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Example XHTML page</title>
    </head>
    <body>
        <s:svg xmlns:s="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 100 100" style="width:100%; height:100%">
        <s:rect x="0" y="0" width="100" height="100" style="fill:red"/>
        </s:svg>
    </body>
</html>
```

对于 &lt;s:svg> 元素而言，它的 localName 是 "svg" ，tagName 是 "s:svg" ， namespaceURI 是 "http://www.w3.org/2000/svg" ，而 prefix 是 "s" 。

DOM3 级在此基础上更进一步，又引入了下列与命名空间有关的方法。

> * isDefaultNamespace(namespaceURI) ：在指定的 namespaceURI 是当前节点的默认命名空间的情况下返回 true 。
> * lookupNamespaceURI(prefix) ：返回给定 prefix 的命名空间。
> * lookupPrefix(namespaceURI) ：返回给定 namespaceURI 的前缀。

**Document 类型的变化**

DOM2 级中的 Document 类型也发生了变化，包含了下列与命名空间有关的方法。

> * createElementNS(namespaceURI, tagName) ：使用给定的 tagName 创建一个属于命名空间 namespaceURI 的新元素。
> * createAttributeNS(namespaceURI, attributeName) ：使用给定的 attributeName 创建一个属于命名空间 namespaceURI 的新特性。
> * getElementsByTagNameNS(namespaceURI, tagName) ：返回属于命名空间 namespaceURI的 tagName 元素的 NodeList 。

**Element 类型的变化**

“DOM2 级核心”中有关 Element 的变化，主要涉及操作特性。

> * getAttributeNS(namespaceURI,localName) ：取得属于命名空间namespaceURI 且名为localName 的特性。
> * getAttributeNodeNS(namespaceURI,localName) ：取得属于命名空间 namespaceURI 且名为 localName 的特性节点。
> * getElementsByTagNameNS(namespaceURI, tagName) ：返回属于命名空间 namespaceURI的 tagName 元素的 NodeList 。
> * hasAttributeNS(namespaceURI,localName) ：确定当前元素是否有一个名为 localName的特性，而且该特性的命名空间是 namespaceURI 。
> * removeAttriubteNS(namespaceURI,localName) ：删除属于命名空间 namespaceURI 且名为 localName 的特性。
> * setAttributeNS(namespaceURI,qualifiedName,value) ：设置属于命名空间 namespaceURI 且名为 qualifiedName 的特性的值为 value 。
> * setAttributeNodeNS(attNode) ：设置属于命名空间 namespaceURI 的特性节点。

**NamedNodeMap 类型的变化**

> * getNamedItemNS(namespaceURI,localName) ：取得属于命名空间 namespaceURI 且名为localName 的项。
> * removeNamedItemNS(namespaceURI,localName) ：移除属于命名空间 namespaceURI 且名为 localName 的项。
> * setNamedItemNS(node) ：添加 node ，这个节点已经事先指定了命名空间信息。

### 其他方面的变化

**DocumentType 类型的变化**

DocumentType 类型新增了 3 个属性： publicId 、 systemId 和internalSubset 。其中，前两个属性表示的是文档类型声明中的两个信息段。最后一个属性 internalSubset ，用于访问包含在文档类型声明中的额外定义。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd" [<!ELEMENT name (#PCDATA)>]>
```

```javascript
alert(document.doctype.publicId);   // "-//W3C//DTD HTML 4.01//EN"
alert(document.doctype.systemId);   // "http://www.w3.org/TR/html4/strict.dtd"
alert(document.doctype.internalSubset);    // "<!ELEMENT name (#PCDATA)>"
```

**Document 类型的变化**
DOM2 级 HTML”模块也为 document.implementation 新增了一个方法

> * createHTMLDocument(title)：创建一个完整的 HTML 文档。

**Node 类型的变化**

DOM3级引入了两个辅助比较节点的方法。
> * isSameNode(node)：比较引用的节点相同。
> * isEqualNode(node)：比较引用的节点相等。

**框架的变化**

```javascript
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
```

## 样式

### 访问元素的样式

**DOM 样式属性和方法**

float 是 JavaScript 中的保留字，因此不能用作属性名。“DOM2 级样式”规范规定样式对象上相应的属性名应该是 cssFloat ；Firefox、Safari、Opera 和 Chrome 都支持这个属性，而 IE支持的则是 styleFloat 。

~~**DOM 样式属性和方法**~~

> * cssText ：访问到 style 特性中的 CSS 代码。
> * length ：给元素的 CSS 属性的数量。
> * parentRule ：表示 CSS 信息的 CSSRule 对象。
> * getPropertyCSSValue(propertyName) ：返回包含给定属性值的 CSSValue 对象。
> * getPropertyPriority(propertyName) ：如果给定的属性使用了 !important 设置，则返回"important" ；否则，返回空字符串。
> * getPropertyValue(propertyName) ：返回给定属性的字符串值。
> * item(index) ：返回给定位置的 CSS 属性的名称。
> * removeProperty(propertyName) ：从样式中删除给定属性。
> * setProperty(propertyName,value,priority) ：将给定属性设置为相应的值，并加上优先权标志（ "important" 或者一个空字符串）。

**计算的样式**

> * getComputedStyle(elt, pseudoElt)：返回一个 CSSStyleDeclaration 对象。

~~**操作样式表**~~

> * disabled ：表示样式表是否被禁用的布尔值。
> * href ：如果样式表是通过 <link> 包含的，则是样式表的 URL；否则，是 null 。
> * media ：当前样式表支持的所有媒体类型的集合。
> * ownerNode ：指向拥有当前样式表的节点的指针，样式表可能是在 HTML 中通过 &lt;link> 或&lt;style/> 引入的（在 XML 中可能是通过处理指令引入的）。
> * parentStyleSheet ：在当前样式表是通过 @import 导入的情况下，这个属性是一个指向导入它的样式表的指针。
> * title ： ownerNode 中 title 属性的值。
> * type ：表示样式表类型的字符串。
> * cssRules ：样式表中包含的样式规则的集合。IE 不支持这个属性，但有一个类似的 rules 属性。
> * ownerRule ：如果样式表是通过@import 导入的，这个属性就是一个指针，指向表示导入的规则；否则，值为 null 。IE不支持这个属性。
> * deleteRule(index) ：删除 cssRules 集合中指定位置的规则。IE 不支持这个方法，但支持一个类似的 removeRule() 方法。
> * insertRule(rule, index) ：向 cssRules 集合中指定的位置插入 rule 字符串。IE 不支持这个方法，但支持一个类似的 addRule() 方法。

**CSS 规则**

CSSStyleRule 对象包含下列属性。

> * cssText ：返回整条规则对应的文本。只读
> * parentRule ：如果当前规则是导入的规则，这个属性引用的就是导入规则；否则，这个值为null 。
> * parentStyleSheet ：当前规则所属的样式表。
> * selectorText ：返回当前规则的选择符文本。
> * style ：一个 CSSStyleDeclaration 对象，可以通过它设置和取得规则中特定的样式值。style.cssText可读可写。
> * type ：表示规则类型的常量值。

### 元素大小

**偏移量**

> * offsetHeight：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。
> * offsetWidth：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。
> * offsetLeft ：元素的左外边框至offsetParent的距离，包含元素的左内边框之间的像素距离。
> * offsetTop ：元素的上外边框至至offsetParent的距离，包含元素的上内边框之间的像素距离。

**客户区大小**

> * clientWidth：元素内容区宽度加上左右内边距宽度。
> * clientHeight：元素内容区高度加上上下内边距高度。

**滚动大小**

> * scrollWidth ：在没有滚动条的情况下，元素内容的总宽度。
> * scrollHeight ：在没有滚动条的情况下，元素内容的总高度。
> * scrollLeft ：被隐藏在内容区域左侧的像素数。
> * scrollTop ：被隐藏在内容区域上方的像素数。

**确定元素大小**

> * getBoundingClientRect()：返回会一个矩形对象，包含 4 个属性： left 、 top 、right 和 bottom 。

属性|作用|兼容性
:-|:-|:-
screenLeft|窗口相对于屏幕左边的位置|IE、Safari、Opera 和 Chrome
screenTop|窗口相对于屏幕上边的位置|IE、Safari、Opera 和 Chrome
screenX|窗口相对于屏幕左边的位置|Firefox、Safari、Chrome
screenY|窗口相对于屏幕上边的位置|Firefox、Safari、Chrome
innerWidth|页面视图区的宽度|IE9+
innerHeight|页面视图区的高度|IE9+
outerWidth|浏览器窗口本身的宽度|IE9+
outerHeight|浏览器窗口本身的高度|IE9+
document.documentElement.clientWidth|页面视口的宽度|IE6+标准模式
document.documentElement.clientHeight|页面视口的高度|IE6+标准模式
document.body.clientWidth|页面视口的宽度|混杂模式
document.body.clientHeight|页面视口的高度|混杂模式
offsetWidth|元素在水平方向上占用的空间大小，以像素计|好
offsetHeight|元素在垂直方向上占用的空间大小，以像素计|好
offsetLeft|元素的左外边框至offsetParent的距离|好
offsetTop|元素的上外边框至至offsetParent的距离|好
clientWidth|元素内容区宽度加上左右内边距宽度|好
clientHeight|元素内容区高度加上上下内边距高度|好
scrollWidth|在没有滚动条的情况下，元素内容的总宽度|好
scrollHeight|在没有滚动条的情况下，元素内容的总高度。|好
scrollLeft|被隐藏在内容区域左侧的像素数|好
scrollTop|被隐藏在内容区域上方的像素数|好

## 遍历

### ~~NodeIterator~~

> * document.createNodeIterator(root, whatToShow, filter, entityReferenceExpansion)：
    > * root：想要作为搜索起点的树中的节点。
    > * whatToShow：表示要访问哪些节点的数字代码。
    > * filter：是一个 NodeFilter 对象，或者一个表示应该接受还是拒绝某种特定节点的函数。
    > * entityReferenceExpansion：布尔值，表示是否要扩展实体引用。

NodeIterator 类型的两个主要方法是 nextNode() 和 previousNode() 

> * nextNode()：向前前进一步。
> * previousNode()：向后后退一步。

### ~~TreeWalker~~

> * parentNode()：遍历到当前节点的父节点；
> * firstChild()：遍历到当前节点的第一个子节点；
> * lastChild()：遍历到当前节点的最后一个子节点；
> * nextSibling()：遍历到当前节点的下一个同辈节点；
> * previousSibling()：遍历到当前节点的上一个同辈节点。

## 范围

### DOM中的范围

> * document.createRange()：创建 DOM 范围。

实例拥有很多属性和方法。

> * startContainer：包含范围起点的节点（即选区中第一个节点的父节点）。
> * startOffset：范围在 startContainer 中起点的偏移量。如果 startContainer 是文本节点、注释节点或 CDATA 节点，那么 startOffset 就是范围起点之前跳过的字符数量。否则，startOffset 就是范围中第一个子节点的索引。
> * endContainer：包含范围终点的节点（即选区中最后一个节点的父节点）。
> * endOffset：范围在 endContainer 中终点的偏移量（与 startOffset 遵循相同的取值规则）。
> * commonAncestorContainer：startContainer 和 endContainer 共同的祖先节点在文档树中位置最深的那个。

**用 DOM 范围实现简单选择**

> * range.selectNode(node)： 选择整个节点，包括其子节点；
> * range.selectNodeContents(node)： 只选择节点的子节点。

更精细地控制将哪些节点包含在范围中，还可以使用下列方法。自动会设置container和offset。
> * range.setStartBefore(refNode) ：将范围的起点设置在 refNode 之前，因此 refNode 也就是范围选区中的第一个子节点。
> * range.setStartAfter(refNode) ：将范围的起点设置在 refNode 之后，因此 refNode 也就不在范围之内了，其下一个同辈节点才是范围选区中的第一个子节点。
> * range.setEndBefore(refNode) ：将范围的终点设置在 refNode 之前，因此 refNode 也就不在范围之内了，其上一个同辈节点才是范围选区中的最后一个子节点。
> * range.setEndAfter(refNode) ：将范围的终点设置在 refNode 之后，因此 refNode 也就是范围选区中的最后一个子节点。

**用 DOM 范围实现复杂选择**

> * range.setStart(startContainer, startOffset)：参照节点会变成 startContainer ，而偏移量值会变成startOffset 。
> * range.setEnd(endContainer, endOffset)：参照节点会变成 endContainer ，而偏移量值会变成 endOffset 。

**操作 DOM 范围中的内容**

> * range.deleteContents()：从文档中删除范围所包含的内容。

**插入 DOM 范围中的内容**

> * range.insertNode(node)：向范围选区的开始处插入一个节点。

**复制 DOM 范围**

> * range.cloneRange()：复制范围。

**清理 DOM 范围**

> * range.detach()：分离范围。

### IE8 及更早版本中的范围

> * document.body.createTextRange()：创建文本范围。

**用 IE 范围实现简单的选择**

> * range.findText(string, boolean)：找到第一次出现的给定文本，并将范围移过来以环绕该文本。如果没有找到文本，这个方法返回 false ；否则返回true 。第二个参数为负值表示应该从当前位置向后搜索，而正值表示应该从当前位置向前搜索。
> * moveToElementText(node)：选择该元素的所有文本,包括 HTML 标签。

**使用 IE 范围实现复杂的选择**

> * range.move(unit, unitNumber)：首先会折叠当前范围（让起点和终点相等），然后再将范围移动指定的单位数量。必须再使用 moveStart() 或 moveEnd() 创建新的选区。
> * range.moveStart(unit, unitNumber)：移动范围的起点。
> * range.moveEnd(unit, unitNumber)：移动范围的终点。
> * range.expand(unit, unitNumber)：将任何部分选择的文本全部选中。

unit：移动单位。移动的幅度由单位数量指定。
> * "character" ：逐个字符地移动。
> * "word" ：逐个单词（一系列非空格字符）地移动。
> * "sentence" ：逐个句子（一系列以句号、问号或叹号结尾的字符）地移动。
> * "textedit" ：移动到当前范围选区的开始或结束位置。

**操作 IE 范围中的内容**

> * range.pasteHTML()：向范围中插入 HTML 代码。

**复制 IE 范围**

> * range.duplicate()：复制文本范围。

# 第13章 事件

## 事件流

事件流描述的是从页面中接收事件的顺序。

### 事件冒泡

事件冒泡（event bubbling），即事件开始时由最具体的元素（文档中嵌套层次最深
的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。

### 事件捕获

不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。

### DOM事件流

事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。

## 事件处理程序

### DOM2 级事件处理程序

> * addEventListener(event, fn, capture)：布尔值参数如果是 true ，表示在捕获阶段调用事件处理程序；如果是 false ，表示在冒泡阶段调用事件处理程序。
> * removeEventListener(event, fn, capture)：移除事件。

### IE事件处理程序

> * attachEvent(event, fn)：添加一个事件处理程序。第一个参数"on"+事件名。
> * detachEvent(event, fn)：移除一个事件处理程序。

## 事件对象

### DOM中的事件对象

可用的属性和方法。
属性/方法|类 型|读/写|说 明
:-|:-|:-|:-
bubbles|Boolean|只读|表明事件是否冒泡
cancelable|Boolean|只读|表明是否可以取消事件的默认行为
currentTarget|Element|只读|其事件处理程序当前正在处理事件的那个元素
defaultPrevented|Boolean|只读|为 true 表 示 已 经 调 用 了 preventDefault()
detail|Integer|只读|与事件相关的细节信息
detail|Integer|只读|与事件相关的细节信息
eventPhase|Integer|只读|调用事件处理程序的阶段：1表示捕获阶段，2表示“处于目标”，3表示冒泡阶段
preventDefault()|Function|只读|取消事件的默认行为。如果 cancelable 是true ，则可以使用这个方法
stopImmediatePropagation()|Function|只读|取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用
stopPropagation()|Function|只读|取消事件的进一步捕获或冒泡。如果 bubbles为 true ，则可以使用这个方法
target|Element|只读|事件的目标
trusted|Boolean|只读|为 true 表示事件是浏览器生成的。
type|String|只读|被触发的事件的类型
view|AbstractView|只读|与事件关联的抽象视图。等同于发生事件的window 对象

### IE中的事件对象

可用的属性和方法。
属性/方法|类 型|读/写|说 明
:-|:-|:-|:-
cancelBubble|Boolean|只读|默认值为 false ，但将其设置为 true 就可以取消事件冒泡（与DOM中的 stopPropagation() 方法的作用相同）
returnValue|Boolean|只读|默认值为 true ，但将其设置为 false 就可以取消事件的默认行为（与DOM中的 preventDefault() 方法的作用相同）
srcElement|Element|只读|事件的目标（与DOM中的 target 属性相同）
type|String|只读|被触发的事件的类型

## 事件类型

### UI事件

> * load ：当页面完全加载后在 window 上面触发，当所有框架都加载完毕时在框架集上面触发，当图像加载完毕时在 <img> 元素上面触发，或者当嵌入的内容加载完毕时在 <object> 元素上面触发。
> * unload ：当页面完全卸载后在 window 上面触发，当所有框架都卸载后在框架集上面触发，或者当嵌入的内容卸载完毕后在 <object> 元素上面触发。
> * abort ：在用户停止下载过程时，如果嵌入的内容没有加载完，则在 <object> 元素上面触发。
> * error ：当发生 JavaScript 错误时在 window 上面触发，当无法加载图像时在 <img> 元素上面触发，当无法加载嵌入内容时在 <object> 元素上面触发，或者当有一或多个框架无法加载时在框架集上面触发。第 17 章将继续讨论这个事件。
> * select ：当用户选择文本框（ <input> 或 <texterea> ）中的一或多个字符时触发。
> * resize ：当窗口或框架的大小变化时在 window 或框架上面触发。
> * scroll ：当用户滚动带滚动条的元素中的内容时，在该元素上面触发。 <body> 元素中包含所加载页面的滚动条。

### 焦点事件

> * blur ：在元素失去焦点时触发。这个事件不会冒泡；所有浏览器都支持它。
> * DOMFocusIn ：在元素获得焦点时触发。这个事件与 HTML 事件 focus 等价，但它冒泡。只有Opera 支持这个事件。DOM3 级事件废弃了 DOMFocusIn ，选择了 focusin 。
> * DOMFocusOut ：在元素失去焦点时触发。这个事件是 HTML 事件 blur 的通用版本。只有 Opera支持这个事件。DOM3 级事件废弃了 DOMFocusOut ，选择了 focusout 。
> * focus ：在元素获得焦点时触发。这个事件不会冒泡；所有浏览器都支持它。
> * focusin ：在元素获得焦点时触发。这个事件与 HTML 事件 focus 等价，但它冒泡。
> * focusout ：在元素失去焦点时触发。这个事件是 HTML 事件 blur 的通用版本。

当焦点从页面中的一个元素移动到另一个元素，会依次触发下列事件：
(1) focusout 在失去焦点的元素上触发；
(2)  focusin 在获得焦点的元素上触发；
(3)  blur 在失去焦点的元素上触发；
(4)  DOMFocusOut 在失去焦点的元素上触发；
(5)  focus 在获得焦点的元素上触发；
(6)  DOMFocusIn 在获得焦点的元素上触发

### 鼠标与滚轮事件

> * click ：在用户单击主鼠标按钮（一般是左边的按钮）或者按下回车键时触发。
> * dblclick ：在用户双击主鼠标按钮（一般是左边的按钮）时触发。
> * mousedown ：在用户按下了任意鼠标按钮时触发。
> * mouseenter ：在鼠标光标从元素外部首次移动到元素范围之内时触发。
> * mouseleave ：在位于元素上方的鼠标光标移动到元素范围之外时触发。
> * mousemove ：当鼠标指针在元素内部移动时重复地触发。
> * mouseout ：在鼠标指针位于一个元素上方，然后用户将其移入另一个元素时触发。又移入的另一个元素可能位于前一个元素的外部，也可能是这个元素的子元素。
> * mouseover ：在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发。
> * mouseup ：在用户释放鼠标按钮时触发。

触发的顺序。
(1) mousedown
(2)  mouseup
(3)  click
(4)  mousedown
(5)  mouseup
(6)  click
(7)  dblclick

**客户区坐标位置**

> * event.clientX：鼠标指针在视口中的水平位置。
> * event.clientY：鼠标指针在视口中的垂直位置。

**页面坐标位置**

> * event.pageX：鼠标指针在页面中的水平位置。
> * event.pageY：鼠标指针在页面中的垂直位置。

**屏幕坐标位置**

> * event.screenX：鼠标指针在屏幕中的水平位置。
> * event.screenY：鼠标指针在屏幕中的垂直位置。

**修改键**

修改键就是 Shift、Ctrl、Alt 和 Meta。DOM 为此规定了 4 个属性，表示这些修改键的状态： shiftKey 、 ctrlKey 、 altKey 和 metaKey 。

**相关元素**

> * event.relatedTarget：这个属性只对于 mouseover和 mouseout 事件才包含值；对于其他事件，这个属性的值是 null 。在 mouseover 事件触发时，IE的 fromElement 属性中保存了相关元素；在 mouseout 事件触发时，IE的 toElement 属性中保存着相关元素。

**鼠标按钮**

> event.button：0 表示主鼠标按钮， 1 表示中间的鼠标按钮（鼠标滚轮按钮）， 2 表示次鼠标按钮。

**鼠标滚轮事件**

与 mousewheel 事件对应的 event 对象除包含鼠标事件的所有标准信息外，还包含一个特殊的 wheelDelta 属性。当用户向前滚动鼠标滚轮时，wheelDelta 是 120 的倍数；当用户向后滚动鼠标滚轮时， wheelDelta 是120 的倍数。

Firefox 支持一个名为 DOMMouseScroll 的类似事件。有关鼠标滚轮的信息则保存在 detail 属性中，当向前滚动鼠标滚轮时，这个属性的值是 -3 的倍数，当向后滚动鼠标滚轮时，这个属性的值是 3 的倍数。

### 键盘与文本事件

有 3 个键盘事件，简述如下。 
> * keydown ：当用户按下键盘上的任意键时触发，而且如果按住不放的话，会重复触发此事件。
> * keypress ：当用户按下键盘上的字符键时触发，而且如果按住不放的话，会重复触发此事件。按下 Esc 键也会触发这个事件。
> * keyup ：当用户释放键盘上的键时触发。
> * textInput　：这个事件是对 keypress 的补充，用意是在将文本显示给用户之前更容易拦截文本。在文本插入文本框之前会触发 textInput 事件。

### ~~变动事件~~

> * DOMSubtreeModified ：在 DOM 结构中发生任何变化时触发。这个事件在其他任何事件触发后都会触发。
> * DOMNodeInserted ：在一个节点作为子节点被插入到另一个节点中时触发。
> * DOMNodeRemoved ：在节点从其父节点中被移除时触发。
> * DOMNodeInsertedIntoDocument ：在一个节点被直接插入文档或通过子树间接插入文档之后触发。这个事件在 DOMNodeInserted 之后触发。
> * DOMNodeRemovedFromDocument ：在一个节点被直接从文档中移除或通过子树间接从文档中移除之前触发。这个事件在 DOMNodeRemoved 之后触发。
> * DOMAttrModified ：在特性被修改之后触发。
> * DOMCharacterDataModified ：在文本节点的值发生变化时触发。

### HTML5 事件

**contextmenu 事件**

在所有浏览器中都可以取消这个事件：在兼容 DOM 的浏览器中，使用event.preventDefalut() ；在 IE 中，将 event.returnValue 的值设置为 false 。

**beforeunload 事件**

为了显示这个弹出对话框，必须将 event.returnValue 的值设置为要显示给用户的字符串。

**DOMContentLoaded 事件**

DOMContentLoaded 事件则在形成完整的 DOM树之后就会触发，不理会图像、JavaScript 文件、CSS 文件或其他资源是否已经下载完毕。

**readystatechange 事件**
每个对象都有一个 readyState 属性，可能包含下列 5 个值中的一个。
> * uninitialized （未初始化）：对象存在但尚未初始化。
> * loading （正在加载）：对象正在加载数据。
> * loaded （加载完毕）：对象加载数据完成。
> * interactive （交互）：可以操作对象了，但还没有完全加载。
> * complete （完成）：对象已经加载完毕。

在包含较多或较大的外部资源的页面中，会在 load 事件触发之前先进入交互阶段；而在包含较少或较小的外部资源的页面中，则很难说 readystatechange 事件会发生在 load 事件前面。

让问题变得更复杂的是，交互阶段可能会早于也可能会晚于完成阶段出现，无法确保顺序。

```javascript
EventUtil.addHandler(document, "readystatechange", function(event){
    if (document.readyState == "interactive" || document.readyState == "complete"){
        EventUtil.removeHandler(document, "readystatechange", arguments.callee);
        alert("Content loaded");
    }
});
```

基 于 元 素 触 发 的readystatechange 事件也存在同样的问题，即 readyState 属性无论等于 "loaded" 还是"complete" 都可以表示资源已经可用。有时候， readyState 会停在 "loaded" 阶段而永远不会“完成”；有时候，又会跳过 "loaded" 阶段而直接“完成”。

```javascript
EventUtil.addHandler(window, "load", function(){
    var script = document.createElement("script");
    EventUtil.addHandler(script, "readystatechange", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        if (target.readyState == "loaded" || target.readyState == "complete"){
            EventUtil.removeHandler(target, "readystatechange", arguments. callee);
            alert("Script Loaded");
        }
    });
    script.src = "example.js";
    document.body.appendChild(script);
});
```

**pageshow 和 pagehide 事件**

第一个事件就是 pageshow ，这个事件在页面显示时触发，无论该页面是否来自 bfcache。在重新加载的页面中， pageshow 会在 load 事件触发后触发；与 pageshow 事件对应的是 pagehide 事件，该事件会在浏览器卸载页面的时候触发，而且是在unload 事件之前触发。

**hashchange 事件**

HTML5 新增了 hashchange 事件，以便在 URL 的参数列表（及 URL 中“#”号后面的所有字符串）
发生变化时通知开发人员。

> * event.oldURL：变化前URL。
> * event.newURL：变化后URL。

### ~~设备事件~~

**orientationchange 事件**
以便开发人员能够确定用户何时将设备由横向查看模式切换为纵向查看模式。

移动 Safari 的 window.orientation 属性中可能包含 3 个值：0 表示肖像模式， 90 表示向左旋转的横向模式（“主屏幕”按钮在右侧）， -90 表示向右旋转的横向模式（“主屏幕”按钮在左侧）。

**MozOrientation 事件**
该事件只能提供一个平面的方向变化。

在静止状态下， x 值为 0， y 值为 0， z 值为 1（表示设备处于竖直状态）。如果设备向右倾斜， x 值会减小；反之，向左倾斜， x 值会增大。

**deviceorientation 事件**
deviceorientation 事件的意图是告诉开发人员设备在空间中朝向哪儿，而不是如何移动。
事件对象包含以下 5 个属性。
> * alpha ：在围绕 z轴旋转时（即左右旋转时），y 轴的度数差；是一个介于 0 到 360 之间的浮点数。
> * beta ：在围绕 x轴旋转时（即前后旋转时），z轴的度数差；是一个介于180到 180之间的浮点数。
> * gamma ：在围绕 y轴旋转时（即扭转设备时），z轴的度数差；是一个介于90到 90之间的浮点数。
> * absolute ：布尔值，表示设备是否返回一个绝对值。
> * compassCalibrated ：布尔值，表示设备的指南针是否校准过。

**devicemotion 事件**
通过 devicemotion 能够检测到设备是不是正在往下掉，或者是不是被走着的人拿在手里。

> * acceleration ：一个包含 x 、 y 和 z 属性的对象，在不考虑重力的情况下，告诉你在每个方向
上的加速度。
> * accelerationIncludingGravity ：一个包含 x 、 y 和 z 属性的对象，在考虑 z 轴自然重力加
速度的情况下，告诉你在每个方向上的加速度。
> * interval ：以毫秒表示的时间值，必须在另一个 devicemotion 事件触发前传入。这个值在每
个事件中应该是一个常量。
> * rotationRate ：一个包含表示方向的 alpha 、 beta 和 gamma 属性的对象。

### 触摸与手势事件

**触摸事件**

> * touchstart ：当手指触摸屏幕时触发；即使已经有一个手指放在了屏幕上也会触发。
> * touchmove ：当手指在屏幕上滑动时连续地触发。在这个事件发生期间，调用 preventDefault()
可以阻止滚动。
> * touchend ：当手指从屏幕上移开时触发。
> * touchcancel ：当系统停止跟踪触摸时触发。关于此事件的确切触发时间，文档中没有明确说明。

除了常见的 DOM属性外，触摸事件还包含下列三个用于跟踪触摸的属性。

> * touches ：表示当前跟踪的触摸操作的 Touch 对象的数组。
> * targetTouchs ：特定于事件目标的 Touch 对象的数组。
> * changeTouches ：表示自上次触摸以来发生了什么改变的 Touch 对象的数组。

每个 Touch 对象包含下列属性。

> * clientX ：触摸目标在视口中的 x 坐标。
> * clientY ：触摸目标在视口中的 y 坐标。
> * identifier ：标识触摸的唯一 ID。
> * pageX ：触摸目标在页面中的 x 坐标。
> * pageY ：触摸目标在页面中的 y 坐标。
> * screenX ：触摸目标在屏幕中的 x 坐标。
> * screenY ：触摸目标在屏幕中的 y 坐标。
> * target ：触摸的 DOM 节点目标。

这些事件（包括鼠标事件）发生的顺序如下：
(1)  touchstart
(2)  mouseover
(3)  mousemove （一次）
(4)  mousedown
(5)  mouseup
(6)  click
(7)  touchend

**手势事件**

有三个手势事件，分别介绍如下。

> * gesturestart ：当一个手指已经按在屏幕上而另一个手指又触摸屏幕时触发。
> * gesturechange ：当触摸屏幕的任何一个手指的位置发生变化时触发。
> * gestureend ：当任何一个手指从屏幕上面移开时触发。

## 内存和性能

### 事件委托

这样做与采取传统的做法相比具有如下优点。

> * document 对象很快就可以访问，而且可以在页面生命周期的任何时点上为它添加事件处理程序（无需等待 DOMContentLoaded 或 load 事件）。换句话说，只要可单击的元素呈现在页面上，就可以立即具备适当的功能。
> * 在页面中设置事件处理程序所需的时间更少。只添加一个事件处理程序所需的 DOM引用更少，
所花的时间也更少。
> * 整个页面占用的内存空间更少，能够提升整体性能。

## 模拟事件

### DOM中的事件模拟

**模拟鼠标事件**

创建鼠标事件对象的方法是为 createEvent() 传入字符串 "MouseEvents" 。返回的对象有一个名为 initMouseEvent() 方法，用于指定与该鼠标事件有关的信息。
> * type （字符串）：表示要触发的事件类型，例如 "click" 。
> * bubbles （布尔值）：表示事件是否应该冒泡。为精确地模拟鼠标事件，应该把这个参数设置为true 。
> * cancelable （布尔值）：表示事件是否可以取消。为精确地模拟鼠标事件，应该把这个参数设置为 true 。
> * view （AbstractView）：与事件关联的视图。这个参数几乎总是要设置为 document.defaultView 。
> * detail （整数）：与事件有关的详细信息。这个值一般只有事件处理程序使用，但通常都设置为 0 。
> * screenX （整数）：事件相对于屏幕的 X 坐标。
> * screenY （整数）：事件相对于屏幕的 Y 坐标。
> * clientX （整数）：事件相对于视口的 X 坐标。
> * clientY （整数）：事件想对于视口的 Y 坐标。
> * ctrlKey （布尔值）：表示是否按下了 Ctrl 键。默认值为 false 。
> * altKey （布尔值）：表示是否按下了 Alt 键。默认值为 false 。
> * shiftKey （布尔值）：表示是否按下了 Shift 键。默认值为 false 。
> * metaKey （布尔值）：表示是否按下了 Meta 键。默认值为 false 。
> * button （整数）：表示按下了哪一个鼠标键。默认值为 0 。
> * relatedTarget （对象）：表示与事件相关的对象。这个参数只在模拟 mouseover 或 mouseout时使用。

```javascript
var btn = document.getElementById("myBtn");
//创建事件对象
var event = document.createEvent("MouseEvents");
//初始化事件对象
event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0,
false, false, false, false, 0, null);
//触发事件
btn.dispatchEvent(event);
```

**模拟键盘事件**

调用 createEvent() 并传入 "KeyboardEvent" 就可以创建一个键盘事件。返回的事件对象会包含一个 initKeyEvent() 方法，这个方法接收下列参数。

> * type （字符串）：表示要触发的事件类型，如 "keydown" 。
> * bubbles （布尔值）：表示事件是否应该冒泡。为精确模拟鼠标事件，应该设置为 true 。
> * cancelable （布尔值）：表示事件是否可以取消。为精确模拟鼠标事件，应该设置为 true 。
> * view （ AbstractView ）：与事件关联的视图。这个参数几乎总是要设置为 document.defaultView 。
> * key （布尔值）：表示按下的键的键码。
> * location （整数）：表示按下了哪里的键。0 表示默认的主键盘，1 表示左，2 表示右，3 表示数字键盘，4 表示移动设备（即虚拟键盘），5 表示手柄。
> * modifiers （字符串）：空格分隔的修改键列表，如 "Shift" 。
> * repeat （整数）：在一行中按了这个键多少次。

**模拟其他事件**

模拟变动事件，可以使用 createEvent("MutationEvents") 创建一个包含initMutationEvent() 方法的变动事件对象。这个方法接受的参数包括： type 、 bubbles 、cancelable 、 relatedNode 、 preValue 、 newValue 、 attrName 和 attrChange 。

**自定义 DOM 事件**

调用 createEvent("CustomEvent") 。返回的对象有一个名为 initCustomEvent() 的方法，接收如下 4 个参数。

> * type （字符串）：触发的事件类型，例如 "keydown" 。
> * bubbles （布尔值）：表示事件是否应该冒泡。
> * cancelable （布尔值）：表示事件是否可以取消。
> * detail （对象）：任意值，保存在 event 对象的 detail 属性中。

### IE中的事件模拟

调用 document.createEventObject() 方法可以在 IE 中创建 event 对象。但与 DOM方式不同的是，这个方法不接受参数，结果会返回一个通用的 event 对象。然后，你必须手工为这个对象添加所有必要的信息。

```javascript
var btn = document.getElementById("myBtn");
//创建事件对象
var event = document.createEventObject();
//初始化事件对象
event.screenX = 100;
event.screenY = 0;
event.clientX = 0;
event.clientY = 0;
event.ctrlKey = false;
event.altKey = false;
event.shiftKey = false;
event.button = 0;
//触发事件
btn.fireEvent("onclick", event);
```

属性|作用|兼容性
:-|:-|:-
window.screenLeft|窗口相对于屏幕左边的位置|IE、Safari、Opera 和 Chrome
window.screenTop|窗口相对于屏幕上边的位置|IE、Safari、Opera 和 Chrome
window.screenX|窗口相对于屏幕左边的位置|Firefox、Safari、Chrome
window.screenY|窗口相对于屏幕上边的位置|Firefox、Safari、Chrome
window.innerWidth|页面视图区的宽度|IE9+
window.innerHeight|页面视图区的高度|IE9+
window.outerWidth|浏览器窗口本身的宽度|IE9+
window.outerHeight|浏览器窗口本身的高度|IE9+
document.documentElement.clientWidth|页面视口的宽度|IE6+标准模式
document.documentElement.clientHeight|页面视口的高度|IE6+标准模式
document.body.clientWidth|页面视口的宽度|混杂模式
document.body.clientHeight|页面视口的高度|混杂模式
node.offsetWidth|元素在水平方向上占用的空间大小，以像素计|好
node.offsetHeight|元素在垂直方向上占用的空间大小，以像素计|好
node.offsetLeft|元素的左外边框至offsetParent的距离|好
node.offsetTop|元素的上外边框至至offsetParent的距离|好
node.clientWidth|元素内容区宽度加上左右内边距宽度|好
node.clientHeight|元素内容区高度加上上下内边距高度|好
node.scrollWidth|在没有滚动条的情况下，元素内容的总宽度|好
node.scrollHeight|在没有滚动条的情况下，元素内容的总高度。|好
node.scrollLeft|被隐藏在内容区域左侧的像素数|好
node.scrollTop|被隐藏在内容区域上方的像素数|好

# 第14章 表单脚本

## 表单的基础知识

### 提交表单

浏览器会在将请求发送给服务器之前触发 submit 事件。调用 prevetnDefault()
方法阻止了表单提交。

> * form.submit()：提交表单。在以调用 submit() 方法的形式提交表单时，不会触发 submit 事件

### 重置表单

浏览器会在将请求发送给服务器之前触发 reset 事件。调用 prevetnDefault()
方法阻止了表单提交。

> * form.reset()：重置表单。调用 reset() 方法会像单击重置按钮一样触发 reset 事件。

### 表单字段

**共有的表单字段属性**

> * disabled ：布尔值，表示当前字段是否被禁用。
> * form ：指向当前字段所属表单的指针；只读。
> * name ：当前字段的名称。
> * readOnly ：布尔值，表示当前字段是否只读。
> * tabIndex ：表示当前字段的切换（tab）序号。
> * type ：当前字段的类型，如 "checkbox" 、 "radio" ，等等。
> * value ：当前字段将被提交给服务器的值。对文件字段来说，这个属性是只读的，包含着文件
在计算机中的路径。

**共有的表单字段方法**

> * focus()：用于将浏览器的焦点设置到表单字段，即激活表单字段，使其可以响应键盘事件。
> * blur()：从元素中移走焦点。

HTML5 为表单字段新增了一个 autofocus 属性。在支持这个属性的浏览器中，只要设置这个属性，不用 JavaScript 就能自动把焦点移动到相应字段。

**共有的表单字段事件**

> * blur ：当前字段失去焦点时触发。
> * change ：对于 &lt;input> 和 &lt;textarea> 元素，在它们失去焦点且 value 值改变时触发；对于
&lt;select> 元素，在其选项改变时触发。
> * focus ：当前字段获得焦点时触发。

## 文本框脚本

一种是使用 &lt;input> 元素的单行文本框，另一种是使用 &lt;textarea> 的多行文本框。

## 选择文本

上述两种文本框都支持 select() 方法，这个方法用于选择文本框中的所有文本。

**选择（ select ）事件**

在选择了文本框中的文本时，就会触发 select事件。

**取得选择的文本**

```javascript
function getSelectedText(textbox){
    if (typeof textbox.selectionStart == "number"){
        return textbox.value.substring(textbox.selectionStart,
        textbox.selectionEnd);
    } else if (document.selection){
        return document.selection.createRange().text;
    }
}
```

**选择部分文本**

```javascript
function selectText(textbox, startIndex, stopIndex){
    if (textbox.setSelectionRange){
        textbox.setSelectionRange(startIndex, stopIndex);
    } else if (textbox.createTextRange){
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart("character", startIndex);
        range.moveEnd("character", stopIndex - startIndex);
        range.select();
    }
    textbox.focus();
}
```

### 过滤输入

**操作剪贴板**
下列就是 6 个剪贴板事件。
> * beforecopy ：在发生复制操作前触发。
> * copy ：在发生复制操作时触发。
> * beforecut ：在发生剪切操作前触发。
> * cut ：在发生剪切操作时触发。
> * beforepaste ：在发生粘贴操作前触发。
> * paste ：在发生粘贴操作时触发。

要访问剪贴板中的数据，可以使用 clipboardData 对象。这个 clipboardData 对象有三个方法： getData() 、 setData() 和 clearData() 。

## 选择框脚本

### 选择选项

访问选中项的最简单方式，就是使用选择框的 selectedIndex 属性。

## 富文本编辑

### 使用 contenteditable 属性

### 操作富文本

> * document.execCommand(string, boolean, value)：要执行的命令名称、表示浏览器是否应该为当前命令提供用户界面的一个布尔值和执行命令必须的一个值（如果不需要值，则传递 null ）。为了确保跨浏览器的兼容性，第二个参数应该始终设置为 false 。

### 富文本选区
在富文本编辑器中，使用框架（ iframe ）的 getSelection() 方法，可以确定实际选择的文本。调用它会返回一个表示当前选择文本的 Selection对象。每个 Selection 对象都有下列属性。

> * anchorNode ：选区起点所在的节点。
> * anchorOffset ：在到达选区起点位置之前跳过的 anchorNode 中的字符数量。
> * focusNode ：选区终点所在的节点。
> * focusOffset ： focusNode 中包含在选区之内的字符数量。
> * isCollapsed ：布尔值，表示选区的起点和终点是否重合。
> * rangeCount ：选区中包含的 DOM 范围的数量。
> * addRange(range) ：将指定的 DOM 范围添加到选区中。
> * collapse(node, offset) ：将选区折叠到指定节点中的相应的文本偏移位置。
> * collapseToEnd() ：将选区折叠到终点位置。
> * collapseToStart() ：将选区折叠到起点位置。
> * containsNode(node) ：确定指定的节点是否包含在选区中。
> * deleteFromDocument() ：从文档中删除选区中的文本，与 document.execCommand("delete", false, null) 命令的结果相同。
> * extend(node, offset) ：通过将 focusNode 和 focusOffset 移动到指定的值来扩展选区。
> * getRangeAt(index) ：返回索引对应的选区中的 DOM 范围。
> * removeAllRanges() ：从选区中移除所有 DOM 范围。实际上，这样会移除选区，因为选区中至少要有一个范围。
> * reomveRange(range) ：从选区中移除指定的 DOM 范围。
> * selectAllChildren(node) ：清除选区并选择指定节点的所有子节点。
> * toString() ：返回选区所包含的文本内容。

## 小结

富文本编辑功能是通过一个包含空 HTML 文档的 iframe 元素来实现的。通过将空文档的designMode 属性设置为 "on" ，就可以将该页面转换为可编辑状态，此时其表现如同字处理软件。

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

(1)  dragstart
(2)  drag
(3)  dragend

当某个元素被拖动到一个有效的放置目标上时，下列事件会依次发生：

(1)  dragenter
(2)  dragover
(3)  dragleave 或 drop

### dataTransfer对象

dataTransfer 对象有两个主要方法： getData() 和 setData() 

> * setData(type, data)：保存数据。type取值为 "text" 或 "URL"。
> * getData(type)：获取数据。

```javascript
//设置和接收文本数据
event.dataTransfer.setData("text", "some text");
var text = event.dataTransfer.getData("text");
//设置和接收 URL
event.dataTransfer.setData("URL", "http://www.wrox.com/");
var url = event.dataTransfer.getData("URL");
```

保存在 dataTransfer 对象中的数据只能在 drop
事件处理程序中读取。

### dropEffect 与 effectAllowed

利用 dataTransfer 对象，可不光是能够传输数据，还能通过它来确定被拖动的元素以及作为放置目标的元素能够接收什么操作。为此，需要访问 dataTransfer 对象的两个属性： dropEffect 和effectAllowed 。

dropEffect 属性可以知道被拖动的元素能够执行哪种放置行为。
> * "none" ：不能把拖动的元素放在这里。这是除文本框之外所有元素的默认值。
> * "move" ：应该把拖动的元素移动到放置目标。
> * "copy" ：应该把拖动的元素复制到放置目标。
> * "link" ：表示放置目标会打开拖动的元素（但拖动的元素必须是一个链接，有 URL）。

effectAllowed 属性表示允许拖动元素的哪种 dropEffect 
> * "uninitialized" ：没有给被拖动的元素设置任何放置行为。
> * "none" ：被拖动的元素不能有任何行为。
> * "copy" ：只允许值为 "copy" 的 dropEffect 。
> * "link" ：只允许值为 "link" 的 dropEffect 。
> * "move" ：只允许值为 "move" 的 dropEffect 。
> * "copyLink" ：允许值为 "copy" 和 "link" 的 dropEffect 。
> * "copyMove" ：允许值为 "copy" 和 "move" 的 dropEffect 。
> * "linkMove" ：允许值为 "link" 和 "move" 的 dropEffect 。
> * "all" ：允许任意 dropEffect 。

### 可拖动
HTML5 为所有 HTML 元素规定了一个 draggable 属性，表示元素是否可以拖动。
图像和链接的 draggable 属性自动被设置成了 true ，而其他元素这个属性的默认值都是 false 。

### 其他成员
HTML5 规范规定 dataTransfer 对象还应该包含下列方法和属性。

> * addElement(element) ：为拖动操作添加一个元素。添加这个元素只影响数据（即增加作为拖动源而响应回调的对象），不会影响拖动操作时页面元素的外观。
> * clearData(format) ：清除以特定格式保存的数据。
> * setDragImage(element, x, y) ：指定一幅图像，当拖动发生时，显示在光标下方。这个方法接收的三个参数分别是要显示的 HTML 元素和光标在图像中的 x、y 坐标。其中，HTML 元素可以是一幅图像，也可以是其他元素。是图像则显示图像，是其他元素则显示渲染后的元素。
> * types ：当前保存的数据类型。这是一个类似数组的集合，以 "text" 这样的字符串形式保存着
数据类型。

## 历史状态管理

通过状态管理 API，能够在不加载新页面的情况下改变浏览器的 URL。

> * history.pushState(statusObject, title, url)：新的状态信息就会被加入历史状态栈，而浏览器地址栏也会变成新的相对 URL。即使状态改变之后查询 location.href 也会返回与地址栏中相同的地址。

因为 pushState() 会创建新的历史状态，所以你会发现“后退”按钮也能使用了。按下“后退”按钮，会触发 window 对象的 popstate 事件。 popstate事件的事件对象有一个 state 属性，这个属性就包含着当初以第一个参数传递给 pushState() 的状态对象。

> * history.replaceState(statusObject, title)：传入的参数与 pushState() 的前两个参数相同。
调用这个方法不会在历史状态栈中创建新状态，只会重写当前状态。

# 第17章 错误处理与调试

## 错误处理

### try-catch 语句

```javascript
try{
// 可能会导致错误的代码
} catch(error){
// 在错误发生时怎么处理
}finally {
    return 0;
}
```

**finally 子句**

无论 try 或 catch 语句块中包含什么代码——甚至 return 语句，都不会阻止 finally 子句的执行。

**错误类型**

> * Error：Error 是基类型，其他错误类型都继承自该类型。
> * EvalError：EvalError 类型的错误会在使用 eval() 函数而发生异常时被抛出。
> * RangeError：RangeError 类型的错误会在数值超出相应范围时触发。
> * ReferenceError：在找不到对象的情况下，会发生 ReferenceError。
> * SyntaxError：语法错误。
> * TypeError：在变量中保存着意外的类型时，或者在访问不存在的方法时，都会导致这种错误。
> * URIError：URI 格式不正确时，就会导致 URIError 错误。

### 抛出错误

用于随时抛出自定义错误。抛出错误时，必须要给 throw 操作符指定一个值，这个值是什么类型，没有要求。

```javascript
throw new Error("Something bad happened.");
```

# 第18章 JavaScript 与 XML

需要为 XML DOM文档的 onreadystatechange 事件指定处理程序。有 4 个就绪状态（ready state）。
> * 1：DOM 正在加载数据。
> * 2：DOM 已经加载完数据。
> * 3：DOM 已经可以使用，但某些部分可能还无法访问。
> * 4：DOM 已经完全可以使用。

# ~~第19章 E4X~~

# 第20章 JSON

## 解析与序列化

### JSON对象

> * JSON.stringify(obj, filterArr/fn, boolean)：序列化的 JavaScript 对象。第二个参数是个过滤器，可以是一个数组，也可以是一个函数；第三个参数是一个选项，表示是否在 JSON 字符串中保留缩进。

```javascript
var book = {
    "title": "Professional JavaScript",
    "authors": [
    "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011
};
var jsonText = JSON.stringify(book, function(key, value){
    switch(key){
    case "authors":
        return value.join(",")
    case "year":
        return 5000;
    case "edition":
        return undefined;
    default:
        return value;
    }
});
```
**字符串缩进**

```javscript
var jsonText = JSON.stringify(book, null, " - -");

{
--"title": "Professional JavaScript",
--"authors": [
----"Nicholas C. Zakas"
--],
--"edition": 3,
--"year": 2011
}
```
**toJSON() 方法**

```javascript
var book = {
    "title": "Professional JavaScript",
    "authors": [
    "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011,
    toJSON: function(){
        return this.title;
    }
};
var jsonText = JSON.stringify(book); // "Professional JavaScript"
```
序列化该对象的顺序如下。

(1) 如果存在 toJSON() 方法而且能通过它取得有效的值，则调用该方法。否则，返回对象本身。
(2) 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第(1)步返回的值。
(3) 对第(2)步返回的每个值进行相应的序列化。
(4) 如果提供了第三个参数，执行相应的格式化。

### 解析选项

> * JSON.parse(stringObject, fn)：JSON.parse() 方法也可以接收另一个参数，该参数是一个函数，将在每个键值对儿上调用。

# 第21章 Ajax与Comet 

## XMLHttpRequest 对象

在 IE 中可能会遇到三种不同版本的 XHR 对象，即 MSXML2.XMLHttp 、MSXML2.XMLHttp.3.0 和 MXSML2.XMLHttp.6.0 。

```javascript
function createXHR() {
	if (typeof XMLHttpRequest != "undefined") {
		return new XMLHttpRequest();
	} else if (typeof ActiveXObject != "undefined") {
		if (typeof arguments.callee.activeXString != "string") {
			var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
				"MSXML2.XMLHttp"],
				i, len;
			for (i = 0, len = versions.length; i < len; i++) {
				try {
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				} catch (ex) {
					//跳过
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	} else {
		throw new Error("No XHR object available.");
	}
}
```

### XHR 的用法

> * open(method, url, async)：规定请求的类型、URL 以及是否异步处理请求。
    > * method：请求的类型；GET 或 POST。
    > * url：文件在服务器上的位置。
    > * async：true(异步)或false(同步)。
> * send(string)：将请求发送到服务器。如果不需要通过请求主体发送数据，则必须传入 null ，因为这个参数对有些浏览器来说是必需的。
    > * string：仅用于 POST 请求。

然而，在以下情况中，请使用 POST 请求：
> * 无法使用缓存文件（更新服务器上的文件或数据库）。
> * 向服务器发送大量数据（POST 没有数据量限制）。
> * 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠。

在收到响应后，响应的数据会自动填充 XHR 对象的属性，相关的属性简介如下。
> * responseText：作为响应主体被返回的文本。
> * responseXML：如果响应的内容类型是 "text/xml" 或 "application/xml" ，这个属性中将保
存包含着响应数据的 XML DOM 文档。
> * status ：响应的 HTTP 状态。
> * statusText ：HTTP 状态的说明。

检测 XHR 对象的 readyState 属性，该属性表示请求/响应过程的当前活动阶段。
> * 0 ：未初始化。尚未调用 open() 方法。
> * 1 ：启动。已经调用 open() 方法，但尚未调用 send() 方法。
> * 2 ：发送。已经调用 send() 方法，但尚未接收到响应。
> * 3 ：接收。已经接收到部分响应数据。
> * 4 ：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。

在接收到响应之前还可以调用 abort() 方法来取消异步请求。
> * abort()：取消异步请求。

### HTTP头部信息
默认情况下，在发送 XHR 请求的同时，还会发送下列头部信息。
> * Accept ：浏览器能够处理的内容类型。
> * Accept-Charset ：浏览器能够显示的字符集。
> * Accept-Encoding ：浏览器能够处理的压缩编码。
> * Accept-Language ：浏览器当前设置的语言。
> * Connection ：浏览器与服务器之间连接的类型。
> * Cookie ：当前页面设置的任何 Cookie。
> * Host ：发出请求的页面所在的域 。
> * Referer ：发出请求的页面的 URI。注意，HTTP 规范将这个头部字段拼写错了，而为保证与规
范一致，也只能将错就错了。（这个英文单词的正确拼法应该是 referrer。）
> * User-Agent ：浏览器的用户代理字符串。

> * xhr.setRequestHeader(header, value)：方法可以设置自定义的请求头部信息。这个方法接受两个参数：头部字段。必须在调用 open() 方法之后且调用 send() 方法之前调用。
    > * header：规定头的名称。
    > * value：规定头的值。
> * xhr.getResponseHeader(header)：取得相应的响应头部信息。
    > * header：规定头的名称。
> * xhr.getAllResponseHeaders()：取得一个包含所有头部信息的长字符串。

### GET 请求
询字符串中每个参数的名称和值都必须使用 encodeURIComponent() 进行编码，然后才能放到 URL 的末尾；而且所有名-值对儿都必须由和号（&）分隔。

## XMLHttpRequest 2 级

### FormData
FormData 为序列化表单以及创建与表单格式相同的数据（用于通过 XHR 传输）提供了便利。

```javascript
var data = new FormData();
data.append("name", "Nicholas");
```

> * append(key, value)：
    > * key：表单字段的名字。
    > * value：表单字段的值。

```javascript
var form = document.getElementById("user-info");
xhr.send(new FormData(form));
```

### 超时设定

```javascript
xhr.timeout = 1000; // 将超时设置为 1  秒钟（仅适用于 IE8+ ）
xhr.ontimeout = function(){
    alert("Request did not return in a second.");
};
```

### overrideMimeType

> * xhr.overrideMimeType(mineType)：用于重写 XHR 响应的 MIME 类型。

## 进度事件

> * loadstart ：在接收到响应数据的第一个字节时触发。
> * progress ：在接收响应期间持续不断地触发。
> * error ：在请求发生错误时触发。
> * abort ：在因为调用 abort() 方法而终止连接时触发。
> * load ：在接收到完整的响应数据时触发。
> * loadend ：在通信完成或者触发 error 、 abort 或 load 事件后触发。 

每个请求都从触发 loadstart 事件开始，接下来是一或多个 progress 事件，然后触发 error 、sabort 或 load 事件中的一个，最后以触发 loadend 事件结束。

### load 事件

> * xhr.onload:  onload 事件处理程序会接收到一个 event 对象，其 target 属性就指向 XHR 对象实例，因而可以访问到 XHR 对象的所有方法和属性。

```javascript
var xhr = createXHR();
xhr.onload = function(){
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
        alert(xhr.responseText);
    } else {
        alert("Request was unsuccessful: " + xhr.status);
    }
};
xhr.open("get", "altevents.php", true);
xhr.send(null);
```

### progress 事件

> * xhr.onprogress：浏览器接收新数据期间周期性地触发。 onprogress 事件处理程序会接收到一个event 对象，其 target 属性是 XHR 对象，但包含着三个额外的属性：
    > * lengthComputable：进度信息是否可用的布尔值
    > * position：已经接收的字节数
    > * totalSize：根据Content-Length 响应头部确定的预期字节数

```javascript
xhr.onprogress = function(event){
    var divStatus = document.getElementById("status");
    if (event.lengthComputable){
        divStatus.innerHTML = "Received " + event.position + " of " +
        event.totalSize +" bytes";
    }
};
```

## 跨源资源共享

Access-Control-Allow-Origin: http://www.nczonline.net

### IE对CORS的实现

这个对象与 XHR 类似，但能实现安全可靠的跨域通信。XDR 对象的安全机制部分实现了 W3C 的 CORS 规范。

> * cookie 不会随请求发送，也不会随响应返回。
> * 只能设置请求头部信息中的 Content-Type 字段。
> * 不能访问响应头部信息。
> * 只支持 GET 和 POST 请求。

### 其他浏览器对CORS的实现

通过跨域 XHR 对象可以访问 status 和 statusText 属性，而且还支持同步请求。跨域 XHR 对象也有一些限制，但为了安全这些限制是必需的。要请求位于另一个域中的资源，使用标准的 XHR对象并在 open() 方法中传入绝对 URL即可。

> * 不能使用 setRequestHeader() 设置自定义头部。
> * 不能发送和接收 cookie。
> * 调用 getAllResponseHeaders() 方法总会返回空字符串。

### Preflighted Reqeusts

CORS 通过一种叫做 Preflighted Requests 的透明服务器验证机制支持开发人员使用自定义的头部、GET 或 POST之外的方法，以及不同类型的主体内容。在使用下列高级选项来发送请求时，就会向服务器发送一个 Preflight 请求。这种请求使用 OPTIONS 方法，发送下列头部。

> * Origin ：与简单的请求相同。
> * Access-Control-Request-Method ：请求自身使用的方法。
> * Access-Control-Request-Headers ：（可选）自定义的头部信息，多个头部以逗号分隔。

### 带凭据的请求
withCredentials 属性设置为 true，以指定某个请求应该发送凭据。

```javascript
Access-Control-Allow-Credentials: true
```

### 跨浏览器的CORS

```javascript
function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		vxhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		xhr = null;
	}
	return xhr;
}
```

这两个对象共同的属性/方法如下。

> * abort() ：用于停止正在进行的请求。
> * onerror ：用于替代 onreadystatechange 检测错误。
> * onload ：用于替代 onreadystatechange 检测成功。
> * responseText ：用于取得响应内容。
> * send() ：用于发送请求。

## 其他跨域技术

### 图像Ping

```javascript
var img = new Image();
img.onload = img.onerror = function(){
    alert("Done!");
};
img.src = "http://www.example.com/test?name=Nicholas";
```

图像 Ping 最常用于跟踪用户点击页面或动态广告曝光次数。图像 Ping 有两个主要的缺点，一是只
能发送 GET 请求，二是无法访问服务器的响应文本。因此，图像 Ping 只能用于浏览器与服务器间的单
向通信。

### JSONP

JSONP 是 JSON with padding（填充式 JSON 或参数式 JSON）的简写。

优点：
> * 与图像 Ping 相比，它的优点在于能够直接访问响应文本，支持在浏览器与服务器之间双向通信。

缺点：
> * 如果其他域不安全，很可能会在响应中夹带一些恶意代码，而此时除了完全放弃 JSONP 调用之外，没有办法追究。
> * 其次，要确定 JSONP 请求是否失败并不容易。

### Comet

Ajax 是一种从页面向服务器请求数据的技术，而 Comet 则是一种服务器向页面推送数据的技术。

短轮询：浏览器定时向服务器发送请求，看有没有更新的数据。短轮询是服务器立即发送响应，无论数据是否有效。

有两种实现 Comet 的方式：长轮询和流。
> * 长轮询：页面发起一个到服务器的请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据之后，浏览器关闭连接，随即又发起一个到服务器的新请求。等待发送响应。轮询的优势是所有浏览器都支持，因为使用 XHR 对象和 setTimeout() 就能实现。
> * HTTP 流：具体来说，就是浏览器向服务器发送一个请求，而服务器保持连接打开，然后周
期性地向浏览器发送数据。

```javascript
function createStreamingClient(url, progress, finished) {
	var xhr = new XMLHttpRequest(),
		received = 0;
	xhr.open("get", url, true);
	xhr.onreadystatechange = function () {
		var result;
		if (xhr.readyState == 3) {
			//只取得最新数据并调整计数器
			result = xhr.responseText.substring(received);
			received += result.length;
			//调用 progress 回调函数
			progress(result);
		} else if (xhr.readyState == 4) {
			finished(xhr.responseText);
		}
	};
	xhr.send(null);
	return xhr;
}
```

### 服务器发送事件
SSE（Server-Sent Events，服务器发送事件）是围绕只读 Comet 交互推出的 API 或者模式。SSE API
用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据。服务器响应的 MIME类型必须是 text/event-stream 。

**SSE API**
```javascript
var source = new EventSource("myevents.php");
```

EventSource 的实例有一个 readyState 属性，值为 0 表示正连接到服务器，值为 1 表示打开了连接，值为 2 表示关闭了连接。还有以下三个事件。
> * open ：在建立连接时触发。
> * message ：在从服务器接收到新事件时触发。
> * error ：在无法建立连接时触发。

**事件流**
所谓的服务器事件会通过一个持久的 HTTP 响应发送，这个响应的 MIME 类型为 text/event-stream。响应的格式是纯文本，最简单的情况是每个数据项都带有前缀 data:。

### Web Sockets
Web Sockets的目标是在一个单独的持久连接上提供全双工、双向通信。在取得服务器响应后，建立的连接会使用 HTTP 升级从 HTTP 协议交换为 WebSocket 协议。

**Web Sockets API**
```javascript
var socket = new WebSocket("ws://www.example.com/server.php");
```

WebSocket 也有一个表示当前状态的 readyState 属性。
> * WebSocket.OPENING  (0)：正在建立连接。
> * WebSocket.OPEN  (1)：已经建立连接。
> * WebSocket.CLOSING  (2)：正在关闭连接。
> * WebSocket.CLOSE  (3)：已经关闭连接。

WebSocket 没有 readystatechange 事件；不过，它有其他事件，对应着不同的状态。 readyState的值永远从 0 开始。

> * socket.close()：调用了 close() 之后， readyState 的值立即变为 2。

**发送和接收数据**
因为 Web Sockets只能通过连接发送纯文本数据，所以对于复杂的数据结构，在通过连接发送之前，必须进行序列化。

```javascript
// 发送数据
var socket = new WebSocket("ws://www.example.com/server.php");
socket.send("Hello world!");

// 接收数据
socket.onmessage = function(event){
    var data = event.data;
    // 处理数据
};
```

**其他事件**

> * open ：在成功建立连接时触发。
> * error ：在发生错误时触发，连接不能持续。
> * close ：在连接关闭时触发。

WebSocket 对象不支持 DOM 2 级事件侦听器，因此必须使用 DOM 0 级语法分别定义每个事件处理程序。

### SSE与Web Sockets
在考虑是使用 SSE 还是使用 Web Sockets 时，可以考虑如下几个因素。
> * 你是否有自由度建立和维护 Web Sockets服务器？因为 Web Socket 协议不同于 HTTP，所以现有服务器不能用于 Web Socket 通信。SSE 倒是通过常规 HTTP 通信，因此现有服务器就可以满足需求。
> * 到底需不需要双向通信。如果用例只需读取服务器数据（如比赛成绩），那么 SSE 比较容易实现。如果用例必须双向通信（如聊天室），那么 Web Sockets 显然更好。

## 小结

Ajax 是无需刷新页面就能够从服务器取得数据的一种方法。同源策略是对 XHR 的一个主要约束，它为通信设置了“相同的域、相同的端口、相同的协议”这一限制。这个解决方案叫做 CORS（Cross-Origin Resource Sharing，跨源资源共享），IE8 通过 XDomainRequest 对象支持CORS，其他浏览器通过 XHR 对象原生支持 CORS。图像 Ping 和 JSONP 是另外两种跨域通信的技术，但不如 CORS 稳妥。

Comet 是对 Ajax 的进一步扩展，让服务器几乎能够实时地向客户端推送数据。实现 Comet 的手段主要有两个：长轮询和 HTTP 流。所有浏览器都支持长轮询，而只有部分浏览器原生支持 HTTP 流。SSE（Server-Sent Events，服务器发送事件）是一种实现 Comet 交互的浏览器 API，既支持长轮询，也支持HTTP 流。

Web Sockets是一种与服务器进行全双工、双向通信的信道。

# 第22章 高级技巧

## 高级函数

### 安全的类型检测

```javascript
function Person(name, age, job){
    if (this instanceof Person){
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}
```

### 惰性载入函数

两种实现惰性载入的方式，第一种就是在函数被调用时再处理函数。在第一次调用的过程中，该函数会被覆盖为另外一个按合适方式执行的函数，这样任何对原函数的调用都不用再经过执行的分支了。

### 函数绑定

```javascript
function bind(fn, context){
    return function(){
        return fn.apply(context, arguments);
    };
}
```

### 函数柯里化

用于创建已经设置好了一个或多个参数的函数。函数柯里化的基本方法和函数绑定是一样的：使用一个闭包返回一个函数。两者的区别在于，当函数被调用时，返回的函数还需要设置一些传入的参数。

```javascript
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}
```

## 防篡改对象

### 不可扩展对象

> * Object.preventExtensions(object)：仅阻止添加自身的属性。但属性仍然可以添加到对象原型。返回已经不可扩展的对象。
> * Object.isExtensible(object)：检测对象是否可以扩展。

### 密封的对象

第二个保护级别是密封对象（sealed object）密封对象不可扩展，而且已有成员的 [[Configurable]] 特性将被设置为 false 。这就意味着不能删除属性和方法，因为不能使用 Object.defineProperty() 把数据属性修改为访问器属性，或者相反。

> * Object.seal(object)：密封对象。
> * Object.isSealed(object)：检测对象是否密封。

### 冻结的对象

冻结的对象既不可扩展，又是密封的，而且对象数据属性的 [[Writable]] 特性会被设置为 false 。如果定义 [[Set]] 函数，访问器属性仍然是可写的。

> * Object.freeze(object)：冻结对象。
> * Object.isFrozen(object)：检测对象是否冻结。

方法|作用|返回|是否改变原对象
:-|:-|:-|:-|:-
Object.preventExtensions(object)|阻止添加自身的属性|不可扩展的对象|是
Object.isExtensible(object)|检测对象是否可以扩展|布尔值|否
Object.seal(object)|阻止修改现有属性的特性，并阻止添加新属性|密封的对象|否
Object.isSealed(object)|检测对象是否密封|布尔值|否
Object.freeze(object)|：冻结对象|冻结的对象|否
Object.isFrozen(object)|检测对象是否冻结|布尔值|否

# 第23章 离线应用与客户端存储

## 离线检测
HTML5为此定义了一个 navigator.onLine属性，这个属性值为 true 表示设备能上网，值为 false 表示设备离线

HTML5 还定义了两个事件：online 和 offline 。当网络从离线变为在线或者从在线变为离线时，分别触发这两个事件。

### 应用缓存
HTML5 的应用缓存（application cache），或者简称为 appcache，是专门为开发离线 Web 应用而设计的。Appcache 就是从浏览器的缓存中分出来的一块缓存区。要想在这个缓存中保存数据，可以使用一个描述文件（manifest file），列出要下载和缓存的资源。

```html 
<html manifest="/offline.manifest">
```

这个文件的 MIME 类型必须是text/cache-manifest。

API 的核心是 applicationCache 对象，这个对象有一个 status 属性，属性的值是常量，表示应用缓存的如下当前状态。
> * 0：无缓存，即没有与页面相关的应用缓存。
> * 1：闲置，即应用缓存未得到更新。
> * 2：检查中，即正在下载描述文件并检查更新。
> * 3：下载中，即应用缓存正在下载描述文件中指定的资源。
> * 4：更新完成，即应用缓存已经更新了资源，而且所有资源都已下载完毕，可以通过 swapCache()来使用了。
> * 5：废弃，即应用缓存的描述文件已经不存在了，因此页面无法再访问应用缓存。

应用缓存还有很多相关的事件，表示其状态的改变。以下是这些事件。
> * checking ：在浏览器为应用缓存查找更新时触发。
> * error ：在检查更新或下载资源期间发生错误时触发。
> * noupdate ：在检查描述文件发现文件无变化时触发。
> * downloading ：在开始下载应用缓存资源时触发。
> * progress ：在文件下载应用缓存的过程中持续不断地触发。
> * updateready ：在页面新的应用缓存下载完毕且可以通过 swapCache() 使用时触发。
> * cached ：在应用缓存完整可用时触发。

```javascript
EventUtil.addHandler(applicationCache, "updateready", function(){
    applicationCache.swapCache();
});
```

## 数据存储

### Cookie
cookie 的构成。

> * 名称：一个唯一确定 cookie 的名称。cookie 名称是不区分大小写的，所以 myCookie 和 MyCookie被认为是同一个 cookie。然而，实践中最好将 cookie 名称看作是区分大小写的，因为某些服务器会这样处理 cookie。cookie 的名称必须是经过 URL 编码的。值：储存在 cookie 中的字符串值。值必须被 URL 编码。
> * 域：cookie 对于哪个域是有效的。所有向该域发送的请求中都会包含这个 cookie 信息。这个值可以包含子域（subdomain，如 www.wrox.com ），也可以不包含它（如. wrox.com ，则对于wrox.com的所有子域都有效）。如果没有明确设定，那么这个域会被认作来自设置 cookie 的那个域。
> * 路径：对于指定域中的那个路径，应该向服务器发送 cookie。例如，你可以指定 cookie 只有从http://www.wrox.com/books/ 中才能访问，那么http://www.wrox.com 的页面就不会发送 cookie 信息，即使请求都是来自同一个域的。
> * 失效时间：表示 cookie 何时应该被删除的时间戳（也就是，何时应该停止向服务器发送这个cookie）。默认情况下，浏览器会话结束时即将所有 cookie 删除；不过也可以自己设置删除时间。这个值是个 GMT 格式的日期（Wdy, DD-Mon-YYYY HH:MM:SS GMT），用于指定应该删除cookie 的准确时间。因此，cookie 可在浏览器关闭后依然保存在用户的机器上。如果你设置的失效日期是个以前的时间，则 cookie 会被立刻删除。
> * 安全标志：指定后，cookie 只有在使用 SSL 连接的时候才发送到服务器。例如，cookie 信息只能发送给  https://www.wrox.com ，而 http://www.wrox.com 的请求则不能发送 cookie。

**子 cookie**

```javascript
name=name1=value1&name2=value2&name3=value3&name4=value4&name5=value5
```

### Web存储机制

**Storage 类型**

> * clear() ： 删除所有值；Firefox 中没有实现 。
> * getItem(name) ：根据指定的名字 name 获取对应的值。
> * key(index) ：获得 index 位置处的值的名字。
> * removeItem(name) ：删除由 name 指定的名值对儿。
> * setItem(name, value) ：为指定的 name 设置一个对应的值。

**sessionStorage 对象**

sessionStorage 对象存储特定于某个会话的数据，也就是该数据只保持到浏览器关闭。

**localStorage 对象**

作为持久保存客户端数据。要访问同一个 localStorage 对象，页面必须来自同一个域名（子域名无效），使用同一种协议，在同一个端口上。

**storage 事件**
这个事件的 event 对象有以下属性。

> * domain ：发生变化的存储空间的域名。
> * key ：设置或者删除的键名。
> * newValue ：如果是设置值，则是新值；如果是删除键，则是 null 。
> * oldValue ：键被更改之前的值。

# 第24章 最佳实践

## 可维护性

### 什么是可维护的代码
> * 可理解性——其他人可以接手代码并理解它的意图和一般途径，而无需原开发人员的完整解释。
> * 直观性——代码中的东西一看就能明白，不管其操作过程多么复杂。
> * 可适应性——代码以一种数据上的变化不要求完全重写的方法撰写。
> * 可扩展性——在代码架构上已考虑到在未来允许对核心功能进行扩展。
> * 可调试性——当有地方出错时，代码可以给予你足够的信息来尽可能直接地确定问题所在。

### 代码约定

**可读性**

> * 函数和方法——每个函数或方法都应该包含一个注释，描述其目的和用于完成任务所可能使用的算法。陈述事先的假设也非常重要，如参数代表什么，函数是否有返回值（因为这不能从函数定义中推断出来）。
> * 大段代码——用于完成单个任务的多行代码应该在前面放一个描述任务的注释。
> * 复杂的算法——如果使用了一种独特的方式解决某个问题，则要在注释中解释你是如何做的。这不仅仅可以帮助其他浏览你代码的人，也能在下次你自己查阅代码的时候帮助理解。
> * Hack——因为存在浏览器差异，JavaScript 代码一般会包含一些 hack。不要假设其他人在看代码的时候能够理解 hack 所要应付的浏览器问题。如果因为某种浏览器无法使用普通的方法，所以你需要用一些不同的方法，那么请将这些信息放在注释中。

**变量和函数命名**

> * 变量名应为名词如 car 或 person 。
> * 函数名应该以动词开始，如 getName() 。返回布尔类型值的函数一般以 is 开头，如isEnable() 。
> * 变量和函数都应使用合乎逻辑的名字，不要担心长度。长度问题可以通过后处理和压缩来缓解。

**变量类型透明**

JavaScript 中最传统的匈牙利标记法是用单个字符表示基本类型： "o" 代表对象， "s" 代表字符串， "i"代表整数， "f" 代表浮点数， "b" 代表布尔型。

### 编程实践

**尊重对象所有权**

> * 不要为实例或原型添加属性；
> * 不要为实例或原型添加方法；
> * 不要重定义已存在的方法。

**避免与 null 进行比较**

> * 如果值应为一个引用类型，使用 instanceof 操作符检查其构造函数；
> * 如果值应为一个基本类型，使用 typeof 检查其类型；
> * 如果是希望对象包含某个特定的方法名，则使用 typeof 操作符确保指定名字的方法存在于对象上。

## 性能

### 注意作用域

**避免全局查找**

**避免 with 语句**

### 选择正确方法

**避免不必要的属性查找**

标记|名称|描述
:-|:-|:-
O(1)|常数|不管有多少值，执行的时间都是恒定的。一般表示简单值和存储在变量中的值
O(log n)|对数|总的执行时间和值的数量相关，但是要完成算法并不一定要获取每个值。例如：二分查找
O(n)|线性|总执行时间和值的数量直接相关。例如：遍历某个数组中的所有元素
O(n<sup>2</sup>)|平方|总执行时间和值的数量有关，每个值至少要获取n次。例如：插入排序

使用变量和数组要比访问对象上的属性更有效率，后者是一个 O(n)操作。对象上的任何属性查找都要比访问变量或者数组花费更长时间，因为必须在原型链中对拥有该名称的属性进行一次搜索。

**优化循环**

(1) 减值迭代——大多数循环使用一个从 0 开始、增加到某个特定值的迭代器。在很多情况下，从
最大值开始，在循环中不断减值的迭代器更加高效。
(2) 简化终止条件——由于每次循环过程都会计算终止条件，所以必须保证它尽可能快。也就是说
避免属性查找或其他 O(n)的操作。
(3) 简化循环体——循环体是执行最多的，所以要确保其被最大限度地优化。确保没有某些可以被
很容易移出循环的密集计算。
(4) 使用后测试循环——最常用 for 循环和 while 循环都是前测试循环。而如 do-while 这种后测试循环，可以避免最初终止条件的计算，因此运行更快。

**避免双重解释**

当使用 eval() 函数或者是Function 构造函数以及使用 setTimeout() 传一个字符串参数时都会发生这种情况。

**性能的其他注意事项**

> * 原生方法较快——只要有可能，使用原生方法而不是自己用 JavaScript 重写一个。原生方法是用诸如 C/C++之类的编译型语言写出来的，所以要比 JavaScript 的快很多很多。JavaScript 中最容易被忘记的就是可以在 Math 对象中找到的复杂的数学运算；这些方法要比任何用 JavaScript 写的同样方法如正弦、余弦快的多。
> * Switch 语句较快 —— 如果有一系列复杂的 if-else 语句，可以转换成单个 switch 语句则可以得到更快的代码。还可以通过将 case 语句按照最可能的到最不可能的顺序进行组织，来进一步优化 switch 语句。
> * 位运算符较快 —— 当进行数学运算的时候，位运算操作要比任何布尔运算或者算数运算快。选择性地用位运算替换算数运算可以极大提升复杂计算的性能。诸如取模，逻辑与和逻辑或都可以考虑用位运算来替换。

### 最小化语句数

**多个变量声明**

变量声明只用了一个 var 语句，之间由逗号隔开。在大多数情况下这种优化都非常容易做，并且要比单个变量分别声明快很多。

**插入迭代值**

当使用迭代值（也就是在不同的位置进行增加或减少的值）的时候，尽可能合并语句。

**使用数组和对象字面量**

### 优化DOM交互

**最小化现场更新**
使用文档片段来构建 DOM 结构。

**innerHTML**
对于大的 DOM 更改，使用 inner HTML 要比使用标准 DOM 方法创建同样的 DOM 结构快得多。

**使用事件代理**

文档级别附加事件处理程序，这样可以处理整个页面的事件。

**注意 HTMLCollection**
任何时候要访问 HTMLCollection ，不管它是一个属性还是一个方法，都是在文档上进行一个查询，这个查询开销很昂贵。

发生以下情况时会返回 HTMLCollection 对象：
> * 进行了对 getElementsByTagName() 的调用；
> * 获取了元素的  childNodes 属性；
> * 获取了元素的  attributes 属性；
> * 访问了特殊的集合，如 document.forms 、 document.images 等。

# 第25章 新兴的API

## ~~requestAnimationFrame()~~

```javascript
(function () {
	function draw(timestamp) {
		//计算两次重绘的时间间隔
		var drawStart = (timestamp || Date.now()),
			diff = drawStart - startTime;
		//使用 diff 确定下一步的绘制时间
		//把 startTime 重写为这一次的绘制时间
		startTime = drawStart;
		//重绘 UI
		requestAnimationFrame(draw);
	}
	var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame,
		startTime = window.mozAnimationStartTime || Date.now();
	requestAnimationFrame(draw);
})();
```

## ~~Geolocation API~~
Geolocation API 在浏览器中的实现是 navigator.geolocation 对象，这个对象包含 3 个方法。

> * getCurrentPosition(success, error, options)：会触发请求用户共享地理定位信息的对话框。
    > * success：成功回调函数会接收到一个 Position 对象参数，该对象有两个属性： coords 和 timestamp 。而 coords 对象中将包含下列与位置相关的信息。
        > * latitude ：以十进制度数表示的纬度。
        > * longitude ：以十进制度数表示的经度。
        > * accuracy ：经、纬度坐标的精度，以米为单位。有些浏览器还可能会在 coords 对象中提供如下属性。
        > * altitude ：以米为单位的海拔高度，如果没有相关数据则值为 null 。
        > * altitudeAccuracy ：海拔高度的精度，以米为单位，数值越大越不精确。
        > * heading ：指南针的方向，0°表示正北，值为 NaN 表示没有检测到数据。
        > * speed ：速度，即每秒移动多少米，如果没有相关数据则值为 null 。
    > * error：即失败回调函数，在被调用的时候也会接收到一个参数。这个参数是一个对象，包含两个属性： message 和  code 。
        > * message：保存着给人看的文本消息，解释为什么会出错。
        > * code：保存着一个数值，表示错误的类型：用户拒绝共享（1）、位置无效（2）或者超时（3）。
    > * options：可以设置的选项有三个：
        > * enableHighAccuracy：一个布尔值，表示必须尽可能使用最准确的位置信息。
        > * timeout：毫秒数表示的等待位置信息的最长时间。
        > * maximumAge： 表示上一次取得的坐标信息的有效时间，以毫秒表示。
> * watchPosition(success, error, options)：这个方法接收的参数与 getCurrentPosition()方法完全相同。地等待系统发出位置已改变的信号（它不会自己轮询位置）。  
> * clearWatch(watchId)：于这个返回值可以取消监控操作，只要将其传递给 clearWatch() 方法即可。

## ~~File API~~

File API 在表单中的文件输入字段的基础上，又添加了一些直接访问文件信息的接口。每个 File 对象都有下列只读属性。
> * name ：本地文件系统中的文件名。
> * size ：文件的字节大小。
> * type ：字符串，文件的 MIME 类型。
> * lastModifiedDate ：字符串，文件上一次被修改的时间（只有 Chrome 实现了这个属性）。

### ~~FileReader 类型~~

FileReader 类型实现的是一种异步文件读取机制。FileReader 提供了如下几个方法。
> * readAsText(file,encoding) ：以纯文本形式读取文件，将读取到的文本保存在 result 属性中。第二个参数用于指定编码类型，是可选的。
> * readAsDataURL(file) ：读取文件并将文件以数据 URI 的形式保存在 result 属性中。
> * readAsBinaryString(file) ：读取文件并将一个字符串保存在 result 属性中，字符串中的每个字符表示一字节。
> * readAsArrayBuffer(file) ：读取文件并将一个包含文件内容的 ArrayBuffer 保存在result 属性中。

最有用的三个事件。
> * progress：事件对象可以获得与 XHR 的 progress 事件相同的信息（属性）： lengthComputable 、 loaded 和 total 。每次 progress 事件中都可以通过 FileReader 的 result 属性读取到文件内容。
> * error：相关的信息将保存到FileReader 的 error 属性中。这个属性中将保存一个对象，该对象只有一个属性 code ，即错误码。
    > * 1：表示未找到文件。
    > * 2：表示安全性错误。
    > * 3：表示读取中断。
    > * 4：表示文件不可读。
> * load：成功加载后会触发 load 事件。

### ~~读取部分内容~~

> * slice(start, length)：返回一个 Blob 的实例， Blob 是 File 类型的父类型。
    > * start：起始字节。
    > * 读取的字节数。

### ~~对象URL~~

对象 URL 也被称为 blob URL，指的是引用保存在 File 或 Blob 中数据的 URL。使用对象 URL 的好处是可以不必把文件内容读取到 JavaScript 中而直接使用文件内容。

```javascript
function createObjectURL(blob) {
	if (window.URL) {
		return window.URL.createObjectURL(blob);
	} else if (window.webkitURL) {
		return window.webkitURL.createObjectURL(blob);
	} else {
		return null;
	}
}
```

### ~~读取拖放的文件~~

```javascript
event.dataTransfer. files
```

### ~~使用XHR上传文件~~

过它调用 append() 方法并传入相应的 File 对象作为参数。然后，再把 FormData 对象传递给 XHR 的 send() 方法，结果与通过表单上传一模一样。

## ~~Web 计时~~

performance.navigation 属性也是一个对象，包含着与页面导航有关的多个属性。
> * redirectCount：页面加载前的重定向次数。
> * type：数值常量，表示刚刚发生的导航类型。
    > * performance.navigation.TYPE_NAVIGATE (0) ：页面第一次加载。
    > * performance.navigation.TYPE_RELOAD (1) ：页面重载过。
    > * performance.navigation.TYPE_BACK_FORWARD (2) ：页面是通过“后退”或“前进”按钮打开的。
    
performance.timing 属性也是一个对象，但这个对象的属性都是时间戳。
> * navigationStart ：开始导航到当前页面的时间。
> * unloadEventStart ：前一个页面的 unload 事件开始的时间。但只有在前一个页面与当前页
面来自同一个域时这个属性才会有值；否则，值为 0。
> * unloadEventEnd ：前一个页面的 unload 事件结束的时间。但只有在前一个页面与当前页面
来自同一个域时这个属性才会有值；否则，值为 0。
> * redirectStart ：到当前页面的重定向开始的时间。但只有在重定向的页面来自同一个域时这
个属性才会有值；否则，值为 0。
> * redirectEnd ：到当前页面的重定向结束的时间。但只有在重定向的页面来自同一个域时这个
属性才会有值；否则，值为 0。
> * fetchStart ：开始通过 HTTP GET 取得页面的时间。
> * domainLookupStart ：开始查询当前页面 DNS 的时间。
> * domainLookupEnd ：查询当前页面 DNS 结束的时间。
> * connectStart ：浏览器尝试连接服务器的时间。
> * connectEnd ：浏览器成功连接到服务器的时间。
> * secureConnectionStart ：浏览器尝试以 SSL 方式连接服务器的时间。不使用 SSL 方式连接
时，这个属性的值为 0。
> * requestStart ：浏览器开始请求页面的时间。
> * responseStart ：浏览器接收到页面第一字节的时间。
> * responseEnd ：浏览器接收到页面所有内容的时间。
> * domLoading ： document.readyState 变为 "loading" 的时间。
> * domInteractive ： document.readyState 变为 "interactive" 的时间。
> * domContentLoadedEventStart ：发生 DOMContentLoaded 事件的时间。
> * domContentLoadedEventEnd ： DOMContentLoaded 事件已经发生且执行完所有事件处理程
序的时间。
> * domComplete ： document.readyState 变为 "complete" 的时间。
> * loadEventStart ：发生 load 事件的时间。
> * loadEventEnd ： load 事件已经发生且执行完所有事件处理程序的时间。

## Web Workers

长时间运行的 JavaScript 进程会导致浏览器冻结用户界面，让人感觉屏幕“冻结”了。Web Workers规范通过让 JavaScript 在后台运行解决了这个问题。

### 使用Worker

```javascript
var worker = new Worker("stufftodo.js");
```

> * worker.postMessage(message)：给 Worker 传递消息。
    > * message：任何类型数据。
> * terminate()：在页面调用，立即停止 Worker 的工作。

事件：
> * worker.onmessage：来自 Worker的数据保存在 event.data 中
> * worker.onerror：事件对象中包含三个属性： filename 、lineno 和 message ，分别表示发生错误的文件名、代码行号和完整的错误消息。

### Worker全局作用域
Web Worker 本身也是一个最小化的运行环境。
> * 最小化的 navigator 对象，包括 onLine 、 appName 、 appVersion 、 userAgent 和 platform
属性；
> * 只读的 location 对象；
> * setTimeout() 、 setInterval() 、 clearTimeout() 和 clearInterval() 方法；
> * XMLHttpRequest 构造函数。

> * self.close()：在Worker内部，可以停止工作。

### 包含其他脚本

> * importScripts(url)：每个加载过程都是异步进行的，因此所有脚本加载并执行之后， importScripts() 才会执行。