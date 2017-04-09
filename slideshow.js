// 给按钮绑定事件
var bindEventSlide = function() {
    var selector = '.slide-button'
    bindAll(selector, 'click', function(event){
        // log('click next')
        // 找到按钮
        var button = event.target
        // 求出下一个 index
        var index = nextIndex(button)
        // 切换到下一张图片和下一个小圆点
        showImage(index)
        // log('show before', index)
        showIndicator(index)
    })
}

var nextIndex = function(button) {
    // 找到 slideshow div
    var slide = button.parentElement
    // 得到图片总数和当前图片下标
    var numberOfImgs = parseInt(slide.dataset.imgs)
    // 当前显示的图片的 index
    var activeIndex = parseInt(slide.dataset.active)
    // log('click slide' )
    // 求出下一张图片的 id
    var buttonIndex = parseInt(button.dataset.next)
    var index = (numberOfImgs + activeIndex + buttonIndex) % numberOfImgs
    // 设置父节点的 data-active
    slide.dataset.active = index
    return index
}

var showImage = function(index) {
    // log('show image', index)
    // 得到下一张图片的选择器
    var nextSelector = '#id-image-' + String(index)
    // 删除当前图片的 class 给下一张图片加上 class
    var className = 'image-active'
    removeClassAll(className)
    var img = e(nextSelector)
    img.classList.add(className)
}

var showIndicator = function(index) {
    // log('show indi', index)
    // 得到下一个小圆点的选择器
    var nextSelector = '#id-indicator-' + String(index)
    // 删除当前小圆点的 class 给下一个小圆点加上 class
    var className = 'indicator-white'
    removeClassAll(className)
    var indi = e(nextSelector)
    indi.classList.add(className)
}

var clickIndicator = function() {
    bindAll(".slide-indicator", 'click', function(event) {
        removeClassAll('indicator-white')
        event.target.classList.add('indicator-white')
        removeClassAll('image-active')
        e(event.target.dataset.key).classList.add('image-active')
        // log('indicator click')
    })
}

var timer = function(){
    // 组合选择器
    var button = e('.slide-button.slide-button-right')
    setInterval(function(){
        // 调用 click() 函数来模拟点击
        button.click()
    }, 2000)
}

var __main = function() {
    clickIndicator()
    bindEventSlide()
    timer()
}

__main()
