/**
 * api管理
 */
import request from '@/utils/request'
export default {
  // 获取歌曲url
  getSongUrl (params) {
    return request({
      url: '/song/url',
      method: 'get',
      data: params
    })
  },
  // 搜索歌曲
  searchMusic (keywords) {
    return request({
      url: '/search',
      method: 'get',
      data: { keywords }
    })
  },
  // 默认搜索关键词
  searchDefault () {
    return request({
      url: '/search/default',
      method: 'get',
      data: {}
    })
  },
  // 热搜列表 简略
  searchHot () {
    return request({
      url: '/search/hot',
      method: 'get',
      data: {}
    })
  },
  searchHotDetail () {
    return request({
      url: '/search/hot/detail',
      method: 'get',
      data: {}
    })
  },
  // banner
  getBanner () {
    return request({
      url: '/banner',
      method: 'get',
      data: { type: 2 }
    })
  },
  // 推荐歌单
  getPersonalized  (params) {
    return request({
      url: '/personalized',
      method: 'get',
      data: params
    })
  },
  // 获取歌单详情
  getPlaylistDetail (id) {
    return request({
      url: '/playlist/detail',
      method: 'get',
      data: { id }
    })
  },
  // 获取精品歌单标签列表
  getPlay () {
    return request({
      url: '/playlist/highquality/tags',
      method: 'get',
      data: {}
    })
  }
}
