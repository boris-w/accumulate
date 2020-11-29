## position

- absolute

绝对定位，相对于static之外的第一个父元素定位

- fixed

生成绝对定位，相对于浏览器窗口定位

- relative

相对定位，相对于文档正常位置定位

- static

默认值 正常文档流位置

- inherit

从父元素继承 position 属性

- sticky

粘性定位，监听滑动，在滑动过程中，某个元素距离父元素的距离达到设置的距离的时候，就相当于fixed定位一样，固定在当前位置

**注意： **

1. 必须设置top、bottom、left、right4个值之一， 否则只会处于相当定位位置

2. 父元素不能 overflow:hidden 或者 overflow:auto 属性。 
