// components/toast/toast.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'success_no_circle'
    },
    showToast: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal)  {
        // 监听属性变化
        if (newVal) {
          this.show()
        }
      }
    },
    duration: {
      type: Number,
      value: 2000
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hideToast: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      setTimeout(() => {
        this.setData({
          hideToast: true
        });
        setTimeout(() => {
          this.setData({
            showToast: false,
            hideToast: false,
          });
        }, 300);
      }, this.properties.duration);
    }
  }
})
