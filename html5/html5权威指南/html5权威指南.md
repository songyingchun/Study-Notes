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
    <header>
        <h1>苹果</h1>
        <p>发表日期：<time pubdate="pubdate">2010/10/09</time></p>
    </header>
    <p><b>苹果</b>，植物类水果</p>
    <footer>
        <p><small>著作权归***</small></p>
    </footer>
    <section>
        
    </section>
</article>
```

### section元素
section元素用来对网站或应用程序中页面上的内容进行分块或者对文章进行分段。section的内容可以单独存储到数据库中或输出到word文档上。
不推荐为那些没有标题的内容使用section。section元素内一定要有h1~h6。h1元素一般用来显示文字标题。
```html
<section>
    <h1>苹果</h1>
    <p>
        <b>苹果</b>，植物类水果
    </p>
</section>
```

artcile和section的区别：想将一块内容分成几段时，应当使用section元素进行分段。如果一块内容相对来说比较独立，完整的时候，应该使用article元素。

### nav元素
作为页面导航的链接组

```html
<nav>
    <ul>
        <li>
            <a href="/">主页</a>
        </li>
        <li>
            <a href="/events">文档</a>
        </li>
    </ul>
</nav>
```

### aside元素
当前页面或文章的附属信息部分
1. 当前文章有关的参考资料、名词解释，在article里用。
2. 在article外，用于页面或站点全局的附属信息部分。

```html
<article>
    ...
    <aside>
        <h1>名词解释</h1>
        <dl>
            <dt>F#</dt>
            <dd>F#是指xxx</dd>
        </dl>
        <dl>
            <dt>词法闭包</dt>
            <dd>语法闭包是指xxx</dt>
        </dl>
    </aside>
    ...
</article>
```

### time元素

```html
<time datetime="2010-11-14">2010年11月13日</time>
```

### pubdate属性
表示文章发布时间
```html
<time datetime="2010-11-14" pubdate>2010年11月13日</time>
```

## 新增的非主体结构元素

### header元素
具有引导和导航作用的结构元素
```html
<header><h1>页面标题</h1></header>
```

### footer元素
表示脚注

### address元素
表示联系信息

### main元素
表示网页中的主要内容。每个网页内部只能放置一个main元素。

## HTML5中网页的结构
h1元素一般用来显示文字标题，section里必放。header元素要定义网页标题的整个内容。header中也可以放h1~h6
```html
<header>
    <img src="" alt="">
</header>
<section>
    <h2>企业描述</h2>
    （正文）
</section>
```

# 第4章 表单及其他新增和改良元素

## 新增元素与属性

### 新增属性
1. form属性：为input、textarea指定表单
2. formaction属性：单击不同提交按钮提交到不同的页面
```html
<form action="a.jsp">
    <input type="submit" name="" formaction="b.jsp" value="">
</form>
```
3. formmethod属性：单击不同提交按钮用不同方式提交
```html
<form action="a.jsp">
    <input type="submit" name="" formaction="b.jsp" formmethod="GET" value="">
    <input type="submit" name="" formaction="b.jsp" formmethod="post" value="">
</form>
```
4. formenctype：对表单元素分别指定不同的编码方式
html4:
x-www-form-urlencoded：当表单元素用get时，浏览器用x-www-form-urlencoded编码方式把表单数据转换成一个字符串（?name=value&name2=value2...）
multipart/form-data：不对字符编码，在使用包含文件上传控件的表单时，必须使用该值
text/plain：不对表单数据中的特殊字符进行编码

```html
<form action="a.jsp">
    <input type="file" name="" value="">
    <input type="submit" value="上传" formaction="uploadFile.jsp" formenctype="multipart/form-data">
</form>
```

5. formtarget：可以对多个提交按钮指定在何处打开表单提交后所需要加载的页面。
```html
<form action="a.jsp">
    <input type="file" name="" value="">
    <input type="submit" value="提交" formtarget="_target">
</form>
```

6. autofocus: 自动获取光标。

7. required： 提示用户必须输入内容。

8. labels：代表该元素所绑定的标签元素所构成的集合

9. control：label元素上控制的元素
```html
<label id="label">邮编：
    <input type="txt_zip" maxlength="6" name="" value="">
    <small>请输入六位数字</small>
</label>
```

```javascript
var label = document.getElementById('label');
var textbox = label.control;
```

10. placeholder: 提示输入的数据

11. list：类似select，当获取焦点才显示。input的list值为datalist的id值
```html
text:<input type="text" name="greeting" list="greetings" value="">
<datalist id="greetings" style="display: none;">
    <option value="Good Morning">Good Morning</option>
    <option value="Good Afternoon">Good Afternoon</option>
    <option value="Good Eventing">Good Eventing</option>
</datalist>
```

12. autocomplete：辅助输入所用的自动完成功能。可以为on或off或""。

13. pattern: 将属性值设为某个格式的正则表达式，在提交时会对这些进行检查。
```html
<form>
    <input type="text" pattern="[0-9][A-Z]{3}" name="part" value="" />
    <input type="submit" name="" value="提交">
</form>
```

14. selectionDirection: 当用户正向取文字时为forward，反向时为backward。
```javascript
var control = document.forms[0]['text'];
var Direction = control.selectionDirection;
```

15. indeterminate：尚未明确是否选取

16. img元素width、height

17. textarea的maxlength和wrap属性
wrap属性可指定值为soft与hard。当值为hard时，向textarea元素中输入的文字个数超出使用textarea元素的cols属性所限定的每行中可显示文字个数而导致文字换行时，提交表单时会在换行处加入一个换行标志。当属性值为soft时，不加入换行标志。为hard时，必须指定cols值。

### 改良input元素种类

种类|说明
search|用于搜索
tel|用于电话
url|输入正确url格式的文字
email|输入正确email格式
date、month、week、time、datetime-local|各种日期与时间输入文本框
number|数值输入框
range|输入一段范围数值的文本框
color|颜色选择文本框

用于输入日期与时间的元素都有一个step属性、stepUp(number)、stepDown(number)。

## 表单验证

1. 自动验证：pattern
2. 取消验证：novalidate=true
3. 显式验证：用Js

## 增强的页面元素

### figure与figcaption

figure元素用来表示网页上一块独立的内容，将其从网页上移除后不会对网页上的其他内容产生任何影响。
figure可以表示图片、统计图或代码示例。

figcaption元素表示figure元素的标题。
```html
<figure>
    <img src="s1.jpg" alt="">
    <figcaption>森林</figcaption>
</figure>
```

### details与summary
details元素为一种用于标识该元素内部的子元素可以展开、收缩显示的元素。该元素有个open属性，为false时，内部的子元素收缩不显示。
summary元素属于details元素，在用鼠标单击summary元素的文字时，details元素中的其他所有元素从属元素将会展开或收缩。
```html
<details id="details" ontoggle="details_ontoggle(this)" style="cursor: pointer;">
    <summary>精武风云</summary>
    <p id="p" style="visibility: hidden;">陈真</p>
</details>
```
```javascript
function details_ontoggle(detail) { 
    var p = document.getElementById('p');
    if(detail.open) {
        p.style.visibility = "visible";
    }else {
        p.style.visibility = "hidden";
    }
}
```

### mark
吸引当前用户的注意
```html
<mark>syc</mark>123
```

### progress
表示一个任务的进程

### meter
表示规定范围内的数量值。
```html
<meter value="91" min="0" max="100" low="40" height="90" optimum="100"></meter>A+
```

### dialog
表示一个对话框

### a
a元素添加download属性

### ol
添加start和reversed属性

### cite
cite元素表示作品

### iframe
增加sandbox属性
1. 页面中的插件被禁用
2. 页面中的表单被禁止提交
3. js被禁止运行
4. 禁止加载该页面来自服务器的内容，同时禁止加载该页面的cookie或Storage中的内容

sandbox="allow-forms"：允许提交表单
sandbox="allow-scripts"：允许执行script
sandbox="allow-same-origin"：允许加载该页面来自服务器的内容
sandbox="allow-top-navigation"：允许a链接到其他页面

# 第5章 绘制图形

## anvas的基础知识

1. 取得canvas
2. 取得上下文
3. 填充与绘制边框
4. 设定绘图样式
5. 指定线宽
6. 指定颜色值
7. 绘制矩形
 
### 绘制矩形

```javascript

```

# 第六章 多媒体
