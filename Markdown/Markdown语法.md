# [Markdown](http://www.markdown.cn/)：成为一种适用于网络的书写语言。

## 特殊字符自动转换

&copy;

AT&T、AT&amp;T

4 < 5、4 &lt; 5

---
## 区块元素

### 1、段落和换行：
若某一行只包含空格和制表符，则该行也会被视为空行

---
### 2、标题：

# 这是 H1
## 这是 H2
### 这是 H3
#### 这是 H4
##### 这是 H5
###### 这是 H6
---
### 3、区块引用Blockquotes：>
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
---
### 4、无序列表：* + -、有序列表：句点
*   Red
*   Green
*   Blue

+   Red
+   Green
+   Blue

-   Red
-   Green
-   Blue

1.  Bird
2.  McHale
3.  Parish
---
### 5、代码区块：缩进 4 个空格或是 1 个制表符。在代码区块里面， & 、 < 和 > 会自动转成 HTML 实体
这是一个普通段落：&, <, >, &copy; , &amp;

    这是一个代码区块。&, <, >, &copy; &amp;
---
### 6、分隔线：在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。
* * *
***
*****
- - -
--------------------------------------


## 区段元素
---
### 链接：行内式和参考式两种形式。[方括号]来标记。
#### 行内：[文字](链接/ "标题")
    
    This is [an example](http://example.com/ "Title") inline link.

#### 参考式的链接：[][]

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

#### 链接名称：

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"

    <p>I get 10 times more traffic from <a href="http://google.com/" title="Google">Google</a> than from
<a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>

### 强调：*、-
*single asterisks*

_single asterisks_

    <em>single asterisks</em>

**double asterisks**

__double underscores__

    <strong>single asterisks</strong>

### 代码：`

Please don't use any `<blink>` tags.


### 图片：![]()
行内：

![Alt text](/path/to/img.jpg)

参考式：

![Alt text][id]

[id]: url/to/image  "Optional title attribute"

   


