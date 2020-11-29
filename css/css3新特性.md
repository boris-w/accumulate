## css3 新特性

### 过渡

transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)

### 动画

animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）

### trasnform

- rotae 旋转
- translate 偏移
- scale 缩放

### 选择器

### box-shawdow

box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）

### 圆角 border-radius

### 文字属性

- 普通换行

`word-break: normal | break-all (连字符换行) | keep-all（允许单词内换行）`

- 超出省略号

`text-overflow: ellipsis`

- 禁止换行

`white-space: norwap`

- 多行超出省略号

`-webkit-line-clamp: 2; -webkit-box-orient: vertical;`

- 文字阴影

`text-shadow: 水平阴影，垂直阴影，模糊的距离，以及阴影的颜色。`

### rgba

rgb为颜色值，a为透明度

### 渐变

### filter 滤镜

### flex

**容器属性**

- flex-direction 方向 row（默认） | row-reverse | column | column-reverse
- flex-wrap 定义如何换行 nowrap（默认） | wrap | wrap-reverse;
- flex-flow flex-direction属性和flex-wrap属性的简写形式
- justify-content 主轴的对齐方式 flex-start | flex-end | center | space-between | space-around
- align-items 交叉轴对齐方式 flex-start | flex-end | center | baseline | stretch（如果项目未设置高度或设为auto，将占满整个容器的高度。）
- align-content 定义了多根轴线的对齐方式 flex-start | flex-end | center | space-between | space-around | stretch;

**项目属性**

- order 定义项目顺序
- flex-grow 放大比例 默认0
- flex-shrink 定义项目是否缩小 默认1 为0就不会缩小
- flex-basis 项目占主轴空间 默认auto
- flex flex-grow, flex-shrink 和 flex-basis 的缩写 默认值 0 1 auto
- align-self 单个项目有与其他项目不一样的对齐方式 默认 auto


### 媒体查询

监听屏幕变化 在不同尺寸的时候显示不同的样式

``` css

@media screen and (max-width: 960px) {
    body {
        background-color: darkgoldenrod;
    }
}
@media screen and (max-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

```