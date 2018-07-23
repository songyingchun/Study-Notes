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