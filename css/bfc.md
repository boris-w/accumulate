## BFC

块级格式化上下文，是一个独立的区域，让处于bfc内部的元素于外部的元素相互隔离，互不影响。

### 触发条件

- 根元素
- position 为 fixed / absolute
- float 浮动
- overflow 不为 visible
- display 为 inline-block / table

### 规则

- 属于同一个bfc的两个相邻box垂直排列
- 属于同一个bfc的两个相邻box的margin 会发生重叠
- BFC 中子元素的margin box 的左边，与包含块BFC 的左边接触。
- BFC 的区域不会与float的元素重叠
- 计算 BFC 高度时，浮动子元素也会参与计算
- 文字不会被浮动覆盖，而是环绕

## 场景

- 防止margin 重叠
- 清除浮动
- 自适应两栏布局
- 阻止元素被浮动元素覆盖
- 高度坍塌（清除子元素浮动父元素高度的影响）