# 1. 安装Markdown主题
## 1.1. Markdonw Theme Kit
* 调试->安装其他调试器->输入Markdonw Theme Kit
* 文件->首选项->颜色主题

## 1.2. vscode-markdown-css
* 下载[vscode-markdown-css](https://github.com/raycon/vscode-markdown-css)
* 修改文件：文件->首选项->设置->markdown
* "markdown.styles": [""]

# 2. 生成左侧导航栏 [i5ting](https://github.com/i5ting/tocmd.npm)
安装

```html
npm install -g i5ting_toc
```

生成导航栏

```html
i5ting_toc -f Markdown文档.md -o
```

# 3. （在线）编辑器
* [CMD　Markdown编辑器](https://www.zybuluo.com/mdeditor)
* [dillinger](http://dillinger.io/)
* [小书匠](http://markdown.xiaoshujiang.com/)

# 4. 语法
## 4.1. 常用部分
### 4.1.1. 标题  
#### 4.1.1.1. 段落标题
```html
# h1
<h1>h1</h1>

## h2
<h2>h2</h2>

### h3
<h3>h3</h3>

#### h4
<h4>h4</h4>

##### h5
<h5>h5</h5>

###### h6
<h6>h6</h6>
```
#### 4.1.1.2. 分级标题
```html
AAA
===
<h1>AAA</h1>
BBB
---
<h2>BBB</h2>
```
### 4.1.2. 强调
#### 4.1.2.1. 斜体
*1*
```html
<em>1</em>
```
_1_
```html
<em>1</em>
```
#### 4.1.2.2. 加粗
**1**
```html
<strong>1<strong>
```
#### 4.1.2.3. 删除线
~~1~~
```html
<del>1</del>
```
### 4.1.3. 代码
#### 4.1.3.1. 代码块标记```
```        
123
```
```html
<pre>
    <code>123</code>
</pre>
```
#### 4.1.3.2. 代码块缩进表示法tab键或4空格
    123
```html
<pre>
    <code>123</code>
</pre>
```
#### 4.1.3.3. 语法高亮显示```javascript

```javascript
var syc = "syc";
```

```html
<ol class="linenums">
    <li class="L0">
        <code class="language-javascript">
            <span class="kwd">var</span>
            <span class="pln"> syc </span>
            <span class="pun">=</span>
            <span class="pln"> </span>
            <span class="str">"syc"</span>
            <span class="pun">;</span>
        </code>
    </li>
</ol>
```
#### 4.1.3.4. 内联代码块
`1`
```html
<code>1</code>
```
### 4.1.4. 表格
#### 4.1.4.1. 表格
|     a     |        b        |      c       |
|:---------:|:--------------- | ------------:|
|   居中    | 左对齐           |       右对齐 |
| ========= | =============== | ============ |

```html
|     a     |        b        |      c       |
|:---------:|:--------------- | ------------:|
|   居中    | 左对齐           |       右对齐 |
| ========= | =============== | ============ |
```

```html
<table>
    <thead>
        <tr>
            <th style="text-align:center;">a</th>
            <th style="text-align:left;">b</th>
            <th style="text-align:right;">c</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:center;">居中</td>
            <td style="text-align:left;">左对齐</td>
            <td style="text-align:right;">右对齐</td>
        </tr>
        <tr>
            <td style="text-align:center;">=========</td>
            <td style="text-align:left;">===============</td>
            <td style="text-align:right;">============</td>
        </tr>
    </tbody>
</table>
```

#### 4.1.4.2. 简约写法

a|b|c  
:-:|:-|-:
居中|左对齐|右对齐
===|===|===

```html
a|b|c  
:-:|:-|-:
居中|左对齐|右对齐
===|===|===
```

```html
<table>
    <thead>
        <tr>
            <th style="text-align:center;">a</th>
            <th style="text-align:left;">b</th>
            <th style="text-align:right;">c</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:center;">居中</td>
            <td style="text-align:left;">左对齐</td>
            <td style="text-align:right;">右对齐</td>
        </tr>
        <tr>
            <td style="text-align:center;">===</td>
            <td style="text-align:left;">===</td>
            <td style="text-align:right;">===</td>
        </tr>
    </tbody>
</table>
```
#### 4.1.4.3. html生成表格地址
* [表格地址](http://www.tablesgenerator.com/markdown_tables)

### 4.1.5. 链接
#### 4.1.5.1. 内链式
[百度](http://www.baidu.com/"百度一下")

```html
[百度](http://www.baidu.com/"百度一下")
``` 

```html
<a href="http://www.baidu.com/" title="百度一下" target="_blank">百度</a>   
```

#### 4.1.5.2. 引用式
[百度][1]

[1]: http://www.baidu.com/ "百度"

```html
[百度][1]

[1]: http://www.baidu.com/ "百度"
```
```html
<a href="http://www.baidu.com/" title="百度一下" target="_blank">百度</a>  
```

#### 4.1.5.3. 邮箱链接
<419973879@qq.com>

```html
<419973879@qq.com>
```

```html
<a href="mailto:419973879@qq.com">419973879@qq.com</a>
```

### 4.1.6. 图片
#### 4.1.6.1. 内链式
![百度](https://www.baidu.com/img/bd_logo1.png '百度')

```html
![百度](https://www.baidu.com/img/bd_logo1.png '百度')
```

```html
<img src="https://www.baidu.com/img/bd_logo1.png" alt="百度">
```

#### 4.1.6.2. 引用式
![百度][02]

[02]: https://www.baidu.com/img/bd_logo1.png
```html
![百度][02]

[02]: https://www.baidu.com/img/bd_logo1.png
```
```html
<img src="https://www.baidu.com/img/bd_logo1.png" alt="百度">
```

#### 4.1.6.3. 图片带有链接
[![百度](https://www.baidu.com/img/bd_logo1.png '百度')](https://www.baidu.com/img/bd_logo1.png'我的百度')
```html
[![百度](https://www.baidu.com/img/bd_logo1.png '百度')](https://www.baidu.com/img/bd_logo1.png'我的百度')
```
```html
<a href="https://www.baidu.com/img/bd_logo1.png" title="我的百度" target="_blank">
<img src="https://www.baidu.com/img/bd_logo1.png" alt="百度">
</a>
```

### 4.1.7. 列表
#### 4.1.7.1. 无序列表
* one
    * two
    * three
+ one
    + two
    + three
- one
    - two
    - three

```html
* one
    * two
    * three
+ one
    + two
    + three
- one
    - two
    - three
```

```html
<ul data-anchor-id="lcqq">
    <li>one <br>
        <ul>
            <li>two</li>
            <li>three</li>
        </ul>
    </li>
    <li>one <br>
        <ul>
            <li>two</li>
            <li>three</li>
        </ul>
    </li>
    <li>one <br>
        <ul>
            <li>two</li>
            <li>three</li>
        </ul>
    </li>
</ul>
```
#### 4.1.7.2. 有序列表
1. one
    2. two
    3. three

```html
1. one
    2. two
    3. three
```

```html
<ol data-anchor-id="lcqq">
    <li>one <br>
        <ol>
            <li>two</li>
            <li>three</li>
        </ol>
    </li>
</ol>
```
#### 4.1.7.3. 定义型列表
Markdown 
:   轻量级文本标记语言，可以转换成html，pdf等格式  //  开头一个`:` + `Tab` 或 四个空格

代码块定义
:   代码块定义……

        var a = 10;         // 保持空一行与 递进缩进

```html
Markdown 
:   轻量级文本标记语言，可以转换成html，pdf等格式  //  开头一个`:` + `Tab` 或 四个空格

代码块定义
:   代码块定义……

        var a = 10;         // 保持空一行与 递进缩进
```

```html
<dl data-anchor-id="c7qz">
    <dt>Markdown</dt>
    <dd>轻量级文本标记语言，可以转换成html，pdf等格式  //  开头一个<code>:</code> + <code>Tab</code> 或 四个空格</dd>

        <dt>代码块定义</dt>
    <dd>
    <p>代码块定义……</p>

    <pre><code>var a = 10;         // 保持空一行与 递进缩进
    </code></pre>
    </dd>
</dl>
```

### 4.1.8. 清单选项表
- [x] 选项一 
- [ ] 选项二

```html
- [x] 选项一 
- [ ] 选项二
```

```html
<ul data-anchor-id="lcqq">
    <li class="todo-list-item">
        <i class="icon-check-sign"></i>选项一 
    </li>
    <li class="todo-list-item">
        <i class="icon-check-empty"</i>选项二
    </li>
</ul>
```

### 4.1.9. 引用
#### 4.1.9.1. 单行引用
> hello world!

```html
> hello world!
```

```html
<blockquote data-anchor-id="uy9i" class="white-blockquote">
    <p>hello world!</p>
</blockquote>
```
#### 4.1.9.2. 多行引用
> hello world!
> hello world!
> hello world!

```html
> hello world!
> hello world!
> hello world!
```

```html
<blockquote data-anchor-id="uy9i" class="white-blockquote">
  <p>hello world! <br>
  hello world! <br>
  hello world!</p>
</blockquote>
```

#### 4.1.9.3. 嵌套引用
> aaaaaaaaa
>> bbbbbbbbb
>>> cccccccccc

```html
> aaaaaaaaa
>> bbbbbbbbb
>>> cccccccccc
```

```html
<blockquote data-anchor-id="uy9i" class="white-blockquote">
  <p>aaaaaaaaa</p>
  <blockquote class="white-blockquote">
    <p>bbbbbbbbb</p>
    <blockquote class="white-blockquote">
      <p>cccccccccc</p>
    </blockquote>
  </blockquote>
</blockquote>
```
### 4.1.10. 描点
[公式标题锚点](#1)

```html
[公式标题锚点](#1)
```

```html
<a href="#1">公式标题锚点</a>
```

```html
### [需要跳转的目录] {#1}
```

```html
<h3 id="1" data-anchor-id="ijx7">[需要跳转的目录]</h3>
```
### 4.1.11. 脚注
Markdown[^1]
[^1]: Markdown是一种纯文本标记语言。

```html
Markdown[^1]
[^1]: Markdown是一种纯文本标记语言。
```

```html
<p data-anchor-id="whgn">
    Markdown
    <a href="#fn:1" id="fnref:1" title="查看注脚" class="footnote">[3]</a>
</p>
```
### 4.1.12. 表情
[表情代码](https://link.jianshu.com/?t=https://www.webpagefx.com/tools/emoji-cheat-sheet/%27GitHub%27)

### 4.1.13. 分隔符

***

```html
***
```

```html
<hr>
```

---

```html
---
```

```html
<hr>
```

## 4.2. 其他部分
### 4.2.1. 视频插入
<iframe height=498 width=510 src='http://player.youku.com/embed/XMjgzNzM0NTYxNg==' frameborder=0 'allowfullscreen'></iframe>

```html
<iframe height=498 width=510 src='http://player.youku.com/embed/XMjgzNzM0NTYxNg==' frameborder=0 'allowfullscreen'></iframe>
```

[![](https://www.baidu.com/img/bd_logo1.png)](http://v.youku.com/v_show/id_XMjgzNzM0NTYxNg==.html?spm=a2htv.20009910.contentHolderUnit2.A&from=y1.3-tv-grid-1007-9910.86804.1-2#paction)
```html

<a href="http://v.youku.com/v_show/id_XMjgzNzM0NTYxNg==.html?spm=a2htv.20009910.contentHolderUnit2.A&amp;from=y1.3-tv-grid-1007-9910.86804.1-2#paction" target="_blank"><img src="https://www.baidu.com/img/bd_logo1.png" alt=""></a>
```
### 4.2.2. 公式
$$ x \href{why-equal.html}{=} y^2 + 1 $$
$ x = {-b \pm \sqrt{b^2-4ac} \over 2a}. $

```html
$$ x \href{why-equal.html}{=} y^2 + 1 $$
$ x = {-b \pm \sqrt{b^2-4ac} \over 2a}. $
```

### 4.2.3. [流程图](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#7-流程图)

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```

```html
    ```flow
    st=>start: Start
    op=>operation: Your Operation
    cond=>condition: Yes or No?
    e=>end
    st->op->cond
    cond(yes)->e
    cond(no)->op
    ```
```

```html
<svg height="419.73046875" version="1.1" width="187.984375" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;" viewBox="0 0 187.984375 419.73046875" preserveAspectRatio="xMidYMid meet"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block-obj3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><marker id="raphael-marker-endblock33-obj4" markerHeight="3" markerWidth="3" orient="auto" refX="1.5" refY="1.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#raphael-marker-block-obj3" transform="rotate(180 1.5 1.5) scale(0.6,0.6)" stroke-width="1.6667" fill="black" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker></defs><rect x="0" y="0" width="52.5" height="37" r="20" rx="20" ry="20" fill="#ffffff" stroke="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" stroke-width="2" class="flowchart" id="st" transform="matrix(1,0,0,1,56.2422,24.7461)"></rect><text x="10" y="18.5" text-anchor="start" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" id="stt" class="flowchartt" font-size="15px" transform="matrix(1,0,0,1,56.2422,24.7461)" stroke-width="1"><tspan dy="5.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Start</tspan></text><rect x="0" y="0" width="121.34375" height="37" r="0" rx="0" ry="0" fill="#ffffff" stroke="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" stroke-width="2" class="flowchart" id="op" transform="matrix(1,0,0,1,21.8203,136.4922)"></rect><text x="10" y="18.5" text-anchor="start" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" id="opt" class="flowchartt" font-size="15px" transform="matrix(1,0,0,1,21.8203,136.4922)" stroke-width="1"><tspan dy="5.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Your Operation</tspan></text><path fill="#ffffff" stroke="#000000" d="M39.24609375,19.623046875L0,39.24609375L78.4921875,78.4921875L156.984375,39.24609375L78.4921875,0L0,39.24609375" stroke-width="2" id="cond" class="flowchart" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" transform="matrix(1,0,0,1,4,227.4922)"></path><text x="44.24609375" y="39.24609375" text-anchor="start" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" id="condt" class="flowchartt" font-size="15px" transform="matrix(1,0,0,1,4,227.4922)" stroke-width="1"><tspan dy="5.51171875" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Yes or No?</tspan></text><rect x="0" y="0" width="46.6875" height="37" r="20" rx="20" ry="20" fill="#ffffff" stroke="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" stroke-width="2" class="flowchart" id="e" transform="matrix(1,0,0,1,59.1484,380.7305)"></rect><text x="10" y="18.5" text-anchor="start" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" id="et" class="flowchartt" font-size="15px" transform="matrix(1,0,0,1,59.1484,380.7305)" stroke-width="1"><tspan dy="5.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">End</tspan></text><path fill="none" stroke="#000000" d="M82.4921875,61.74609375C82.4921875,61.74609375,82.4921875,119.5498448451981,82.4921875,133.49274183788748" stroke-width="2" marker-end="url(#raphael-marker-endblock33-obj4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#000000" d="M82.4921875,173.4921875C82.4921875,173.4921875,82.4921875,213.14628744125366,82.4921875,224.49262658460066" stroke-width="2" marker-end="url(#raphael-marker-endblock33-obj4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#000000" d="M82.4921875,305.984375C82.4921875,305.984375,82.4921875,363.7881260951981,82.4921875,377.7310230878875" stroke-width="2" marker-end="url(#raphael-marker-endblock33-obj4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="87.4921875" y="315.984375" text-anchor="start" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" font-size="15px" stroke-width="1"><tspan dy="5.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">yes</tspan></text><path fill="none" stroke="#000000" d="M160.984375,266.73828125C160.984375,266.73828125,185.984375,266.73828125,185.984375,266.73828125C185.984375,266.73828125,185.984375,111.4921875,185.984375,111.4921875C185.984375,111.4921875,82.4921875,111.4921875,82.4921875,111.4921875C82.4921875,111.4921875,82.4921875,126.86563205718994,82.4921875,133.50143527425826" stroke-width="2" marker-end="url(#raphael-marker-endblock33-obj4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="165.984375" y="256.73828125" text-anchor="start" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" font-size="15px" stroke-width="1"><tspan dy="5.50390625" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">no</tspan></text></svg>
```

形参|实参|含义
:-:|:-:|:-:
tag|st|标签 (可以自定义)
=>|=>|赋值
type|start|类型 (6种类型)
content|开始|描述内容 (可以自定义)
:>url|http://www.baidu.com[blank]|链接与跳转方式 兼容性很差

6种类型|含义
:-:|:-:
start|启动
end|结束
operation|程序
subroutine|子程序
condition|条件
inputoutput|输出

形参|实参|含义
:-:|:-:|:-:
->|->|连接
condition|c1|条件
(布尔值,方向)|(yes,right)|如果满足向右连接，4种方向：right ，left，up ，down 默认为：down


### 4.2.4. [时序图](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#8-序列图)
```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

```html
    ```sequence
    Alice->Bob: Hello Bob, how are you?
    Note right of Bob: Bob thinks
    Bob-->Alice: I am good thanks!
    ```
```

```html
<svg height="250" version="1.1" width="426" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block-obj1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><marker id="raphael-marker-endblock55-obj2" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#raphael-marker-block-obj1" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#000" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker></defs><rect x="10" y="20" width="60" height="36" r="0" rx="0" ry="0" fill="none" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="20" y="30" width="40" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="40" y="38" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Alice</tspan></text><rect x="10" y="194" width="60" height="36" r="0" rx="0" ry="0" fill="none" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="20" y="204" width="40" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="40" y="212" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Alice</tspan></text><path fill="none" stroke="#000000" d="M40,56L40,194" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><rect x="222" y="20" width="44" height="36" r="0" rx="0" ry="0" fill="none" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="232" y="30" width="24" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="244" y="38" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Bob</tspan></text><rect x="222" y="194" width="44" height="36" r="0" rx="0" ry="0" fill="none" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="232" y="204" width="24" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="244" y="212" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Bob</tspan></text><path fill="none" stroke="#000000" d="M244,56L244,194" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><rect x="50" y="73" width="184" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="142" y="81" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Hello Bob, how are you?</tspan></text><path fill="none" stroke="#000000" d="M40,92C40,92,207.72355937957764,92,239.00793422479182,92" stroke-width="2" marker-end="url(#raphael-marker-endblock55-obj2)" stroke-dasharray="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><rect x="264" y="112" width="90" height="26" r="0" rx="0" ry="0" fill="none" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><rect x="269" y="117" width="80" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="309" y="125" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Bob thinks</tspan></text><rect x="74" y="155" width="136" height="16" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="142" y="163" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 16px; line-height: normal; font-family: &quot;Andale Mono&quot;, monospace;" font-size="16px" font-family="Andale Mono, monospace"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">I am good thanks!</tspan></text><path fill="none" stroke="#000000" d="M244,174C244,174,76.27644062042236,174,44.992065775208175,174" stroke-width="2" marker-end="url(#raphael-marker-endblock55-obj2)" stroke-dasharray="6,2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg>
```

符号|含义
:-:|:-:
<code>-</code>|实线
<code>></code>|实心箭头
<code>--</code>|虚线
<code>>></code>|空心箭头

### 4.2.5. [甘特图](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#9-甘特图)

```gantt
    title 项目开发流程
    section 项目确定
        需求分析       :a1, 2016-06-22, 3d
        可行性报告     :after a1, 5d
        概念验证       : 5d
    section 项目实施
        概要设计      :2016-07-05  , 5d
        详细设计      :2016-07-08, 10d
        编码          :2016-07-15, 10d
        测试          :2016-07-22, 5d
    section 发布验收
        发布: 2d
        验收: 3d
```

```html
    ```gantt
    title 项目开发流程
    section 项目确定
        需求分析       :a1, 2016-06-22, 3d
        可行性报告     :after a1, 5d
        概念验证       : 5d
    section 项目实施
        概要设计      :2016-07-05  , 5d
        详细设计      :2016-07-08, 10d
        编码          :2016-07-15, 10d
        测试          :2016-07-22, 5d
    section 发布验收
        发布: 2d
        验收: 3d
    ```
```

```html
<svg id="mermaidChart2" width="100%" xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 599 316"><style type="text/css" title="mermaid-svg-internal-css"> .section { stroke: none; opacity: 0.2;} .section0 { fill: rgba(102, 102, 255, 0.490196);} .section2 { fill: rgb(255, 244, 0);} .section1, .section3 { fill: white; opacity: 0.2;} .sectionTitle0 { fill: rgb(51, 51, 51);} .sectionTitle1 { fill: rgb(51, 51, 51);} .sectionTitle2 { fill: rgb(51, 51, 51);} .sectionTitle { text-anchor: start; font-size: 11px;} .grid .tick { stroke: lightgrey; opacity: 0.3; shape-rendering: crispEdges;} .grid path { stroke-width: 0;} .today { fill: none; stroke: red; stroke-width: 2px;} .task { stroke-width: 2;} .taskText { text-anchor: middle; font-size: 11px;} .taskText0, .taskText1, .taskText2, .taskText3 { fill: white;} .task0, .task1, .task2, .task3 { fill: rgb(138, 144, 221); stroke: rgb(83, 79, 188);} .titleText { text-anchor: middle; font-size: 18px; fill: black;} </style><g></g><g class="grid" transform="translate(75, 266)"><g class="tick" transform="translate(56,0)" style="opacity: 1;"><line y2="-231" x2="0"></line><text dy="1em" y="3" x="0" fill="#000" stroke="none" font-size="10" style="text-anchor: middle;">06/27</text></g><g class="tick" transform="translate(135,0)" style="opacity: 1;"><line y2="-231" x2="0"></line><text dy="1em" y="3" x="0" fill="#000" stroke="none" font-size="10" style="text-anchor: middle;">07/04</text></g><g class="tick" transform="translate(213,0)" style="opacity: 1;"><line y2="-231" x2="0"></line><text dy="1em" y="3" x="0" fill="#000" stroke="none" font-size="10" style="text-anchor: middle;">07/11</text></g><g class="tick" transform="translate(292,0)" style="opacity: 1;"><line y2="-231" x2="0"></line><text dy="1em" y="3" x="0" fill="#000" stroke="none" font-size="10" style="text-anchor: middle;">07/18</text></g><g class="tick" transform="translate(370,0)" style="opacity: 1;"><line y2="-231" x2="0"></line><text dy="1em" y="3" x="0" fill="#000" stroke="none" font-size="10" style="text-anchor: middle;">07/25</text></g><g class="tick" transform="translate(449,0)" style="opacity: 1;"><line y2="-231" x2="0"></line><text dy="1em" y="3" x="0" fill="#000" stroke="none" font-size="10" style="text-anchor: middle;">08/01</text></g><path class="domain" d="M0,0V0H449V0"></path></g><g><rect x="0" y="48" width="561.5" height="24" class="section section0"></rect><rect x="0" y="72" width="561.5" height="24" class="section section0"></rect><rect x="0" y="96" width="561.5" height="24" class="section section0"></rect><rect x="0" y="120" width="561.5" height="24" class="section section1"></rect><rect x="0" y="144" width="561.5" height="24" class="section section1"></rect><rect x="0" y="168" width="561.5" height="24" class="section section1"></rect><rect x="0" y="192" width="561.5" height="24" class="section section1"></rect><rect x="0" y="216" width="561.5" height="24" class="section section2"></rect><rect x="0" y="240" width="561.5" height="24" class="section section2"></rect></g><g><rect rx="3" ry="3" x="75" y="50" width="34" height="20" class="task  task0"></rect><rect rx="3" ry="3" x="109" y="74" width="56" height="20" class="task  task0"></rect><rect rx="3" ry="3" x="165" y="98" width="56" height="20" class="task  task0"></rect><rect rx="3" ry="3" x="221" y="122" width="56" height="20" class="task  task1"></rect><rect rx="3" ry="3" x="255" y="146" width="112" height="20" class="task  task1"></rect><rect rx="3" ry="3" x="333" y="170" width="112" height="20" class="task  task1"></rect><rect rx="3" ry="3" x="412" y="194" width="56" height="20" class="task  task1"></rect><rect rx="3" ry="3" x="468" y="218" width="22" height="20" class="task  task2"></rect><rect rx="3" ry="3" x="490" y="242" width="34" height="20" class="task  task2"></rect><text font-size="11" x="114" y="63.5" text-height="20" class="taskTextOutsideRight taskTextOutside0 ">需求分析       </text><text font-size="11" x="170" y="87.5" text-height="20" class="taskTextOutsideRight taskTextOutside0 ">可行性报告     </text><text font-size="11" x="193" y="111.5" text-height="20" class="taskText taskText0 ">概念验证       </text><text font-size="11" x="249" y="135.5" text-height="20" class="taskText taskText1 ">概要设计      </text><text font-size="11" x="311" y="159.5" text-height="20" class="taskText taskText1 ">详细设计      </text><text font-size="11" x="389" y="183.5" text-height="20" class="taskText taskText1 ">编码          </text><text font-size="11" x="440" y="207.5" text-height="20" class="taskText taskText1 ">测试          </text><text font-size="11" x="495" y="231.5" text-height="20" class="taskTextOutsideRight taskTextOutside2 ">发布</text><text font-size="11" x="507" y="255.5" text-height="20" class="taskText taskText2 ">验收</text></g><g><text x="10" y="86" class="sectionTitle sectionTitle0">项目确定</text><text x="10" y="170" class="sectionTitle sectionTitle1">项目实施</text><text x="10" y="242" class="sectionTitle sectionTitle2">发布验收</text></g><g class="today"><line x1="7461" x2="7461" y1="25" y2="291" class="today"></line></g><text x="299.5" y="25" class="titleText">项目开发流程</text></svg>
```

## 4.3. 参考文档
* [简书](https://www.jianshu.com/p/b03a8d7b1719)
* [Markdown 常用语法笔记](https://ouweiya.gitbooks.io/markdown/)

