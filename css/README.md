# css 相关知识点

## [盒模型](盒模型.md)

## [css3 新特性](css3新特性.md)

## [bfc](bfc.md)

## [position 属性](position.md)

## [1px](1px.md)

## [flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 行内元素 / 块级元素

- 行内元素

与其他行内元素并排
不能设置宽高，默认的宽度就是文字的宽度

- 块级元素

霸占一行，不能与其他任何元素并列。
能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%。

> 用 `display: inline` | `block` | `inline-block` 改变

## 可替换元素 / 非可替换元素

**定义** 

元素显示内容由标签属性决定，内容不受`css`影响，
典型的可替换元素有 `<iframe>` `<video>` `<embed>` `<img>` `<textarea>`，还有一些元素仅在特定情况下被作为可替换元素处理，比如 `<input> `。

## 层叠上下文

仅在定位元素（定义了position属性，且属性值为非static值的元素）上有效果。

![层叠顺序](../assets/img/层叠顺序.png)

## 两列布局

- 采用position：absollute; 并设置margin-left的值。
- 采用float;并设置overflow:auto;(隐藏溢出的内容)　`bfc`
- flex

## 重流 / 重绘

- 重流（`reflow`）

当元素的尺寸、大小、位置发生变化的时候会重新计算元素的属性并渲染dom树，重新排版。

- 重绘（`repaint`）

当元素外观（颜色、背景等）发生改变的时候，浏览器重新把外观绘制出来。

## 选择器优先级

!important > 行内样式> ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

> 针对于同一级别

内联样式表的权值为 1000

ID 选择器的权值为 100

Class 类选择器的权值为 10

HTML 标签选择器的权值为 1
## css 预处理器 scss

## 移动端 0.5px 方案

## rem

`html` 的 `font-size` * 元素的`rem`属性 = 元素的属性 `px`

## 伪类和伪元素区别

- 伪类用于向某些选择器添加特殊的效果。
- 伪元素用于将特殊的效果添加到某些选择器。