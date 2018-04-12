# 第1章 JavaScript简介
一个完整的JavaScript由三部分组成：核心（ECMAScript）、文档对象模型（DOM）、浏览对象模型（BOM）。

ECMA-262规定了语法、类型、语句、关键字、保留字、操作符、对象

文档对象模型是针对 XML 但经过扩展用于 HTML 的应用程序编程接口。

DOM1 级的目标主要是映射文档的结构。

DOM2 的基础上又扩充了（DHTML 一直都支持的）鼠标和用户界面事件、范围、遍历（迭代 DOM文档的方法）等细分模块：
> * DOM 视图（DOM Views）：定义了跟踪不同文档（例如，应用 CSS 之前和之后的文档）视图的接口；
> * DOM 事件（DOM Events）：定义了事件和事件处理的接口；
> * (DOM 样式（DOM Style）：定义了基于 CSS 为元素应用样式的接口； 
> * DOM 遍历和范围（DOM Traversal and Range）：定义了遍历和操作文档树的接口。

浏览器对BOM的扩展:
> * 弹出新浏览器窗口的功能；
> * 移动、缩放和关闭浏览器窗口的功能；
> * 提供浏览器详细信息的 navigator 对象；
> * 提供浏览器所加载页面的详细信息的 location 对象；
> * 提供用户显示器分辨率详细信息的 screen 对象；
> * 对 cookies 的支持；
> * 对 cookies 的支持；
> * 像 XMLHttpRequest 和 IE的 ActiveXObject 这样的自定义对象。

**小结**
JavaScript 是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：
> * ECMAScript，由 ECMA-262 定义，提供核心语言功能；
> * 文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
> * 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。

