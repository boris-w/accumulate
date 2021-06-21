# 常用 loader 

- `sass-loader` css 预处理器，识别 scss 转化成 css

- `css-loader` css-loader会处理 import / require（） @import / url 引入的内容，转化成一个 css 数组

- `style-loader` 创建一个 style 标签，将 css-loader 解析出的 css 数组 放入 style 里面

- `postcss-loader` 补充 css 样式各种浏览器前缀

- `babel-loader` 将 es6 语法转成 es5 语法

- `ts-loader` 将 typescript 代码转成 js 代码

- `file-loader` 用于处理文件类型资源，如jpg，png等图片。返回值为publicPath为准。

- `url-loader` 用于处理文件类型资源，如jpg，png等图片。设置限制大小，如果图片小于限制大小用 url-loader 转成base64， 如果图片大于限制，则用 file-loader 打包成资源文件用路径引入

- `vue-loader` 编译 .vue 文件

- `eslint-loader` 用于检查代码是否符合规范，是否存在语法错误