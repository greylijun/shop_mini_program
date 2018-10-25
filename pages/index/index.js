// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        type: [
            {
                class: 'production',
                title: '产品展示',
                url: '../production/production',
            },
            {
                class: 'daily',
                title: '今日特惠',
                url: '../daily/daily'
            },
            {
                class: 'new',
                title: '爆款新品',
                url: '../new/new'
            },
            {
                class: 'man',
                title: '型男必备',
                url: '../man/man'
            },
            {
                class: 'bolon',
                title: '暴龙专场',
                url: '../bolon/bolon'
            },
            {
                class: 'contact',
                title: '联系我们',
                url: '../contact/contact'
            },
        ]
    },
    // 页面跳转
    bindNavClick: function (e) {
        let target = this.data.type[e.currentTarget.dataset.key];
        wx.navigateTo({
            url: target.url
        });
        wx.setNavigationBarTitle({
            title: target.title
        });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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