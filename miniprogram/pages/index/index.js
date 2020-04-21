// miniprogram/pages/index/index.js
import { promisifyAll } from 'miniprogram-api-promise';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    originalPath: '',
    successToast: false
  },

  upload: function () {
    const wxp = {}
    promisifyAll(wx, wxp)
    wxp
      // 选择图片
      .chooseImage({ count: 1 })
      // 图片上传云存储
      .then(res=>{
        const cloudFile = Math.floor(Math.random() * 1000000) + /\.[^\.]+$/.exec(res.tempFilePaths[0])
        return wx.cloud.uploadFile({
          cloudPath: `original-images/${cloudFile}`,
          filePath: res.tempFilePaths[0]
        })
      })
      // 图片显示
      .then(res => {
        this.setData({
          successToast: true,
          originalPath: res.fileID
        })
      })
      .catch(err => {
        console.error(err)
      })

  },

  display() {
    this.setData({
      successToast: true
    })
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