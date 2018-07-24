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
form：对input、output、select、textarea、button、fieldset元素可用，指定属于哪个表单
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

## 多媒体播放

### 属性
src、
autoplay、
preload=none（不加载）/metadata（预加载元数据）/auto（加载全部）、
loop、
controls、
error、
networkState：0（元素处于初始状态）、1（尚未建立网络连接）、2（媒体数据加载中）、3（不执行加载）
currentSrc：读取播放中媒体数据的URL
buffered：
readyState：0（没有数据）、1（没有有效的数据）、2（没获取到下一帧）、3（可以播放）、4（有足够的后续数据）
played、paused、ended
defaultPlaybackRate：读取或修改媒体默认的播放速率。
volume、muted

### 事件
laodstart：浏览器开始在网上寻找媒体数据
progress：浏览器正在获取媒体数据
play：即将开始播放
pause：暂停播放
loadeddata：浏览器已加载完毕当前播放位置的媒体数据，准备播放
playing：正在播放
canplay：能够播放，播放时需要缓冲
canplaythrough：能够播放，播放时不需要缓冲
seeking：值为true时，正在请求数据
seeked：值为false时，停止请求数据
ended：播放结束后停止播放

## 添加字幕

### track元素
src：字幕文件的存放路径
srclang：字幕文件的语言
king：subtitles（翻译）/captions（）指定字幕文件的种类

# 第七章 History API

## 示例

### History API
pushState(state, title, url)：创建新的历史状态，所以你会发现“后退”按钮也能使用了。按下“后退”按钮，会触发 window 对象的 popstate 事件。 popstate事件的事件对象有一个 state 属性，这个属性就包含着当初以第一个参数传递给 pushState() 的状态对象。
history.replaceState(statusObject, title)：传入的参数与 pushState() 的前两个参数相同。调用这个方法不会在历史状态栈中创建新状态，只会重写当前状态。

# 第八章 本地存储Web Storage

## Web Storage
cookie的问题：
大小：cookie被限制在4KB。
带宽：cookie是随HTTP事务一起发送的，会浪费一部分发送cookie使用的带宽。
复杂性：正确操作cookie很难。

sessionStorage：保存在session对象中。指进入网站到浏览器关闭所经过的这段时间。
localStorage：保存在客户端本地硬件设备。
sessionStorage为临时保存，localStorage为永久保存。

## 本地数据库

### SQLLite：通过SQL语言来访问的文件型SQL数据库
创建数据库
```javascript
let db = openDatabase("MySql", "1.0", "我的数据库描述", 1024 * 1024);
```

创建表
create table
```javascript
const USER_TABLE_SQL = "create table if not exists userTable (id integer primary key autoincrement,username varchar(12),password varchar(16),info text)";
db.transaction(tx => {
    tx.executeSql(USER_TABLE_SQL, [],
        (tx, result) => {
            alert('创建user表成功:' + result);
        }, (tx, error) => {
            alert('创建user表失败:' + error.message);
        })
})
```

### executeSql语句

增
```javascript
const INSERT_USER_SQL = "insert into userTable (username, password,info) values(?,?,?)";
db.transaction(tx => {
    tx.executeSql(INSERT_USER_SQL,
        [user.username, user.password, user.info],
        (tx, result) => {
            alert('添加数据成功:');
        }, (tx, error) => {
            alert('添加数据失败:' + error.message);
        })
})
```

删
```javascript
const DELETE_USER_SQL = "delete from userTable where username = ?";
db.transaction(tx => {
    tx.executeSql(DELETE_USER_SQL, [user.username],
        (transaction, resultSet) => {
            alert("删除数据成功")
        }, (transaction, error) => {
            alert("删除数据失败:" + error.message)
        })
});
```

查
```javascript
const QUERY_USER_SQL = "select * from userTable";
 db.transaction(tx => {
    tx.executeSql(QUERY_USER_SQL, [],
        (tx, result) => {
            console.log(result);
        },
        (tx, error) => {
            console.log('查询失败: ' + error.message)
        })
})
```

改
```javascript
const UPDATE_USER_SQL = "update userTable set password = ? where username = ?";
db.transaction(tx => {
    tx.executeSql(UPDATE_USER_SQL, [user.password, user.username],
        (tx, result) => {
            alert("修改数据成功")
        }, (tx, error) => {
            alert("修改数据失败:" + error.message)
        })
})
```

## indexedDB数据库

### indexedDB数据库的基本概念
indexedDB是一种存储在客户端本地的NoSQL数据库

连接数据库

```javascript
var dbName = 'syc';
var dbVersion = 20180722
var db = indexedDB.open(dbName, dbVersion);
```

关闭数据库
```javascript
db.close();
```

更新数据库
```javascript
db.onupgradeneeded = function (e) {
    alert('旧版本号：' + e.oldVersion);
    alert('新版本号：' + e.newVersion);
};
```

创建数据库
```javascript
dbContent.onupgradeneeded = function (e) {
    idb = e.target.result;
    var tx = e.target.transaction;
    var name = 'user'
    var optionalParameters = {
        keyPath: 'userId',
        atuoIncrement: false
    };

    var store = idb.createObjectStore(name, optionalParameters);
    alert('创建成功');
}
```

创建索引
```javascript
dbContent.onupgradeneeded = function (e) {
    idb = e.target.result;
    var tx = e.target.transaction;
    var name = 'user'
    var optionalParameters = {
        keyPath: 'userId',
        atuoIncrement: false
    };

    var store = idb.createObjectStore(name, optionalParameters);
    alert('创建成功');

    var name = 'userNameIndex';
    var keyPath = 'username';

    var optionalParameters = {
        unique: false,
        multiEntry: false
    }

    var idx = store.createIndex(name, keyPath, optionalParameters);

    alert('索引创建成功');
}
```

### 使用事务

连接事务
```javascript
var storeName = ['Users'];
var mode = "readonly";      // 只读事务
var tx = idb.transaction(storeName, mode);
```

中断事务
```javascript
tx.abort();
```
### 保存数据
```javascript
var tx = idb.transaction(['customers'], 'readwrite');       // 开启事务
var store = tx.objectStore('customers');
var value = {
    userId: 1,
    userName: '张三',
    address: '住址1'
}
var req = store.put(value);
```

### 获取数据

```javascript
var req = store.get(1);
this.result.userName;

var req = store.get('张三');
```

# 第9章 离线应用程序

本地缓存是为了整个Web应用程序服务的。

## mainfest文件
以清单的形式列举了需要被缓存或不需要被缓存的资源文件的文件名称，以及这些资源文件的访问路径。
可以为每一个页面单独指定一个mainfest文件，也可以对整个Web应用程序指定一个总的mainfest文件。

```javascript
CACHE MANIFEST
CACHE:
other.html
hello.js
images/myphoto.jpg
NETWORK:
http://www.songyingchun.com
*
FALLBACK:
online.js locale.js
CACHE:
newhello.html
newhello.js
```

```html
<html mainfest="hello.mainfest"></html>
```

## applicationCache对象
浏览器对本地缓存进行更新，会触发这个事件
```javascript
applicationCache.onUpdateReady = function () {
    alert('');
}
```

### swapCache方法
```javascript
applicationCache.onUpdateReady = function () {
    applicationCache.swapCache();
    location.reload();
}
```

# 第10章 文件API

## ArrayBuffer对象与ArrayBufferView对象

### ArrayBuffer对象
一个ArrayBuffer对象代表一个固定长度的用于装载数据的缓存区。
```javascript
var buf = new ArrayBuffer(32);
```

### ArrayBufferView对象
ArrayBufferView对象以一种准确的格式来表示ArrayBuffer对象缓存区中的数据。
```javascript
var Int32Array = new Int32Array(ArrayBuffer);
```

### DataView对象
提供直接存取ArrayBuffer缓存区中数据的一些方法。

```javascript
var view = new DataView(buffer, byteOffset, byteLength);
```

## Blob对象
代表原始二进制数据。file对象也继承了Blob对象。有两个属性,size属性表示Blob对象的字节长度，type属性表示Blob的MIME类型。

### 创建Blob对象
var blob = new Blob([blobParts, type]);

## FileReader对象
用于捕获读取文件时的状态

readAsDataURL:将Blob对象或文件中的数据读取为一串Data URL字符串，该方法事实上将数据以一种特殊格式的URL地址形式直接读入页面。
readAsText:将Blob对象或文件中的数据以文本方式读取，读取的结果即这个文本文件中的内容。
readAsBinaryString:这个方法将Blob对象或文件中的数据读取为二进制字符串，通常我们将它传送到服务器端，服务器端可以通过这段字符串存储文件。
readAsArrayBuffer:该方法将Blob对象或文件中的数据读取为一个ArrayBuffer对象。

事件：
onabort:数据读取中断时触发
onerror:数据读取出错时触发
onloadstart:数据读取开始时触发
onabort:数据读取中
onload:数据读取成功完成时触发
onloaded:数据读取完成时触发，无论成功或失败

## FileSystem API
当应用程序需要使用大的二进制数据

创建
```javascript
window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, function (fs) {
    fs.root.getFile('a.txt', {
        create: true,
    }, function (fileEntry) {
        console.log(fileEntry);
    }, function (e) {
        console.error(e);
    });
},
```

写入
```javascript
fileEntry.createWriter(function (fileWriter) {
    fileWriter.onwriteend = function (e) {
        document.getElementById('result').innerHTML = '成功';
    }
    fileWriter.onerror = function (e) {
        document.getElementById('result').innerHTML = '失败';
    }
    var blob = new Blob(['测试']);
    fileWriter.write(blob);
});
```

追加数据
```javascript
fileWriter.seek(fileWriter.length);
var blob2 = new Blob(['追加数据']);
fileWriter.write(blob2);
```

读取文件
```javascript
fileEntry.file(function (file) {

}, function (e) {
    
})
```

删除文件
```javascript
fileEntry.remove(function (file) {

}, function (e) {
    
})
```

创建目录
```javascript
fs.root.getDirectory('test', {create: true}, function (dirEntry) {

}, function (e) {
    
});
```

读取目录内容
```javascript
var dirReader = fs.root.createReader();
dirReader.readEntries(function (){}, function () {});
```

删除目录内容
```javascript
dirEntry.remove(function () {}, function (){});
```

# 第11章 通信

## 跨文档消息传输

message事件：不同源之间可以互相通信 
```javascript
window.addEventListener('message', functioin () {

}, false);

otherWindow.postMessage(message, targetOption);
```

### 通道通信
```javascript
var mc = new MessageChannel();
```

## WebSocket通信
在服务器与客户端之间建立一个非HTTP的双向连接。客户端发送信息时，无需重新建立连接。
### 使用WebSocket

创建WebSocket
```javascript
var webSocket = new WebSocket("ws://locahost:8005/socket");
```

发送
```javascript
webSocket.send("data");
```

接收
```javascript
webSocket.onmessage = function (event) {
    var data = event.data;
}
```

关闭
```javascript
webSocket.close();
```

### Server-Send Events API
```javascript
var source = new EventSource("test.php");
source.onmessage = function (event) {
    document.getElementById('result').innerHTML += event.data;
}
```

# 第12章 WebRTC

实现音频和视频的实时通信

## getUserMedia方法访问本地设备
```javascript
var video = document.getElementById('myVideo');
navigator.getUserMedia({
    video: true, 
    auido: false
}, function (stream) {
    alert(stream);
    video.src = URL.createObjectURL(stream);
}, function (err) {
    alert(err);
    console.error(err);
});
```

# 第14章 WebWorker
创建后台线程
main.js
```javascript
var worker = new Worker('worker.js');
worker.onmessage = function () {
    
}
```
child.js
```javascript
worker.postMessage(message);
```
适用场合：
文字格式化处理
拼写检查
分析视频和音频数据
大数据处理和分析 
canvas图像数据的运算及生成处理

## SharedWorker
多个页面共用一个后台线程
```javascript
var worker = new ShareWorker(url, [name]);
```

# 第15章 获取地理位置

## Geolocation API

### 取得当前地理位置

```javascript
navigator.geolocation.getCurrentPostion(function (postion) {
    
});
```

# 第16章 拖放API与通知API

在元素上设置draggable为true,并监听被拖放元素的dragstart事件、拖放目录元素的dragend事件。

```javascript
var source = document.getElementById('dragme');

source.addEventListener('dragstart', function (ev) {
    var dt = ev.dataTransfer;
    dt.effectAllowed = "none";

    dt.setData("text/plain", "drame");
}, false);

var dest = document.getElementById('text');

dest.addEventListener('drop', function (ev) {
    var dt = ev.dataTransfer;
    var text = dt.getData('text/plain');

    dest.textContent += text;

    ev.preventDefault();

    ev.stopPropagation();
}, false);
```

