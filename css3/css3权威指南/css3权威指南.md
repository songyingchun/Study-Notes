# 第19章 选择器

## 属性选择器
css2
[att=val]{}
css3
[att*=val]：包含val
[att^=val]: 开头为val
[att$=val]: 结尾为val

### 伪类选择器
a:link
a:visited
a:hover
a:active

### 伪元素选择器
:first-line
:first-letter
:before
:after

### root、not、empty、target
:root
:not
```css
:not(1)
```
:empty
target

### :fist-child、last-child、nth-last-child
1. 
:fist-child
:last-child
:nth-last-child

2. 
:nth-child(n)

3. 
:nth-child(even)偶数
:nth-child(odd)奇数
:nth-last-child(even)偶数
:nth-last-child(odd)奇数

### nth-of-type、nth-last-of-type
:nth-of-type 选择该种元素
:nth-last-of-type 反方向选择该种元素

### 循环样式
:nth-child(4n+1)

### only-child选择器
only-child 相当于:nth-child(1):nth-last-child(1) 只有一个子元素

## UI元素状态伪类选择器







