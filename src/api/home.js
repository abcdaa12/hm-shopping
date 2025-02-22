import request from '@/utils/request'

// 获取首页数据
// 封装接口
export const getHomeData = () => {
  return request.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
