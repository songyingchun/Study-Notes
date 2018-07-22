# 第19章 选择器

## 属性选择器
css2
[att=val]{}
css3
[att*=val]：包含val
[att^=val]: 开头为val
[att$=val]: 结尾为val

## 结构性伪类选择器
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

:hover
:active
:focus
:enabled
:disabled
:read-only 只读状态
:read-write 非只读状态
:checked 表单radio单选框或checkbox复选框片于选择状态
::selection 当前元素被鼠标选中的状态
:default 打开页面默认处于选择状态的单选框或复选框
:indeterminate 没有被选中的单选框
:invalid required、pattern属性检查或元素内容不符合规定
:valid required、pattern属性检查或元素内容符合规定
:required 允许使用required属性并指定该属性
:optional 允许使用required属性并未指定该属性
:in-range 有效值被限定在一段范围之内，实际值在范围之内
:out-of-range 有效值被限定在一段范围之内，实际值在范围之外

## 通用兄弟元素选择器
~

# 





