# 第19章 选择器

## 属性选择器
css2
[att=val]{}
css3
[att*=val]：包含val
[att^=val]: 开头为val
[att$=val]: 结尾为val

## 结构性伪类选择器
a:link
a:visited
a:hover
a:active

### 伪元素选择器
:first-line
:first-letter
:before
:after

### root、not、empty、target
:root
:not
```css
:not(1)
```
:empty
target

### :fist-child、last-child、nth-last-child
1. 
:fist-child
:last-child
:nth-last-child

2. 
:nth-child(n)

3. 
:nth-child(even)偶数
:nth-child(odd)奇数
:nth-last-child(even)偶数
:nth-last-child(odd)奇数

### nth-of-type、nth-last-of-type
:nth-of-type 选择该种元素
:nth-last-of-type 反方向选择该种元素

### 循环样式
:nth-child(4n+1)

### only-child选择器
only-child 相当于:nth-child(1):nth-last-child(1) 只有一个子元素

## UI元素状态伪类选择器

:hover
:active
:focus
:enabled
:disabled
:read-only 只读状态
:read-write 非只读状态
:checked 表单radio单选框或checkbox复选框片于选择状态
::selection 当前元素被鼠标选中的状态
:default 打开页面默认处于选择状态的单选框或复选框
:indeterminate 没有被选中的单选框
:invalid required、pattern属性检查或元素内容不符合规定
:valid required、pattern属性检查或元素内容符合规定
:required 允许使用required属性并指定该属性
:optional 允许使用required属性并未指定该属性
:in-range 有效值被限定在一段范围之内，实际值在范围之内
:out-of-range 有效值被限定在一段范围之内，实际值在范围之外

## 通用兄弟元素选择器
~

# 插入文字

// 插入文字
```css
:before{
    content: 文字
}
```
// 插入属性
:before{
    content: attr(属性名)
}
```css
:before{
    content: attr(alt)
}
```
// 在标题前加入连续编号
元素:before{
    content: counter(计算器名)
}
元素{
    counter-increment: 计算器名
}
```css
h1:before{
    content: counter(mycounter)
}
h1{
    counter-increment: mycounter
}
```

// 指定编号种类
元素:before{
    content: counter(计算器名, 种类)
}
元素{
    counter-increment: 计算器名
}
```css
h1:before{
    content: counter(mycounter, upper-alpha)'.';
}
h1{
    counter-increment: mycounter
}
```

// 编号嵌套连续的
```css
h1:before{
    content: counter(mycounter) ". ";
}
h1{
    counter-increment: mycounter;
}
h2:before{
    content: counter(subcounter) ". ";
}
h2{
    counter-increment: subcounter;
    margin-left: 40px;
}
```

// 编号嵌套不连续的
在元素上加上counter-reset: subcounter;
```css
h1:before{
    content: counter(mycounter) ". ";
}
h1{
    counter-increment: mycounter;
    counter-reset: subcounter;
}
h2:before{
    content: counter(subcounter) ". ";
}
h2{
    counter-increment: subcounter;
    margin-left: 40px;
}
```

// 中括号嵌套大括号
在元素上加上counter-reset: subcounter;
```css
h1:before{
    content: counter(mycounter) ". ";
}
h1{
    counter-increment: mycounter;
    counter-reset: subcounter;
}
h2:before{
    content: counter(mycounter) '-' counter(subcounter) ". ";
}
h2{
    counter-increment: subcounter;
    margin-left: 40px;
}
```

# 第21章 文字与字体相关样式

## 文字阴影

### text-shadow

单个阴影
text-shadow: length(横距离) length(纵距离) length(模糊半径) color;

多个阴影
text-shadow: length length length color,
            length length length color,
            length length length color;

## 文本自动换行 word-break属性
word-break: keep-all(只能在半角空格或连字符处换行)。在IE中，对于中文，文字不能换行。对于英文，可以换行。
        break-all(允许在单词内换行)

## 长单词与URL地址自动换行 word-wrap
word-wrap: break-word;

## 显示服务器端文字
@font-face{
    font-family: WebFont;
    src: url('xxx.otf') format('opentype');
}

opentype -> .otf/.eot
truetype -> .ttf

## 显示客户端文字
@font-face{
    font-family: Arial;
    src: local('Arial');
}

## 修改字体种类而保持字体尺寸不变-font-size-adjust

font-size-adjust: aspect;

```css
font-size-adjust: 0.46;
```

## 使用rem
rem字体尺寸单位根据页面上的根元素（一般指html元素）的字体大小而计算出实际的字体大小。
em根据元素的父元素的字体大小而计算出实际的字体大小。

# 第22章 盒相关样式

inline-block:默认底部对齐。
vertical-align: top; 顶部对齐

inline-table: 把talbe变成inline
run-in: 如果内部有块元素，被包括在块元素内。不支持
compact: 如果内部有块元素，被放置在块元素左边。不支持

table: table元素
table-caption: caption元素，表示标题
table-row: tr元素，表示行
table-cell: td、th元素，表示单元格、列标题
table-row-group: tbody元素，表示所有行
table-header-group: thead元素，表示表头部分 
table-footer-group: tfoot元素，表示脚注部分 
table-column: col元素，表示一列
table-column-group: colgroup元素，表示所有列
table-caption: table-caption元素，表示整个表格的标题

text-overflow: ellipsis; 省略号
white-space: nowrap; 不换行
overflow: hidden;

## 对盒使用阴影

box-shadow: length length length color;

盒内阴影
box-shadow: inset length length length color;

## 元素宽高的计算方法
box-sizing: border-box/content-box;

# 第23章 背景与边框相关样式

## 新增
background-clip: border背景显示范围包括边框/padding背景显示范围不包括边框; 背景的显示范围
background-origin: border/padding/content;绘制背景的起点
background-size: contain将原图维持纵横比例的前提下自动放大或缩小/cover将原图维持纵横比例的前提下将背景图像自动缩放到填满元素内部;背景的中图像的尺寸
background-break: 进行平铺时的循环方式

## 多个背景
```css
background-image: url(url1), url(url2), url(url3);
background-repeat: no-repeat, no-repeat, no-repeat;
background-position: 3% 98%, 3% 98%, 3% 98%;
```
## 渐变
```css
background: linear-gradient(to bottom, orange, black);
background: linear-gradient(30deg, orange, black);
background: linear-gradient(to bottom, orange 30%, black 70%);
```

### 放射性渐变
```css
background: radial-gradient(orange, black);
background: radial-gradient(circle, orange, black);
background: radial-gradient(at left top, orange 30%, black 70%);
```

## 圆角边框的绘制
border-raidus: 40%;

## 图像边框
border-image: url() length length length length / length;

# 第24章 CSS3中的变形处理
缩放
```css
transform: scale(0.5, 2);  
```

倾斜
```css
transform: skew(30deg, 30deg);  
```

移动
```css
transform: translate(50px, 50px);  
```

多种变形
```css
transform: translate(50px, 50px) rotate(30deg, 30deg) scale(0.5, 2);  
```

基准
```css
transform-origin: left bottom;
```

3D变形：开启GPU加速
```css
transform: translateZ(50px, 50px) rotateZ(30deg, 30deg) scaleZ(0.5, 2);  
```

计算2D变形
```css
transform: matrix(1, 0, 0, 1, tx, ty);  
```

计算3D变形
```css
transform: matrix(1, 0, 0, 1, tx, ty);  
```

# 第25章 动画

## transition
transition: property duration timing-function
```css
transition: background-color 1s linear;
```

多个动画
transition: property duration timing-function,
        property duration timing-function,
        property duration timing-function;

## animation
transition只能指定属性的开始值和结束值，然后在这两个属性值之间进行平滑过渡的方式来实现动画效果。
animation通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果。
```css
@keyframes mycolor{
    0% {background:red;}
    40% {background:darkblue;}
    70% {background:yellow;}
    100% {background:red;}
}
div:hover{
    animation-name: mycolor;
    animation-duration: 1s;
    animation-timing-function: linear;
}
```

# 布局相关样式

## 多栏布局

使用float或position时左右两栏或多栏中底部不能对齐。多栏布局可以解决。

多栏布局可以将一个元素中的内容分为两栏或多栏显示。
column-count:指定栏目数
column-width:指定栏目宽度
column-gap:指定栏目之间的距离
column-rule:指定栏目之间的间隔线
```css
div{
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-width: 20em;
    -webkit-column-width: 20em;
    -moz-column-width: 20em;
}
```

## 盒布局

使用float或position时左右两栏或多栏中底部不能对齐。多栏布局可以解决。

```css
#container{
    display: box;
    display: -webkit-box;
    display: -moz-box;
}
```

多栏布局指定一个统一的宽度，栏与栏之间的宽度是一样的。另外，多栏布局不能指定什么栏显示什么内容。比较适合显示文章内容。

## 弹性盒布局
```css
#container{
    display: flex;
}
#content{
    flex: 1;
}
```
### 改变元素的排列顺序

order
```css
#content{
    order: 1;
}
```

### 改变元素的排列方向
flex-direction：row(横向)/row-reverse(反向)/column(纵向)/column-reverse(纵向反向) 

```css
#container{
    display: flex;
    flex-direction: column;
}
```

### 指定元素的宽度和高度
flex-grow、flex-shrink
区别在于当元素排列方向为横向排列时，如果子元素的width样式属性值的总和小于容器元素的宽度值，必须通过flex-grow来调整子元素宽度。如果大于容器的宽度值，通过flex-shrink来调整。

flex: flex-grow flex-shrink flex-basis; 默认flex-grow、flex-shrink为1，flex-basis为0。
```css
flex: 1 3 250px;
```
### 换行
flex-warp:nowrap（不换行）、wrap（换行）、wrap-reverse（换行反向）

合并flex-direction、flex-wrap
flex-flow: flex-direction flex-wrap

```css
flex-flow: row wrap;
```

### 指定水平方向与垂直方向的对齐方向

指定如何布局容器除了子元素之外的main axis轴方向上的剩余空白部分。
justify-content:flex-start/flex-end/center/space-between/space-around

指定子元素的对齐方式，指定的是cross axis。
align-items:flex-start/flex-end/center/baseline/stretch

指定子元素的对齐方式
align-self:flex-start/flex-end/center/baseline/stretch/auto

align-items被指定为容器元素的样式属性，用于指定所有子元素的对齐方式。而align-self属性被用于单独指定某个子元素的对齐方式

当进行多行布局时，可以使用align-content属性指定各行对齐方式
align-content:flex-start/flex-end/center/space-between/space-around

## calc方法

自动计算元素的宽度、高度等数值类型的样式属性值。

# media queries

## 使用

@media 设备类型 and (设备特性) (样式代码)

设备类型|说明
-|-
all|所有设备
screen|电脑显示器
print|打印用纸或打印预览视图
handheld|便携设备
tv|电视机类型的设备
speech|语音和音频合成器
braille|盲人用点字法触觉回馈设备
embossed|盲文打印机
projection|各种投影设备
tty|使用固定密度文字栅格的媒介，比如电传打字机和终端

设备特性：(min-width: 400px)
设备特性|可指定值|是否允许使用min/max前缀|特性说明
-|-|-|-
width|长度单位|允许|窗口宽度
height|长度单位|允许|窗口高度
device-width|长度单位|允许|设备屏幕分辨率的宽度值
device-height|长度单位|允许|设备屏幕分辨率的高度值
orientation|portrait、landscape|不允许|浏览器窗口的方向是纵向还是横向，当窗口的高度值大于等于宽度值时，该特性值为portrait，否则为landscape。
aspect-ratio|比例值，如16/9|允许|屏幕分辨率的纵横比，比例值为浏览器窗口的宽度值/高度值
device-aspect-ratio|比例值，如16/9|允许|屏幕分辨率的纵横比，比例值为设备屏幕分辨率的宽度值/高度值
color|整数值|允许|设备使用多少位的颜色值，如果不是彩色设备，该值为0
color-index|整数值|允许|色彩表中的色彩数
monochrome|整数值|允许|单色帧缓冲器中每像素的字节数
resolution|分辨率值，臂如300dpi|允许|设备分辨率
scan|只能指定两个值：progressive或interlace|不允许|电视机类型设备的扫描方式。progressive表示逐行扫描，interlace表示隔行扫描。
grid|只能指定两个值：0或1|不允许|设备是基于栅格还是基于位图。基于栅格时该值为1，否则该值为0。

```css
@media screen and (max-width: 639px) {样式代码}

@media handheld and (min-width: 360px), screnn and (min-width: 480px) {样式代码}
```

可以在表达式中加上not(反操作)或only（）
```css
@media screen and (max-width: 639px) {样式代码}
```

对外部样式表的作用
```css
@import ulr(color.css) screen and (min-width: 1000px) {样式代码}
```

# 第28章 CSS3的其他重要样式和属性

## 颜色相关样式

### 利用alpha通道来设定颜色

1. 对RGB颜色设定alpha通道
```css
background-color: rgba(255, 0, 0, 0.5);
```

2. 对HSL(色度、饱和度、亮度)颜色设定alpha通道
H(色度)：0或360表示红，120表示绿，240表示蓝。于360，取余数
S(饱和度)：0%-100%
L(亮度)：0%-100%

```css
background-color: rgba(255, 0, 0, 0.5);
```

outline: outline-color outline-style outline-width; 在元素周围绘制一条轮廓线，可以起到突出元素的作用。
outline-offset: 紧贴着边框外围绘制一条轮廓线。

resize：通过拖动的方式来修改元素的尺寸。主要用于使用overflow属性的任何容器元素中。
```css
overflow: auto;
resize: both;
```

initial: 取消这个属性
```css
font-size: 3em;
font-size: initial;
```

grayscale灰度滤镜:对图片有效
```css
filter: grayscale(50%);
```

sepia滤镜：
```css
filter: grayscale(50%);
```

saturate饱和度滤镜：
```css
filter: saturate(250%);
```

hue-rotate滤镜：
```css
filter: hue-rotate(90deg);
```

invert颜色翻转滤镜：
```css
filter: invert(100%);
```

opacity透明度滤镜：
```css
filter: opacity(50%);
```

opacity对比度滤镜：
```css
filter: constrast(50%);
```

blur模糊滤镜：
```css
filter: blur(2px);
```

drop-shadow模糊滤镜：
```css
filter: drop-shadow(2px 2px 2px purple);
```

# 第29章 综合实例