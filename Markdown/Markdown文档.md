# 1. 安装Markdown主题
## 1.1. Markdonw Theme Kit
* 调试->安装其他调试器->输入Markdonw Theme Kit
* 文件->首选项->颜色主题

## 1.2. vscode-markdown-css
* 下载[vscode-markdown-css](https://github.com/raycon/vscode-markdown-css)
* 修改文件：文件->首选项->设置->markdown
* "markdown.styles": [""]

# 2. 生成左侧导航栏 [i5ting](https://github.com/i5ting/tocmd.npm)
## 2.1. 安装
```html
npm install -g i5ting_toc
```
## 2.2. 生成导航栏
```html
i5ting_toc -f sample.md -o
```

# 3. （在线）编辑器
* [CMD　Markdown编辑器](https://www.zybuluo.com/mdeditor)

# 4. 语法
## 4.1. 常用部分
### 4.1.1. 标题  
#### 4.1.1.1. 段落标题
```html
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
#### 4.1.1.2. 分级标题
```html
AAA
===
BBB
---
```
AAA
===
BBB
---
### 4.1.2. 强调
#### 4.1.2.1. 斜体
```html
*
_
```
*1*
_1_
#### 4.1.2.2. 加粗
```html
**
```
**1**
#### 4.1.2.3. 删除线
```html
~~
```
~~1~~
### 4.1.3. 代码
#### 4.1.3.1. 代码块标记
```html
    ```
```
#### 4.1.3.2. 代码块缩进表示法
    123
#### 4.1.3.3. 语法高亮显示
```html
    ```javascript
    ```
```
```javascript
var syc = "syc";
```
#### 4.1.3.4. 内联代码块
    `
`1`
### 4.1.4. 表格
#### 4.1.4.1. 表格
```html
|     a     |        b        |      c       |
|:---------:|:--------------- | ------------:|
|   居中    | 左对齐           |       右对齐 |
| ========= | =============== | ============ |
```

|     a     |        b        |      c       |
|:---------:|:--------------- | ------------:|
|   居中    | 左对齐           |    右对齐 |
| ========= | =============== | ============ |

#### 简约写法
```html
a  | b | c  
:-:|:- |-:
    居中    |     左对齐      |   右对齐    
============|=================|=============
```
a  | b | c  
:-:|:-|-:
居中|左对齐|右对齐
===|===|===

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

#### html表格
* [表格地址](http://www.tablesgenerator.com/markdown_tables)

### 链接
#### 内链式
```html
    [百度1](http://www.baidu.com/"百度一下"){:target="_blank"}   
```

[百度1](http://www.baidu.com/){:target="_blank"}
{:target="_blank"}兼容性一般

#### 引用式
```html
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].
  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
```
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

#### 邮箱链接
```html
<xxx@outlook.com>
```
<419973879@qq.com>

### 图片
#### 内链式
```html
![name](./01.png '描述')
```
![name](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png '描述')

#### 引用式
![name][01]
[01]: https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png '描述'

#### 图片带有链接
```html
[![name](./01.png '百度')](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png){:target="_blank"}
```

## 4.2. 参考文档
* [简书](https://www.jianshu.com/p/b03a8d7b1719)
* [Markdown 常用语法笔记](https://ouweiya.gitbooks.io/markdown/)

