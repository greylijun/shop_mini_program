const app = getApp();
const http = require('../../utils/http.js');

Page({
    data: {
        imgUrls: [],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        current: 'like',
        toView: 'green',
        scrollTop: 100,
        scrollLeft: 0,
        scrollImages: []
    },
    //滚动条滚到顶部的时候触发
    upper: function (e) {
        console.log(e);
        console.log(11);
    },
    //滚动条滚到底部的时候触发
    lower: function (e) {
        console.log(e);
        console.log(222);
    },
    //滚动条滚动后触发
    scroll: function (e) {
        console.log(e);
        console.log(333);
    },
    //点击按钮切换到下一个view
    tap: function (e) {
        console.log(444);
        for (var i = 0; i < this.scrollImages.length; ++i) {
            for (let num = 0; num < this.scrollImages[i].length; ++i) {
                if (order[i] === this.data.toView) {
                    this.setData({
                        toView: order[i + 1]
                    });
                    break
                }
            }
        }
    },
    //通过设置滚动条位置实现画面滚动
    tapMove: function (e) {
        this.setData({
            scrollLeft: this.data.scrollLeft + 10
        })
    },
    onLoad: function () {
        this.loadSliderData();
        this.loadScrollData();
    },
    // 载入slider数据
    loadSliderData: function (e) {
        let vm = this;
        http.get({
            url: '/home/slider',
            success: function (res) {
                vm.setData({
                    imgUrls: res
                })
            },
            fail: function (res) {
                console.log(res.message);
            }
        })
    },
    // 载入scroll数据
    loadScrollData: function (e) {
        let vm = this;
        http.get({
            url: '/home/type_scroll',
            success: function (res) {
                vm.setData({
                    scrollImages: res
                })
            },
            fail: function (res) {
                console.log(res.message);
            }
        })
    }
});
