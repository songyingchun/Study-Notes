# 编码技巧
## 尽量减少代码重复
```css
{
    padding: 6px 16px;
    border: 1px solid #446d88;
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: 4px;
    box-shadow: 0 1px 5px gray;
    color: white;
    text-shadow: 0 -1px 1px #335166;
    font-size: 20px;
    line-height: 30px;
}
```
改为

```css
padding: .3em .8em;
border: 1px solid #446d88;
background: #58a linear-gradient(#77a0bb, #58a);
border-radius: .2em;
box-shadow: 0 .05em .25em gray;
color: white;
text-shadow: 0 -.05em .05em #335166;
font-size: 125%;
line-height: 1.5;
```

#### 推荐使用HSLA而不是RGBA来产生半透明的白色
------
### 1.代码易维护 vs. 代码量少
### 2.currentColor是有史以来的第一个变量
```css
hr {
    height: .5em;
    background: currentColor;
}
```
### 3.继承 inherit
------

# 响应式网页设计
* 使用百分比长度来取代固定长度。也应该尝试使用与视口相关的单位（ vw 、 vh 、 vmin 和 vmax ）。
* 

