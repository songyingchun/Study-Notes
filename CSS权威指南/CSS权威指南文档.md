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

[![行框图](http://p7qbd55hu.bkt.clouddn.com/%E8%A1%8C%E6%A1%86%E5%9B%BE.png '行框图')](http://p7qbd55hu.bkt.clouddn.com/%E8%A1%8C%E6%A1%86%E5%9B%BE.png'行框图')

**行高和继承**

line-height值从父元素继承时，要从父元素计算，而不是在子元素上计算。

## 垂直对齐文本

vertical-align:

值|名称|作用
-|-|-|-
baseline|基线对齐|要求一个元素的基线与父元素的基线对齐。
sub|上标|将元素的内容区和行内框下移。声明会使一个元素变成下标。这意味着其基线（或者如果这是一个替换元素，则是其底端）相对于其父元素的基线降低。
super|下标|将元素的内容区和行内框上移。声明会使一个元素变成上标。这意味着其基线（或替换元素的底端）相对于其父元素的基线升高。
bottom|行的底端对齐|将元素行内框的底端与包含该元素的行框的底端对齐。
text-bottom|文本底端对齐|将元素行内框的底端与父元素内容区的底端对齐。替换元素或任何其他类型的非文本元素会忽略这个值。对于这些元素，将考虑一个“默认”的文本框。这个默认框由父元素的font-size得到。要对齐的元素的行内框底端再与这个默认文本框的底端对齐。
top|行的顶端对齐|将元素行内框的顶端与包含该元素的行框的顶端对齐。
text-top|文本顶端对齐|将元素行内框的顶端与父元素内容区的顶端对齐。
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

# 第7章 基本视觉格式化

## 基本框

各元素中心有一个内容区。这个内容区周围有可选的内边距、边框和外边框。

[![内容区](http://p7qbd55hu.bkt.clouddn.com/%E5%86%85%E5%AE%B9%E5%8C%BA.png '内容区')](http://p7qbd55hu.bkt.clouddn.com/%E5%86%85%E5%AE%B9%E5%8C%BA.png'内容区')

## 包含块

每个元素都相对于其包含块摆放；包含块就是一个元素的“布局上下文”。包含块由最近的块级祖先框、表单元格或行内块祖先框的内容边界构成。
```html
<body>
  <div>
    <p>This is a paragraph.</p>
  </div>  
</body>
```
p元素的包含块是div元素

概念|说明
-|-
正常流|指西方语言文本从左到右、从上到下显示，这也是我们熟悉的传统HTML文档的文本布局。要让一个元素不在正常流中，唯一的方法就是使之成为浮动或定位元素。
非替换元素|如果元素的内容包含在文档中，称之为非替换元素。
替换元素|这是指作为其他内容占位符的一个元素。
块级元素|这是指段落、标题或div之类的元素。这些元素在正常流中时，会在其框之前和之后生成“换行”，所以处于正常流中的块级元素会垂直摆放。
行内元素|指strong或span之类的元素。这些元素不会在之前或之后生成“行分隔符”，它们是块级元素的后代。
根元素|位于文档树顶端的元素。在HTML文档中，这就是元素html。

## 块级元素

[![框模型](http://p7qbd55hu.bkt.clouddn.com/%E5%AE%8C%E6%95%B4%E7%9A%84%E6%A1%86%E6%A8%A1%E5%9E%8B.png '框模型')](http://p7qbd55hu.bkt.clouddn.com/%E5%AE%8C%E6%95%B4%E7%9A%84%E6%A1%86%E6%A8%A1%E5%9E%8B.png'框模型')

一个元素的witdh定义为从左内边界到右内边界的距离，height是从上内边界到下内边界的距离。

### 水平格式化

用户以为width是指可见元素的宽度。即是左边框到右边框的宽度。CSS的width是指左外边框到右外边框的宽度。

正常流中块级元素的水平部分总和就等于父元素的width。

**水平属性**

非浮动块级元素的水平位置和大小由七个属性决定：'margin-left'，'border-left'，'padding-left'，'width'，'padding-right'，'border-right'和'margin-right'。这七个和总是等于父元素的'宽度'。

这7个属性中，中有3个属性可以设置为auto：width、margin-left、margin-right。其余属性必须设置为特定的值，或者默认宽度为0。

**负外边距**

通过指定负外边距得到更宽的子元素。

**替换元素**

非替换块元素的所有规则同样适用于替换块元素。只有一个例外：width: auto，元素的宽度则是内容的固有宽度。

### 垂直格式化

一个元素的默认高度由其内容决定。高度还会受内容宽度的影响；段落越窄，相应地就会越高，以便容纳其中所有的内联内容。

元素内容的高度大于元素框的高度，用户代理的具体行为将取决于overflow属性的值。

**垂直属性**

也有7个相关属性：margin-top、border-top、padding-top、height、padding-bottom、border-bottom和margin-bototm。

只有3个属性可以设置为auto:元素内容的height以及上、下边距。

正常流中一个块元素的margin-top或margin-bottom设置为auto，它会自动计算为0。

**百分数高度**

将元素垂直居中的唯一办法就是把上、下外边距都设置为25%。

**合并垂直外边距**

两个或更多个相邻的垂直边距（即没有边界，填充或内容之间的内容）会折叠以使用边距值的最大值。相邻的两个元素加padding或border也不能不阻止。对于父子元素，在父元素上加上padding可以阻止。

## 行内元素

基本述语|说明
-|-
匿名文本|所有未包含在行内元素中的字符串。
em框|em框在字体中定义，也称为字符框。
内容区|非替换元素是em框；替换元素是元素固有高度再加上可能有的外边距、边框或内边距。
行间距|行间距是font-size值和line-height值之差。行间距只应用于非替换元素。
行内框|对于非替换元素，元素行内框的高度刚好等于line-height的值。对于替换元素，元素行内框的高度则恰好等于内容区的高度，因为行间距不应用到替换元素。
行框|包含该行中出现的行内框的最高点和最低点的最小框。行框的上边界要位于最高行内框的上边界，而行框的底边要放在最低行内框的下边界。

### 行内非替换元素

[![行内框](http://p7qbd55hu.bkt.clouddn.com/%E8%A1%8C%E5%86%85%E6%A1%86.png '行内框')](http://p7qbd55hu.bkt.clouddn.com/%E8%A1%8C%E5%86%85%E6%A1%86.png '行内框')

内容区加上行间距就等于行内框。行内框确定了整个行框的高度。行框定义为行中最高行内框的顶端的最低行内框端之间的距离。

**垂直对齐**
vertical-align: 
值|说明
-|-|-|-
top|将元素行内框的顶端与包含该元素的行框的顶端对齐。
bottom|将元素行内框的底端与包含该元素的行框的底端对齐。
text-top|将元素行内框的顶端与父元素内容区的顶端对齐。
text-bottom|将元素行内框的底端与父元素内容区的底端对齐。
middle|将元素行内框的垂直中点与父元素基线上0.5ex处的一点对齐。
super|下标|将元素的内容区和行内框上移。
sub|上标|将元素的内容区和行内框下移。

line-height相对于元素的本身的font-size设置的，而不是相对于父元素设置的。

行内元素的边框边界由font-size而不是line-height控制。如果一个span元素的font-size为12px，line-height为36px，其内容区就是12px高，边框将包围该内容区。

外边距不会应用到行内非替换元素的顶端和底端，它们不影响行框的高度。

### 行内替换元素

会用替换元素整体（包括内容、外边距、边距和内边距）来定义元素的行内框。

line-height对图像的行内框没有任何影响。

属性对元素的行框高度的影响：
元素|line-height|margin|border|padding|width、height
-|-|-|-|-|-
块级元素|否|是|是|是|是
行内非替换元素|是|否|否|否|否
行内替换元素|否|否|否|否|是

### 改变元素显示

声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-|-
display|none&#124;inline&#124;block&#124;inline-block&#124;list-item&#124;run-in&#124;table&#124;inline-table&#124;table-row-group&#124;table-header-group&#124;table-footer-group&#124;table-row&#124;table-column-group&#124;table-column&#124;table-cell&#124;table-caption&#124;inherit|inline|所有元素|无||对于浮动、定位和根元素，计算值可变；否则，根据指定确定。

改变的只是元素的显示角色，而不是其本质。一个段落生成行内框并不会把这个段落真正变成一个行内元素。

### 行内块元素

行内块元素的底端默认地位于文本行的基线上，而且内部没有行分隔符。

在行内块元素内部，会像块级元素一样设置内容的格式。行内块元素也有width和height属性。

### run-in元素

这是一个块/行内元素混合，可以使某些块级元素成为下一个元素的行内部分。

run-in框后面是一个块级框时才起作用。如果不是这样，run-in框本身将成为块级框。

# 第8章 内边距、边框和外边框

声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
width|&lt;length&gt;&#124;&lt;percentage&gt;&#124;auto&#124;inherit|auto|块级元素和替换元素|无|相对于包含块的width|对于auto和百分数值，根据指定确定；否则是一个绝对长度，除非元素不能应用该属性
height|&lt;length&gt;&#124;auto&#124;inherit|auto|块级元素和替换元素|无|相对于包含块的height|对于auto和百分数值，根据指定确定；否则是一个绝对长度，除非元素不能应用该属性
margin|[&lt;length&gt;&#124;&lt;percentage&gt;&#124;auto&#124;]{1, 4}&#124;inherit|未定义|所有元素|无|相对于包含块的width|见各个属性
margin-top、margin-right、margin-bottom、margin-left|[&lt;length&gt;&#124;&lt;percentage&gt;&#124;auto&#124;]&#124;inherit|0|所有元素|无|相对于包含块的width|对于百分数，根据指定确定；否则，为绝对长度
border-style|[none&#124;hidden&#124;dotted&#124;dashed&#124;solid&#124;double&#124;groove&#124;ridge&#124;inset&#124;outset]{1, 4}&#124;inherit|对简写属性没有定义|所有元素|无||见各个属性（border-top-style等）|
border-top-style、border-right-style、border-bottom-style、border-left-style|none&#124;hidden&#124;dotted&#124;dashed&#124;solid&#124;double&#124;groove&#124;ridge&#124;inset&#124;outset&#124;inherit|none|所有元素|无||根据指定确定
border-width|[thin&#124;medium&#124;thick&#124;&lt;length&gt;]{1, 4}&#124;inherit|对简写属性没有定义|所有元素|无|相对于包含块的width||见各个属性（border-top-width等）
border-top-width、border-right-width、border-bottom-width、border-left-width|thin&#124;medium&#124;thick&#124;&lt;length&gt;&#124;inherit|medium|所有元素|无||绝对长度；如果边框的样式为none或hidden，则为0
border-color|[&lt;color&gt;&#124;transparent]{1, 4}&#124;inherit|对简写属性没有定义|所有元素|无||相对于包含块的width|见各个属性（border-top-color等）
border-top-color、border-right-color、border-bottom-color、border-left-color|&lt;color&gt;&#124;transparent&#124;inherit|元素的color值|所有元素|无||如果没有指定值，则使用同一元素的color属性的计算值；否则，根据指定确定
border-top、border-right、border-bottom、border-left|[&lt;border-width&gt;&#124;&#124;&lt;border-style&gt;&#124;&#124;&lt;border-color&gt;]&#124;inherit|对简写属性未定义|所有元素|无||见单个属性（border-width等）
border|[&lt;border-width&gt;&#124;&#124;&lt;border-style&gt;&#124;&#124;&lt;border-color&gt;]&#124;inherit|根据单个属性|所有元素|无||根据指定确定
padding|[&lt;length&gt;&#124;&lt;percentage&gt;]{1, 4}&#124;inherit|对简写属性未定义|所有元素|无|相对于包含块的width|见单个属性（padding-top等）
padding-top、padding-right、padding-bottom、padding-left|&lt;length&gt;&#124;&lt;percentage&gt;&#124;inherit|0|所有元素|无|相对于包含块的width|对于百分数值，根据指定确定；对于长度值，则为绝对长度。内边距绝对不能为负

IE6之前使用width和height来定义可见元素框的尺寸，而不是定义元素框的内容。对行内非替换元素应用了width和height属性。

允许为外边距指定少于4个值：
如果缺少左外边距的值，则使用右外边距的值。
如果缺少下外边距的值，则使用上外边距的值。
如果缺少右外边距的值，则使用上外边距的值。

只包含文本的行，能改变行间距离的属性只有line-height、font-size和vertical-align。

# 第9章 颜色和背景

声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
color|&lt;color&gt;&#124;inherit|用户代理特定的值|所有元素|有||根据指定确定
background-color|&lt;color&gt;&#124;transparent&#124;inherit|transparent|所有元素|无||根据指定确定
background-image|&lt;uri&gt;&#124;none&#124;inherit|none|所有元素|无||绝对URI
background-repeat|repeat&#124;repeat-x&#124;repeat-y&#124;no-repeat&#124;inherit|repeat|所有元素|无||根据指定确定
background-position|[[&lt;percentage&gt;&#124;&lt;length&gt;&#124;left&#124;center&#124;right][&lt;percentage&gt;#124;&lt;length&gt;&#124;top&#124;center&#124;bottom]?]&#124;&#124;[[left&#124;center&#124;right]&#124;&#124;[top&#124;center&#124;bottom]]&#124;inherit|0% 0%|块级元素和替换元素|无|相对于元素和原图像上的相应点|如果指定了&lt;length&gt;，则为绝行长度偏移；否则，是百分数值。
background-attachment|scroll&#124;fixed&#124;inherit|scroll|所有元素|无||根据指定确定
background|[&lt;background-color&gt;&#124;&#124;&lt;background-image&gt;&#124;&#124;&lt;background-repeat&gt;&#124;&#124;&lt;background-attachment&#124;&#124;&lt;background-position&gt;]&#124;inherit|根据单个属性|所有元素|无|&lt;background-position&gt;允许的值|见单个属性

边框颜色取自内容的颜色。

背景色会影响内边距。

# 第10章 浮动和定位

## 浮动

声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
float|left&#124;right&#124;none&#124;inherit|none|所有元素|无||根据指定确定
clear|left&#124;right&#124;both&#124;none&#124;inherit|none|块级元素|无||根据指定确定

浮动元素会以某种方式从文档的正常流中删除。

如果要浮动一个非替换元素，则必须为该元素声明一个width。

规则：
1、浮动元素的左（或右）外边界不能超出其包含块的左（或右）内边界。
2、浮动元素的左（或右）外边界必须是源文档中之前出现的左浮动（或右浮动）元素的右（左）外边界，除非后出现浮动元素的顶端在先出现浮动元素的底端下面。
3、左浮动元素的右外边界不会在其右边右浮动元素的左外边界的右边。一个右浮动元素的右外边界不会在其左边任何左浮动元素的右外边界的左边。
4、一个浮动元素的顶端不能比其父元素的内顶端更高。
5、浮动元素的顶端不能比之前所有浮动元素或块级元素的顶端更高。
6、如果源文档中一个浮动元素之前出现另一个元素，浮动元素的顶端不能包含该元素所生成框的任何行框的顶端更高。
7、左（或右）浮动元素的左边（右边）有另一个浮动元素，前者的右外边界不能在其包含块的右（左）边界的右边（左边）。
8、浮动元素必须尽可能高地放置。
9、左浮动元素必须向左尽可能远，右浮动元素则必须向右尽可能远。

## 定位

声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
position|static&#124;relative&#124;absolute&#124;fixed&#124;inherit|static|所有元素|无||根据指定确定

position值含义：
值|说明
-|-
static|元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。
relative|元素框偏移某个距离。元素仍保持其未定位前的形态，它原来所占的空间仍保留。
absolute|元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
fixed|元素框的表现类似于absolute，不过其包含块是视察本身。

**包含块**

对于浮动元素，其包含块为最近的块级祖先元素。

定位包含块：
* “根元素”的包含块（初始包含块）由用户代理建立。根元素是html元素，初始包含块是一个视窗大小的矩形。
* 对于一个非根元素，如果其position值是relative或static，包含块则由最近的块级框、表单元格或行内块祖先框的内容边界构成。
* 对于一个非根元素，如果其position值是absolute，包含块设置为最近的position值不是static的祖先元素（可以是任何类型）
  * 如果这个祖先是块级元素，包含块则是设置为该元素的内边距边界；换句话说，就是由边框界定的区域。
  * 如果这个祖先是行内元素，包含块则设置为该祖先元素的内容边界。
  * 如果没有祖先元素，元素的包含块定义为初始包含块。

元素可以定位到其包含块的外面。这与浮动元素使用负外边距浮动到其父元素内容区外面很类似。

**偏移属性**

定义了到其包含块的距离。

**元素可见性**

visibility属性可以继承

**非替换元素的放置大小**

left + margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right + right = 包含块的width

将外边距设置为auto的绝对元素定位元素水平居中，这与正常流中auto外边距居中行为基本一样。在水平布局中，如果值设置为auto，right或left都可以根据其静态位置放置。
但在垂直布局中，只有top可以取静态位置，出于某种原因，bottom做不到。

```html
水平居中：
<div style="position: relative; width: 25em; border: 1px dotted; ">
  An absolutely positioned element can have its content.
  <span style="position: absolute; top: 0; left: 1em; right: 1em; width: 10em; margin: 0 auto; background: silver;">
    shrink-wrapped
  </span>
  thanks to the way positioning rules work.
</div>

垂直居中：
<div style="position: relative; width: 10em; height: 10em; border: 1px solid;">
  <div style="position: absolute; left: 0; width: 100%; background: #CCC; top: 0; height: 5em; bottom: 0; margin: auto 0;">element</div>
</div>
```

过度受限情况下忽略right的值

**替换元素的放置和大小**

替换元素有固有的高度和宽度，因此其大小不会改变。

水平布局规则：
1、 如果width设置为auto，width的实际使用值由元素内容的固有宽度决定。因此，如果有一个图像宽度是50像素，使用值则计算为50px。如果显式声明了width（也就是说，设置为100px或50%），则width设置为该值。
2、 在从左向右读的语言中，如果left为auto，要把auto替换为静态位置。在从右向左读的语言中，则把right的auto值替换为静态位置。
3、 如果left或right仍为auto（也就是说，未在上一步中被替换），则将margin-left或margin-right的auto的替换为0。
4、 如果此时margin-left和margin-right都还定义为auto，则把它们设置为相等的值，从而将元素在其包含中居中。
5、 在此之后，如果只剩下一个auto值，则将其修改为等于的余下部分（使等式满足）。

垂直布局规则：
1、如果height设置为auto，height的计算值由元素内容的固有高度确实。因此，对于一个50像素高的图像，其height计算为50px。如果height显式声明为某个值（100px或50%），则height会设置为该值。
2、如果top的值为auto，将其替换为替换元素的静态位置。
3、如果bottom值为auto，将其替换为替换元素的静态位置。
4、如果此时margin-top和margin-bottom都还定义为auto，将其设置为相等的值，从而使元素在其包含块中居中。
5、在此之后，如果仅剩下一个auto值，则将其修改为等于等式中的余下部分（使等式满足）

### 相对定位

会为其所有子元素建立一个新的包含块。这个包含块对应于该元素原来所在的位置。

如果过度受限的相对定位，一个值会重置为另一个值的相反数。

名称|声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
偏移属性|top、right、bottom、left|&lt;length&gt;&#124;&lt;percentage&gt;&#124;auto&#124;inherit|auto|定位元素|无|对于top和bottom，相对于包含块的高度；对于right和left，相对于包含块的宽度|对于static元素为auto；对于长度值，是相应的绝对长度；对于百分数值，则为指定的值；否则，为auto。
限制最小宽度和高度|min-width、min-height|&lt;length&gt;&#124;&lt;percentage&gt;&#124;inherit|0|除了非替换行内元素和表单元素以外的所有元素|无|相对于包含块的宽度|对于百分数，根据指定确定；对于长度值，则为绝对长度；否则，为none。
限制最大宽度和高度|max-width、max-height|&lt;length&gt;&#124;&lt;percentage&gt;&#124;inherit|0|除了非替换行内元素和表单元素以外的所有元素|无|相对于包含块的高度|对于百分数，根据指定确定；对于长度值，则为绝对长度；否则，为none。
内容溢出|overflow|visible&#124;hidden&#124;scroll&#124;auto&#124;inherit|visible|块级元素和替换元素|无||根据指定确定
内容剪裁|clip|clip&#124;rect(top, right, bottom, left)&#124;auto&#124;inherit|auto|绝对定位元素|无||对于矩形，4个计算长度表示剪裁矩形区域的4个边；否则，根据指定确实。
元素可见性|visibility|visible&#124;hidden&#124;collapse&#124;inherit|visible|所有元素|有||根据指定确定
z轴|z-index|integer&#124;auto&#124;inherit|auto|所有元素|无||根据指定确定

# 第11章 表布局

## 表格式化

### 表的视觉编排

内部表元素生成矩形框，这些框有内容、内边框和边框，但是没有外边框。

表编排规则：
* 每个行框包含一行表格单元。表中的所有行框按其在源文档中出现的顺序从上到下地填充表（表的标题行框和脚注行框有所例外，它们分别出现在表的最前面和最后面）。因此，有多少个行元素，表中就包含多少表格行。
* 一个行组包含多少个行框，该行组框就包含多少个表格单元。
* 列框包含一列或多列表格单元。所有列框都按其出现的顺序依次相邻放置。对于从左向右读的语言，第一个列框放在左边，而对于从右向左读的语言，第一个列框则放在右边。
* 列组中包含多少个列框，该列组框中就包含多少个表格单元。
* 每个跨行或跨列的单元格是一个矩形框，其宽度和高度分别为一个或多个单元格。这个矩形框的顶行在作为该单元格父元素的行中。
* 单元格框不能超出表或行组的最后一个行框。如果表结构可能造成这种情况，单元格则必须缩小，使之能放在包含它的表或行组中。

**表显示方式**

名称|声明|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
显示方式|display|none&#124;inline&#124;block&#124;inline-block&#124;list-item&#124;run-in&#124;table&#124;inline-table&#124;table-row-group&#124;table-header-group&#124;table-footer-group&#124;table-row&#124;table-column-group&#124;table-column&#124;table-cell&#124;table-caption&#124;inherit|inline|所有元素|无||对于浮动、定位和根元素，计算值可变；否则，根据指定确定。

属性|说明
-|-
inline-table|这个值指定一个元素定义了一个行内级表。这说明，该元素定义了一个生成行内框的矩形块。与之最接近的非表值是inline-block。最接近的HTML元素为table，不过，默认情况下HTML表不是行内元素。
table-row|这个值指定一个元素是一个单元格的行。相应的HTML元素是tr元素。
table-row-group|这个值指定一个元素是一个或多个行的组。相应的HTML值是tbody。
table-header-group|这个值与table-row-group非常相似，只是视觉格式化方面有所不同。标题行组总是在所有其他行和行组之间显示（如果最上面有总标题，要在总标题之后显示）。打印时，如果一个表需要多页打印，用户代理可以在各页顶端重复标题行。规范没有定义如果为多个元素指定table-header-group值会发生什么情况。标题组可以包含多个行。与之对应的HTML值是thead。
table-footer-group|这个值与table-footer-group非常相似，不过脚注行组总是在所有其他行之后显示，如果最下面有页脚标题，要在该总标题之前显示。打印时，如果一个表需要多页打印，用户代理可以在各页底端重复脚行。规范没有定义如果为多个元素指定table-footer-group值会有什么结果。与之对应的HTML元素是tfoot。
table-column|这个值声明元素描述了一个单元格的列。按CSS的术语来说，有这个display值的元素并不显示，就好像它的display值为none一样。之所以存在这个值，主要是为了帮助定义列中单元格的表示。相应的HTML元素是col元素。
table-column-group|这个值声明一个元素是一个或多个列的组。类似于table-column元素，table-column-group元素也不显示，不过这个值有助于定义列组中元素的表示。相应的HTML元素是colgroup元素。
table-cell|这个值声明一个元素表示表中的单个单元格。HTML元素th和td都属于table-cell元素。
table-caption|这个值定义一个表的总标题。

```css
table {display: table;}
tr {display: table-row;}
thead {display: table-header-group;}
tbody {display: table-row-group;}
tfoot {display: table-footer-group;}
col {display: table-column;}
colgroup {display: table-column-group;}
td, th {display: table-cell;}
caption {display: table-caption;}
```

对象插入规则：
1、如果一个table-cell元素的父元素不是table-row元素，则会在该table-cell元素及其父元素之间插入一个匿名table-row对象。所插入的这个对象将包含该table-cell元素的所有连续兄弟。
2、如果一个table-row元素的父元素不是table、inline-table或table-row-group元素，则会在该table-row元素及其父元素之间插入一个匿名table元素。插入的这个对象将包含该table-row元素的所有连续兄弟。
3、如果一个table-column元素的父元素不是table、inline-table或table-column-group元素，则在该table-column元素及其父元素之间插入一个匿名table元素。
4、如果一个table-row-group、table-header-group、table-footer-group、table-column-group或table-caption元素的父元素不是table元素，则在该元素及其父元素之间插入一个匿名table元素。
5、如果一个table或inline-table元素的子元素不是table-row-group、table-header-group、table-footer-group、table-row或table-caption元素、则在该table元素与其子元素之间插入一个匿名table-row对象。这个匿名对象将包含该子元素的所有不是table-row-group、table-header-group、table-footer-group、table-row或table-caption元素的连续兄弟。
6、如果一个table-row-group、table-header-group或table-footer-group元素的子元素不是table-row元素，则在该元素及其子元素之间插入一个匿名table-row对象。这个匿名对象包含该子元素的所有本身非table-row对象的连续兄弟。
7、如果一个table-row元素的子元素不是table-cell元素，则在该元素和其子元素之间插入一个匿名table-cell对象。这个匿名对象包含该子元素的所有本身非table-cell元素的连续兄弟。


声明|名称|值|初始值|应用于|继承性|百分数|计算值
-|-|-|-|-|-|-
caption|表标题|top&#124;bottom|top|display值为talbe-capiton的元素|有||根据指定确定。
border-collapse|表单元格边框|collapse&#124;separate&#124;inherit|separate|display值为talbe或inline-table的元素|有||根据指定确定。
border-spacing|边框间隔|<length><length>?&#124;inherit|0|display值为talbe或inline-table的元素|有||两个绝对长度
empty-cells|处理空单元格|show&#124;hide&#124;inherit|0|display值为talbe或inline-table的元素|有||两个绝对长度

**合并单元格边框**

## 表大小

# 总结

**选择器**
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


**文本属性**
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



