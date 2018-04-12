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

## 区分大小写

变量区分大小写

## 标识符

标识符，就是指变量、函数、属性的名字，或者函数的参数。

> * 第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）；
> * 其他字符可以是字母、下划线、美元符号或数字。

标识符中的字母也可以包含扩展的 ASCII或 Unicode字母字符（如 À和 Æ）。

## 注释

```html
// 单行注释

/*
* 这是一个多行
* （块级）注释
*/
```

## 语句
语句以一个分号结尾；如果省略分号，则由解析器确定语句的结尾。

## 关键字和保留字

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

# 2. 第15章 使用Canvas绘图
检测getContext方法

```javascript
if (canvas.getContext){}
```

## 2.1. 上下文

### 2.1.1. 填充和描边
> * context.fillStyle：填充
> * context.strokeStyle：描边

### 2.1.2. 绘制矩形
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

### 2.1.3. 绘制路径
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

### 2.1.4. 绘制文本
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

### 2.1.5. 变换
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

### 2.1.6. 绘制图像
> * drawImage(image, x, y, w, h, tx, ty, tw, th)：x,y,w,h表示源图像的x,y坐标，宽度和高度。tx,ty,tw,th表示目标图像的x,y坐标，宽度和高度。
> * canvas.toDataURL()：获取操作结果。会存在跨域问题。

### 2.1.7. 阴影
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
### 2.1.8. 渐变

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

### 2.1.9. 模式
> * createPattern(image, pattern)：第二个参数包括 "repeat" 、 "repeat-x" 、
"repeat-y" 和 "no-repeat" 。

```javascript
var image = document.images[0],
    pattern = context.createPattern(image, "repeat");

//绘制矩形
context.fillStyle = pattern;
context.fillRect(10, 10, 150, 150);
```

### 2.1.10. 使用图像数据
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

### 2.1.11. 合成
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

## 2.2. WebGL
WebGL是针对Canvas的3D上下文。WebGL 并不是 W3C 制定的标准。

### 2.2.1. 类型化数组

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

### 2.2.2. WebGL上下文
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

# 3. 第16章 HTML脚本编程
## 3.1. 跨文档消息传递
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


