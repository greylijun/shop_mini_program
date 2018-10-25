let host = 'http://127.0.0.1:88/api/phone';

function post(req) {
    wx.request({
        url: host + req.url, //仅为示例，并非真实的接口地址
        method: 'POST',
        data: req.data,
        header: {
            'content-type': 'application/json', // 默认值
            'X-CSRF-TOKEN': wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
        },
        success: function (res) {
            if (res.data.message) {
                wx.showModal({
                    content: res.data.message,
                    showCancel: false,
                });
            } else {
                req.success(res.data);
            }
        },
        fail: function (res) {
            req.fail(res.data);
        }
    });
}

function get(req) {
    wx.request({
        url: host + req.url, //仅为示例，并非真实的接口地址
        method: 'GET',
        data: req.data,
        header: {
            'content-type': 'application/json', // 默认值
            'X-CSRF-TOKEN': wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
        },
        success: function (res) {
            req.success(res.data);

        },
        fail: function (res) {
            req.fail(res.data);
        }
    });
}

module.exports = {
    post: post,
    get: get
};