# Component

## 各种 DOM 距离

- e.pageY：鼠标距离文档顶部的距离
- e.clientY：鼠标距离可视区域顶部的距离
- e.offsetY：鼠标距离触发事件元素顶部的距离
- e.screenY：鼠标距离屏幕顶部的距离
- window.scrollY：页面滚动的距离，也叫 window.pageYOffset，等同于 document.documentElement.scrollTop
- element.scrollTop：元素滚动的距离
- element.clientTop：上 border 高度
- element.offsetTop：相对有 position 的父元素的内容顶部的距离，可以递归累加，加上 clientTop，算出到文档顶部的距离
- clientHeight：内容高度，不包括 border
- offsetHeight：包含 border 的高度
- scrollHeight：滚动区域的高度，不包括 border
- window.innerHeight：窗口的高度
- element.getBoundingClientRect：拿到 width、height、top、left 属性，其中 top、left 是元素距离可视区域的距离，width、 height 绝大多数情况下等同 offsetHeight、offsetWidth，但旋转之后就不一样了，拿到的是包围盒的宽高

- 窗口的滚动距离用 window.scrollY 获取，
- 元素内容的滚动距离用 element.scrollTop 获取
- window.scrollY + window.innerHeight === document.documentElement.scrollHeight
- document.documentElement.scrollTop + window.innerHeihgt === document.documentElement.scrollHeight

## calendar

- dayjs() 获取当前日期和时间
- daysInMonth 获取当月有多少天
- date() 获取当月几号
- day() 获取星期几

- 支持 `scss`，需安装 `sass-embedded` npm 包
