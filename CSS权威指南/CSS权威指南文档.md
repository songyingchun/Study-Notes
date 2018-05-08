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

## 字体

font: line-height是一个文本属性而不是字体属性。作为对font-size值的一个补充，并用一个斜线（/）与之分隔。

```css
h2{font: bold itatic 200%/1.2 Verdana, Helvetica, Arail, sans-serif};
```

## @font-face规则

```css
@font-face{font-style: normal; font-family: "Times"; slope: -5;}
```

**字体下载**

```css
@font-face{font-family: "Scarborough Fair"; src: url(http://www.example.com/fonts/ps/scarborough.ps);}
```

名称|声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-|-
字体系列|font-family|[[&lt;family-name&gt;&#124;&lt;generic-family&gt;],]* [&lt;family-name&gt;&#124;&lt;generic-family&gt;] &#124; inhert | 用户代理指定的值|所有元素|有||根据指定确定
字体加粗|font-weight|normal&#124;bold&#124;bolder&#124;lighter&#124;100&#124;200&#124;300&#124;400&#124;500&#124;600&#124;700&#124;800&#124;900&#124;inherit|normal|所有元素|有||数字值
字体大小|font-size|xx-small&#124;x-small&#124;small&#124;medium&#124;large&#124;x-large&#124;xx-large&#124;smaller&#124;larger&#124;&lt;length&lgt;&#124;&lt;percentage&gt;&#124;inherit|medium|所有元素|有|根据父元素的大小来计算|绝对长度
字体风格|font-style|itatic&#124;obique&#124;normal&#124;inherit|normal|所有元素|有||根据指定确定
字体变形|font-varient|small-caps&#124;normal&#124;inherit|normal|所有元素|有||根据指定确定
字体拉伸|font-stretch|normal&#124;wider&#124;narrower&#124;ultra-condensed&#124;extra-condensed&#124;condensed&#124;semi-condensed&#124;semi-expanded&#124;expanded&#124;extra-expanded&#124;ultra-expanded&#124;herit|normal|所有元素|有||
调整字体大小|font-size-adjust|&lt;number&gt;&#124;none&#124;inherit|none|所有元素|有||
字体|font|[[&lt;font-style&gt;&#124;&#124;&lt;font-varient&gt;&#124;&#124;&lt;font-weight&gt;]?&lt;font-size&gt;[/&lts;line-height&gt;]?&lt;font-family&gt;]&#124;caption&#124;icon&#124;menu&#124;message-box&#124;small-caption&#124;status-bar&#124;inherit|根据单个属性|所有元素|有|对于&lt;font-size&gt;要相对于父元素来计算；对于&lts;line-height&gt;则相对于元素的&lt;font-size&gts;来计算|见单个属性


# 第6章 文本属性

## 行高

[![行框图](http://p7qbd55hu.bkt.clouddn.com/%255%28P%29QG8SQRXR%29QP6GOQ3HD.png '行框图')](http://p7qbd55hu.bkt.clouddn.com/%255%28P%29QG8SQRXR%29QP6GOQ3HD.png'行框图')

**行高和继承**

line-height值从父元素继承时，要从父元素计算，而不是在子元素上计算。

## 垂直对齐文本

vertical-align:

值|名称|作用
-|-|-|-
baseline|基线对齐|要求一个元素的基线与父元素的基线对齐。
sub|上标|声明会使一个元素变成下标。这意味着其基线（或者如果这是一个替换元素，则是其底端）相对于其父元素的基线降低。
super|下标|声明会使一个元素变成上标。这意味着其基线（或替换元素的底端）相对于其父元素的基线升高。
bottom|行的底端对齐|将元素行内框的底端与行框的底端对齐。
text-bottom|文本底端对齐|替换元素或任何其他类型的非文本元素会忽略这个值。对于这些元素，将考虑一个“默认”的文本框。这个默认框由父元素的font-size得到。要对齐的元素的行内框底端再与这个默认文本框的底端对齐。
top|行的顶端对齐|与bottom刚好相反。
text-top|文本顶端对齐|与text-bottom刚好相反。
middle|居中对齐|行内元素框的中点与父元基线上方0.5ex处的一个点对齐，这里的1ex相对于父元素的font-size定义。
百分数|百分数|会把元素的基线（或替换元素的底边）相对于父元素的基线升高或降低指定的量（你指定的百分数要计算为该元素line-height 的百分数，而不是相对于其父元素的line-height）。

## 处理空白符

white-space:

值|空白符|换行符|自动换行
-|-|-|-
pre-line|合并|保留|允许
normal|合并|忽略|允许
nowrap|合并|忽略|不允许
pre|保留|保留|不允许
pre-wrap|保留|保留|允许

## ~~unicode-bidi~~

unicode-bidi：

值|作用
-|-|-|-
normal|元素不会对双向算法打开附加的一层嵌套。对于行内元素，顺序的隐式重排会跨元素边界进行。
embed|如果是一个行内元素，这个值对于双向算法会打开附加一层嵌套。这个嵌套层的方向由direction属性指定。会在元素内部隐式地完成顺序重排。这对应于在元素开始处增加一个LRE（对于direction:ltr:U+202A）或RLE（对于direction:rtl:U+202B），并在元素的最后增加一个PDF（U+202C）。
bidi-override|这会为行内元素创建一个覆盖。对于块级元素，将为不在另一块中的行内后代创建一个覆盖。这说明，顺序重排在元素内部严格按direction属性进行；忽略了双向算法的隐式部分。这对应于在元素开始处增一个LRO（对于direction:ltr:U+202D）或RLO（对于direction:rtl:U+202E），并在元素最后增加一个PDF（U+202C）。

名称|声明|说明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-|-|-
缩进文本|text-indent||&lt;length&gt;&#124;&lt;percentage&gt;&#124;inherit|0|块级元素|有|相对于包含块的宽度|对于百分数值，要根据指定确定；对于长度值，则为绝对长度。
水平对齐|text-align||left&#124;center&#124;right&#124;justify&#124;inherit|用户代理特定的值|块级元素|有|相对于包含块的宽度|要根据指定确定
行高|line-height|指文本基线之间的距离。控制了行间距，这是文本行之间超出字体大小的额外空间|&lt;length&gt;&#124;&lt;percentage&gt;&#124;&lt;number&gt;&#124;normal&#124;inherit|normal|所有元素|有|相对于元素的大小|计算长度和百分数值是绝对数值；否则，根据指定确定。
垂直对齐|vertical-align|只应用于行内元素和替换元素。应用于表单元格时，只能识别baseline、top、middle和bottom|baseline&#124;sub&#124;super&#124;top&#124;text-top&#124;middle&#124;bottom&#124;text-bottom&#124;&lt;percentage&gt;&#124;&lt;length&gt;&#124;inherit|baseline|行内元素和表单元素|无|相对于元素的line-height|对于百分数和长度值，为绝对长度；否则，根据指定确定。
字间隔|word-spacing|修改字间间隔|&lt;length&gt;&#124;&lt;normal&gt;&#124;inherit|normal|所有元素|有||对于normal，为绝对长度0；否则，是绝对长度
字母间隔|letter-spacing|修改字符或字母之间的间隔|&lt;length&gt;&#124;&lt;normal&gt;&#124;inherit|normal|所有元素|有||对于长度值，为绝对长度；否则，为normal。
文本转换|text-transform|处理文本的大小写|&#124;&lt;normal&gt;&#124;inherit|normal|所有元素|有||根据指定确定
文本修饰|text-decoration|修饰文本|none&#124;[underline&#124;&#124;overline&#124;&#124;line-through&#124;&#124;blink]&#124;inherit|none|所有元素|无||根据指定确定
文本阴影|text-shadow|文本阴影|none&#124;[&lt;color&gt;&#124;&#124;&lt;length&gt;&lt;length&gt;&lt;length&gt;?,]*[&lt;color&gt;&#124;&#124;;&lt;length&gt;&lt;length&gt;&lt;length&gt;?]&#124;inherit|none|所有元素|无||根据指定确定
空白字符|white-space|对源文档的空格、换行和tab字符的处理|normal&#124;nowrap&#124;pre&#124;pre-wrap&#124;pre-line&#124;inherit|normal|所有元素|无|根据指定确定
文本方向|direction|direction属性影响块级元素中文本的书写方向、表中列布局的方向、内容水平填充其元素框的方向，以及两端对齐元素中最后一行的位置。对行行内元素，只有当unicode-bidi属性设置为embed或bidi-override时才会应用direction属性|ltr&#124;rtl&#124;inherit|ltr|所有元素|有|根据指定确定
Unicode方法处理方向性|unicode-bidi||normal&#124;embed&#124;bidi-override&#124;inherit|normal|所有元素|无|根据指定确定

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



