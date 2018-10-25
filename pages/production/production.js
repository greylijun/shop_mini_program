// pages/production/production.js
const http = require('../../utils/http.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        inputShowed: false,
        inputVal: "",
        searchResult: [],
        // 商品列表
        productionList: []
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            searchResult: [],
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: "",
            searchResult: []
        });
    },
    inputTyping: function (e) {
        let vm = this;
        http.get({
            url: '/list/search',
            data: {
                name: e.detail.value,
            },
            success: function (res) {
                vm.setData({
                    searchResult: res
                });
            },
            fail: function (res) {
                console.log(res.message);
            }
        })
    },
    // 点击图片查看详情
    showDetail(e) {
        let params = e.currentTarget.dataset;
        http.get({
            url: '/good/' + params.id,
            success: function (res) {
                if (res.data) {
                    wx.navigateTo({
                        url: '../detail/detail?params=' + JSON.stringify(res)
                    });
                    wx.setNavigationBarTitle({
                        title: params.name
                    });
                } else {
                    wx.showModal({
                        content: '当前商品不存在详情页面',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            }
                        }
                    });
                }
            },
            fail: function (res) {
                console.log(res.message);
            }
        });

    },
    // 载入商品列表
    loadGoodLists() {
        let vm = this;
        http.get({
            url: '/good/lists',
            success: function (res) {
                vm.setData({
                    productionList: res
                });
            },
            fail: function (res) {
                console.log(res.message);
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadGoodLists();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})