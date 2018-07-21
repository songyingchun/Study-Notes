# 第1章 Web时代的变迁

## 迎接新的Web时代

### 目标
HTML5的目标是为了能够创建更简单的Web程序，书写出简洁的HTML代码。

## HTML5要解决的三个问题
1. Web浏览器之间的兼容性很低
HTML5的使命是详细分析各Web浏览器所具有的功能。
2. 文档结构不够明确
加入很多跟结构相关的元素。
3. Web应用程序的功能受到了限制。
HTML5提供各种各样Web应用上的新的API

# 第2章 HTML5与HTML4的区别

## 语法的变化 

### HTML5的语法变化 
HTML的语法是在SGML(standard Generalized Markup Language) 语言的基础上建立起来的。

### HTML5的标记方法
html4 有三种声明：
1. HTML 4.01 Strict：严格的
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
2. HTML 4.01 Transitional: 过渡的
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
3. HTML 4.01 Frameset: 框架的
该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

html5只有一种声明
<!DOCTYPE html>

指定字符编码
html4:通过content元素的属性来指定
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

html5：直接用charset元素来表示
<meta charset="utf-8">

### HTML5确保的兼容性

#### 可以省略标记的元素
不允许写结束标记的元素有：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr。
可以省略结束标记的元素有：li、dt、dd、p、rt、rp、optgroup、option、colgroup、thead、tbody、tfoot、tr、td、th
可以省略全部标记的元素有：html、head、body、colgroup、tbody

#### 具有boolean值的属性
只写属性不指定属性，默认为true
<input type=checkbox checked>

#### 省略引号
属性值两边的引号可以省略
<input type=text>

## 新增的元素和废除的元素

### 新增的结构元素

元素名|意义|写法
-|-|-
section|表示页面中的一个内容区块。比如章节、页眉、页脚或页面中的其他部分。|`<article>...</article>`
article|表示页面中的一块与上下文不相关的独立内容。比如博客中的一篇文章或报纸中的一篇文章。|`<article>...</article>`
aside|表示article元素之外、与article元素内容相关的辅助信息。|`<aside>...</aside>`
header|表示内容块或页面的标题。|`<header>...</header>`
footer|表示内容块的脚注。|`<footer>...</footer>`
nav|表示导航链接部分。|`<nav>...</nav>`
figure|表示独立的流内容，一般表示文档主体流内容中的一个独立单元。使用figcaptionff元素为figure元素组添加标题。|`<figure>...</figure>`
main|表示网页的主要内容。|`<main>...</main>`

### 新增的其他元素

元素名|意义|html5写法|htm4写法
-|-|-|-
video|定义视频|`<video src="movie.ogg" controls="controls">video元素</video>`|`<object type="video/ogg" data="movie.ogv"><param name="src" value="movie.ogv"></param></object>`
audio|定义音频|`<audio src="audio.wav">audio元素</audio>`|`<object type="application/ogg" data="audio.wav"><param name="src" value="audio.wav"></param></object>`
embed|插入各种多媒体|`<embed src="horse.wav"></embed>`|`<object data="flash.swf" type="application/x-shockwave-flash"></object>`
mark|高亮的文字|`<mark></mark>`|
progress|表示进程|`<progress></progress>`|
meter|表示度量衡|`<meter></meter>`|
time|表示日期或时间|`<time></time>`|
ruby|表示ruby注释|`<ruby></ruby>`|
rt|表示字符的解释或发音|`<rt></rt>`|
rp|在ruby注释中使用、以定义不支持ruby元素的浏览器所显示的内容|`<rp></rp>`|
wbr|表示软换行|`<wbr></wbr>`|
canvas|表示图形|`<canvas></canvas>`|
command|表示命令按钮|`<command></command>`|
details|表示用户要求得到并且可以得到的细节信息，可以跟summary元素配合使用。|`<details><summary></summary></details>`|
datalist|表示可选数据的列表，与input元素配合使用。|`<input id="myCar" list="cars" /><datalist id="cars"><option value="BMW"><option value="Ford"><option value="Volvo"></datalist>`|
datagrid|表示可选数据的列表，它以树形列表的形式显示。|`<datagrid><ol><li>1</li></ol></datagrid>`|
keygen|表示生成密钥。|`<form action="/example/html5/demo_form.asp" method="get">用户名<input type="text" name="usr_name" /> 加密：<keygen name="security" /><input type="submit" /></form>`|
output|表示不同类型的输出，比如脚本的输出。|`<output></output>`|
source|表示为媒体元素定义媒介资源。|`<source></source>`|
menu|表示菜单列表。|`<menu><li></li></menu>`|

### 新增的input类型元素

元素名|意义|html5写法|htm4写法
-|-|-|-
email|输入e-mail地址的文本输入框。|`<input type="email" />`|
url|输入URL地址的文本输入框。|`<input type="url" />`|
number|输入数值的文本输入框。|`<input type="number" />`|
range|输入一定范围内数字值的文本输入框。|`<input type="range" />`|
data|选取年、月、日。|`<input type="data" />`|
month|选取月、年。|`<input type="month" />`|
week|选取周和年。|`<input type="week" />`|
time|选取时间（小时和分钟）。|`<input type="time" />`|
datatime|选取时间、年、月、日（UTC）。|`<input type="datatime" />`|
datatime-local|选取时间、年、月、日（本地）。|`<input type="datatime-local" />`|

### 废除的元素
1. 能使用css替代的元素
basefont、center、font、s、strike、tt、u等元素。

2. 不再使用frame框架
frameset、frame、noframes，只支持iframe

3. 只有部分浏览器支持的元素
applet、bgsound、blink、marquee

4. 其他被废除的元素
rb、使用ruby代替。
acronym、使用abbr代替
dir、使用ul代替。
isindex、使用form与input相结合的方式替代。
listing、使用pre元素代替。
xmp、使用code代替。
nextid、使用GUIDS代替。
plaintext、使用"text/plain"MIME类型代替。

## 新增的属性和废除的属性

### 新增的属性
1. 表单相关的属性
autofocus：对input（type=text/select/textarea/button）元素可用，自动获焦
placeholder：对input（type=text/textarea）元素可用，提示输入
form：对input、output、select、textarea、button、fieldset元素可用，指定属性哪个表单
required：检查元素内一定要有输入内容

autocomplete（datalist）、min、max、multiple、pattern与step。
multiple允许上传多个文件。

novalidate取消提交时的有关检查
labels：为input、button、select、textarea、meter、output、progress、keygen元素定义  
SelectionDirection：选取时，正向为forward。反向时为backward。
indeterminate：表示checkbox“尚未明确是否选取”
maxlength：最大值

2. 链接相关属性
media、download、ping：a、area元素。download让用户下载目标链接的资源，而非打开。

3. 其他属性
start、reversed：ol元素
charset：meta元素
scoped: style元素、规定样式的作用范围
async：script元素
manifest：开发离线Web应用程序它与API结合使用、定义一个URL，在这个URL上描述文档的缓存信息
sandbox、seamless、srcdoc：iframe元素，增加安全性

## 全局属性

### contentEditable属性
指定元素能否编辑
isContentEditable：当元素可编辑时为true

### designMode属性
用来指定整个页面是否可以编辑，有两个值“on”和“off”。
document.designMode = "on"

### hidden属性
元素不可见

### spellcheck属性
对input、textarea进行拼写和语法检查。speecheck=true/false

### tabindex属性
按tab让窗口或页面中的控件获取焦点、每个控件的tabindex表示是第几个访问的。

## 新增事件


对象事件|触发
window|beforeprint|打印前触发
window|afterprint|打印后触发
window|resize|窗口大小发生改变
window|error|页面加载出错时
window|offline|页面变成离线时
window|online|页面变成在线时
window|pageshow|页面加载时触发。load在页面第一次加载时触发，pageshow每次加载时触发。
window|beforeunload|页面关闭时触发
window|haschange|哈希改变时触发
任何元素|mousewheel|鼠标滚动时触发
任何容器元素|scroll|当元素滚动条被滚动时触发
input、textarea|input|修改文本框内容触发
form|reset|按下input type=reset按钮或触发reset方法时触发

# 第3章 HTML的结构

## 新增的主体结构元素

### article元素
article元素代表文档、页面或应用程序中独立的、完整的、可以独自被外部引用的内容。通常有自己的标题，还可以有自己的脚注。
```html
<article>

</article>
```




