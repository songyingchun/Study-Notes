# 第1章 CSS和文档

## 元素

**替换元素**
替换元素是指用来替换元素内容的部分并非由文档内容直接表示。
```javascript
<img src="howdy.gif">
```

**非替换元素**
段落、标题、表单元格、列表和XHTML中的几乎所有元素都是非替换元素。

## 元素显示角色

**块级元素**
块级元素生成一个元素框，它会填充其父元素的内容区，旁边不能有其他元素。换句话说，它在元素框之前和之后生成了“分隔符”。

**行内元素**
行内元素在一个文本行内生成元素框，而不会打断这行文本。

块级元素不能继承自行内元素（即不能嵌套在行内元素中）。

## link标记
```javascript
<link rel="stylesheet" type="text/css" href="sheet1.css" media="all">
```

link必须放在head元素中，但不能放在其他元素内部。

**属性**

rel代表“关系”，在这里，关系为stylesheet。type总是设置为text/css。media为all。

## style元素

开始和结束style标记之间的样式称为文档样式表，或嵌套样式表。

##@import指令##

@import指令出现样式表的开关。

```css
@import url(sheet2.css);
```

# 第2章 选择器

## 基本规则

每个规则都有两个基本部分：选择器和声明块。声明块由一个或多个声明组成，每个规则是一个属性-值对。每个样式表由一系列规则组成。

### 元素选择器

文档的元素就是最基本的选择器。

**声明和关键字**

声明块包含一个或多个声明。声明总有如下格式：一个属性后面跟一个冒号，再后面是一个值，然后是一个分号。冒号和分号后面可以有0个或多个空格。几乎在所有情况下，值要么是一个关键字，要么是该属性可取关键字的一个列表（包含一个或多个关键字），关键字之间用空格分隔。

```css
p{font: medium Helvetica;}
```

**分组**

选择器分组：为了减少样式表的大小，可以用逗号分隔的列表对选择器进行分组。

```css
H1，H2，H3 {font-family：helvetica;}
```

声明分组：

```css
H1 { 
  font-weight：bold; 
  font-size：12pt;
  line-height：14pt; 
  font-family：helvetica; 
  font-variant：normal;
  font-style：normal;
}
```

**通配选择器**

这个选择器可以与任何元素匹配,就像一个通配符。

```css
* {color: red;}
```

### 类选择器和ID选择器

引用一个元素的classn属性中的值。这个引用前面往往有一个点号（.），标记这是一个类选择器。

```css
.warning{font-weight: bold;}

p.warning{font-weight: bold;}  /*其class属性包含词warning的所有段落*/
```

**多类选择器**

通过把两个或以上的类选择器链接在一起，仅可以选择同时包含这些类名的元素。

```css
.warning.urgent{font-style: italic;}
```

**ID选择器**

ID选择器前面有个#号

```css
#first-para{font-weight: bold;}
```

### 属性选择器

选择有某个属性的元素，而不论该属性的值是什么，可以使用一个简单属性选择器。

```css
h1[class]{color: silver;}

*[title]{font-weight: bold;}
```

**根据部分属性值选择**

如果属性值包含某个值，可以用部分值属性选择器（~=）

```css
p[class~="warning"]{font-weight: bold;}
```

其他部分值属性选择器：

[foo^="bar"] 选择foo属性值以"bar"开头的所有元素。
[foo$="bar"] 选择foo属性值以"bar"结尾的所有元素。
[foo*="bar"] 选择foo属性值中包含子串"bar"的所有元素。

**特定属性选择类型**

```css
*[lang|="en"]{color: white;}
```

## 使用文档结构

### 后代选择器（上下文选择器）

后代选择器 ，规则左边的选择器一端包括两个或多个用空格分隔的选择器。

```css
ul ol ul em{color: gray;}
```

### 子元素选择器

选择元素的子元素，用大于号（>）。

```css
h1 > strong {color: red;}
```

### 相邻兄弟选择器

选择元素的紧接在另一个元素后的元素，用加号（+）。

```css
h1 + p {margin: 0;}
```

## 伪类和伪元素

利用这些选择器，可以为文档中不一定具体存在的结构指定样式。

### 伪类选择器

所有伪类和伪元素关键字前面都有一个（:）。

**链接伪类**

```css
a:link{} /*指向一个未访问地址的所有锚。*/
a:visited{} /*指向作为已访问地址超链接的所有锚。*/
```

**动态伪类**

根据用户行为改变文档的外观。

:focus：指示当前拥有输入焦点的元素。
:hover：指示鼠标指针停留在哪个元素上。
:active：指示被用户输入激活的元素。

```css
input:focus{background: silver;}
a:hover{background: silver;}
a:active{background: silver;}
```

**选择第一个子元素**

:first-child：选择元素的第一个子元素

**根据语言选择**

根据元素的语言来选择。
```css
*:lang(fr){font-style: italic;}
```

### 伪类选择器

**设置首字母样式**

:first-letter：匹配元素第一个字母

```css
p:first-letter{font-size: 200%;}
```

**设置第一行样式**

:first-line：匹配第一行元素

```css
p:first-letter{color: purple;}
```

**设置之前和设置之后元素的样式**

:before：在元素前插入生成内容。
:after：在元素后插入生成内容。

```css
h2:before{content: "}}"}; color: silver;

body:after{content: "  The End."}
```

# 第3章 结构和层叠

## 特殊性

特殊性值表述为4个部分：0,0,0,0。

* 对于选择器中给定的各个ID属性值，加0,1,0,0
* 对于选择器中给定的各个类属性值、属性选择或伪类，加0,0,1,0
* 对于选择器中给定的各个元素和伪元素，加0,0,0,1。
* 结合符和通配选择器对特殊性没有任何贡献。
* 内联样式，加1,0,0,0
* 重要性!important并没有特殊性，但总会胜出。    

## 继承

继承的值没有特殊性。0特殊性比无特殊要强。

# 第4章 值和单位

## 长度单位

### 绝对长度单位

英寸（in）：1英寸是2.54厘米
厘米（cm）：1厘米是0.394英寸。
毫米（mm）：10毫米等于1厘米。
点（pt）：一英寸是72点。
派卡（pc）：1派卡相当于12点。

### 相对长度单位

**em和ex单位

em定义为一种给定字体的font-size值。

ex是指所用字体中小写x的高度。

**像素长度**

用户将无法使用其浏览器中的“文本大小”菜单调整文本的大小。

# 第5章 字体

## 字体系列

font-family:文档大部分采用某种serif字体。只有当一个字体名中有一个或多个空格，或者如果字体名包括#或￥之类的符号，才需要加引号。

```css
h1{font-family: Georgia, serif;}
```

## 字体大小


名称|声明|值|初始值|应用于|继承性|计算值
-|-|-|-|-
字体风格|font-family|[[&lt;family-name&gt;&#124;&lt;generic-family&gt;],]* [&lt;family-name&gt;&#124;&lt;generic-family&gt;] &#124; inhert | 用户代理指定的值|所有元素|有|根据指定确定
字体加粗|font-weight|normal&#124;bold&#124;bolder&#124;lighter&#124;100&#124;200&#124;300&#124;400&#124;500&#124;600&#124;700&#124;800&#124;900&#124;inherit|normal|所有元素|有|数字值
字体大小|font-size|xx-small&#124;x-small&#124;small&#124;medium&#124;large&#124;x-large&#124;xx-large&#124;smaller&#124;larger&#124;&lt;length&lgt;&#124;&lt;percentage&gt;&#124;inherit|medium|所有元素|有|绝对长度


# 总结

名称|作用|符号|特殊性|例子
-|-|-|-|-
元素选择器|匹配文档元素的选择器||0,0,0,1|p{font-size: 12px;}|
通配符选择器|匹配所有元素|*|0,0,0,0|* {color: red;}
类选择器|匹配类名为class的选择器的元素|.|0,0,1,0|.warning{font-weight: bold;}
ID选择器|匹配ID名为ID的选择器的元素|#|0,1,0,0|#warning{font-weight: bold;}
属性值选择器|匹配属性值的选择器的元素|[]|0,0,1,0|h1[class]{color: silver;}
部分属性值选择器|匹配部分属性值的选择器的元素|0,0,1,0|~=|p[class~="waring"]{font-weight: bold;}
子串匹配头部属性选择器|匹配头部属性的选择器的元素|0,0,1,0|^=|[foo^="bar"]
子串匹配尾部属性选择器|匹配尾部属性选择器的元素|0,0,1,0|$=|[foo$="bar"]
包含子串匹配属性选择器|匹配包含子串匹配属性选择器的元素|0,0,1,0|*=|[foo*="bar"]
特定属性选择器|匹配特定属性选择器的元素|&#124;=|0,0,1,0|*[lang|="en"]{color: white;}
后代选择器|匹配后代元素|空格||ul em{color: gray;}  // 作为ul后代的em元素的文本变成灰色
子元素选择器|匹配子元素|>||h1 > strong {color: red;}  // 作为h1子元素的strong元素的文本变成红色
相邻兄弟选择器|匹配紧接着的元素|+||h1 + p {margin: 0;}  // 去除紧接在一个h1元素后出现的段落上边距

伪类|描述|特殊性|例子
-|-|-
:link|未访问地址的所有锚。|0,0,1,0|
:visited|已访问地址超链接的所有锚。|0,0,1,0|
:focus|当前拥有输入焦点的元素。|0,0,1,0|
:hover|鼠标指针停留在哪个元素上。|0,0,1,0|
:active|被用户输入激活的元素。|0,0,1,0|
:first-child|选择元素的第一个子元素|0,0,1,0|p:first-child{color: silver;}
:lang()|根据语言来选择|0,0,1,0|*:lang(fr){font-style: italic;}

伪元素|描述|特殊性|例子
-|-|-|-
:first-letter|匹配元素的首字母|0,0,0,1|p:first-letter{font-size: 200%;}
:first-line|匹配第一行元素|0,0,0,1|p:first-line{color: purple;}
:before|在元素前插入生成内容|0,0,0,1|h2:before{content: "}}"}; color: silver;
:after|在元素后插入生成内容|0,0,0,1|body:after{content: "  The End."}



