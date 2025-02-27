export default {
  // 此处编写的就是vue组件实例的配置项，通过一定语法，可以直接混入到组件内部
  // data methods computed 生命周期函数等都可以混入到组件内部
  // 注意：1|如果此处和组件内提供了同名的data或methods，组件内优先级更高
  // 2、如果编写了生命周期函数，则mixins中的生命周期函数和页面的生命周期函数，会用数组管理，统一执行
  data () {
    return {
      title: 'biaoti'
    }
  },
  methods: {
    sayHi () {
      console.log(111)
    },
    loginConfirm () {
      if (!this.$store.getters.token) {
        // 确认框
        // console.log('queren')
        this.$dialog.confirm({ title: '温馨提示', message: '此时需要先登录才能继续操作哦', confirmButtonText: '去登录', cancelButtonText: '再逛逛' })
          // 点击确认
          .then(() => {
            // 如果希望跳转到登录页面之后，登陆成功就跳转到登陆之前的页面，需要在跳转的时候携带参数（当前的路径地址）
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          // 点击取消
          .catch(() => { })
        return true
      }
      return false
    }
  }
}
