## 移动端 1px 像素问题及解决办法

### 为什么会出现1px问题？

我们肉眼见的1px 是设备的`物理像素`，我们开发的时候代码里面设置的1px是`逻辑像素`，物理像素和逻辑像素之间存在一个比例关系，`devicePixelRatio`为2就表示物理像素 ： 逻辑像素 = 2（devicePixelRatio），就是css里面设置0.5px的时候我们肉眼看的到才是1px

### 解决方案

1、 媒体查询，针对不同的像素比设置不同的大小
  - 缺点： 兼容性不好

2、 border-image
  - 缺点： 因为是图片，所以需要制作，并且圆角容易模糊

3、 background-image 设置渐变
  - 缺点：无法实现圆角

4、 box-shadow
  - 缺点：颜色不好控制

5、 viewport + rem 读取window.devicePixelRatio的值，初始化设置meta标签scale属性
  - 缺点：老项目比较麻烦

6、 伪类 + transform （推荐）
