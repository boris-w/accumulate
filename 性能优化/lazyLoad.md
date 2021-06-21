# LazyLoad（懒加载）

懒加载主要是对图片或者列表进行，当图片出现在视图窗口中再去加载相应的图片，目前比较常见的方案是 window.scroll ，Intersection Observer（观察元素，不兼容 ie ）

## window.scroll

``` HTML
<!DOCTYPE html>
<html>
<head>
	<title>lazy-load-demo</title>
	<style type="text/css">
		html, body, .lazy-load-box {
			height: 100%;
			margin: 0;
			padding: 0
		}
		.lazy-load-box {
			display: flex;
			flex-direction: column;
			overflow-y: auto;
		}
		.lazy-load-box img {
			flex-shrink: 0;
			height: 500px;
			border: 1px solid green;
		}
	</style>
</head>
<body>
	<div class="lazy-load-box" id="lazy-load-box">
		<img data-src="https://upload-images.jianshu.io/upload_images/4060631-17210430f2cbf15c.png?imageMogr2/auto-orient/strip|imageView2/2/w/742/format/webp" />
		<img data-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=744dfb4f8f91db4feb2b24d72c7f0fcd" />
		<img data-src="	https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F04%2F20141004172507_J8Mty.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=785f53dcba9c632fcc99c85dddd1c6ca" />
		<img data-src="	https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=9970116f8f7e1272d7953835ed373a92" />
		<img data-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201307%2F03%2F20130703071814_c2Jwj.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=75af03653560d78c4bb71eaf50d0e814" />
	</div>
</body>
<script type="text/javascript">
	const box = document.getElementById('lazy-load-box')
	const imgList = box.children
	box.onscroll = throttle(loadImg, 1000)
	throttle(loadImg, 1000)()
	const seeHeight = document.documentElement.clientHeight
	function loadImg() {
		([...imgList]).forEach(v => {
            // 计算是否出现在窗口中
			if (box.scrollTop + seeHeight > v.offsetTop) {
				v.src = v.getAttribute('data-src')
			}
		})
	}

	// 节流
	function throttle(fn, wait) {
		let timer = null
		return function () {
			let context = this
			let args = arguments
			if (!timer) {
				timer = setTimeout(() => {
			        fn.apply(context, args)
			        clearTimeout(timer)
			        timer = null
			  	}, wait)
			}
		}
	}
</script>
</html>
```

## Intersection Observer

``` html
<!DOCTYPE html>
<html>
<head>
	<title>lazy-load-demo</title>
	<style type="text/css">
		html, body, .lazy-load-box {
			height: 100%;
			margin: 0;
			padding: 0
		}
		.lazy-load-box {
			display: flex;
			flex-direction: column;
			overflow-y: auto;
		}
		.lazy-load-box img {
			flex-shrink: 0;
			height: 500px;
			border: 1px solid green;
		}
	</style>
</head>
<body>
	<div class="lazy-load-box" id="lazy-load-box">
		<img data-src="https://upload-images.jianshu.io/upload_images/4060631-17210430f2cbf15c.png?imageMogr2/auto-orient/strip|imageView2/2/w/742/format/webp" />
		<img data-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=744dfb4f8f91db4feb2b24d72c7f0fcd" />
		<img data-src="	https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F04%2F20141004172507_J8Mty.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=785f53dcba9c632fcc99c85dddd1c6ca" />
		<img data-src="	https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=9970116f8f7e1272d7953835ed373a92" />
		<img data-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201307%2F03%2F20130703071814_c2Jwj.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626439524&t=75af03653560d78c4bb71eaf50d0e814" />
	</div>
</body>
<script type="text/javascript">
	const box = document.getElementById('lazy-load-box')
	const imgList = box.children
	let first = true
	const seeHeight = document.documentElement.clientHeight
	let imgLen = imgList.length
	const io = new IntersectionObserver(arr => {
		// 第一次会初始化判断需要加载的图片
		if (first) {
			arr.forEach(({ target }) => {
				if (box.scrollTop + seeHeight > target.offsetTop) {
					target.src = target.getAttribute('data-src')
					io.unobserve(target)
					imgLen--
				}
			})
			first = false
		} else {
			arr.forEach(({ target }) => {
				target.src = target.getAttribute('data-src')
				io.unobserve(target)
				imgLen--
			})
		}
		// 所有图片加载完成关闭观察器
		if (imgLen === 0) {
			io.disconnect()
		}
	}, {
		threshold: [0]
	});

	// 初始化观察器
	([...imgList]).forEach(v => {
		io.observe(v)
	})
</script>
</html>
```