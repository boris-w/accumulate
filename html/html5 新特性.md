## 语义化标签

- nav 导航
- header 头部
- footer 尾部
- aside 侧边栏
- section 文档中节区域
- article 独立的内容区域

## 音、视频标签

- audio 音频
- video 视频

## 数据存储

- localStorage

没有时间限制的存储、存储在本地

- sessionStorage

关闭浏览器会清除

## 画布

- canvas

## 增强型表单

html5修改了一些新的input输入特性，更好的进行输入控制和验证

type

- color 颜色选择器
- date 日期选择器
- datetime 日期时间选择器
- email email输入
- month 月份选择
- number 数字输入
- range 范围选择条
- search 搜索
- tel 电话
- time 时间选择
- url url输入
- week 选择周、年

表单属性

- placehodler
- required
- pattern 验证表单输入
- max、min
- widht、height 用于image类型的input的图像高度和宽度
- autofocus boolean属性，是否页面加载时自动获得焦点
- multiple boolean属性，是否多选

## svg

矢量图

## 地理定位

navigator.geolocation.getCurrentPosition

## 拖放API

``` html
<div draggable="true"></div>
```

- ondragstart	拖动开始
- ondrag 拖动中
- ondragenter	拖动中（进入状态）
- ondragover 拖动中（悬停状态）
- ondragleave 拖动中（离开状态）
- ondrop 拖动结束（释放）
- ondragend 拖动结束

`e.dataTransfer` 用于拖动中数据传递

## web worker

- 主线程之外的线程
- 不能操作dom

## websocket

常用于消息通信

长链接

- 全双工通信
