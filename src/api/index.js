/**
 * api管理
 */
import request from '@/utils/request'
export default {
  // 获取歌曲url
  getSongUrl (id) {
    return request({
      url: '/song/url',
      method: 'get',
      data: { id }
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
  getPersonalized  (limit) {
    return request({
      url: '/personalized',
      method: 'get',
      data: { limit }
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
  },
  // 最新专辑
  getnewest () {
    return request({
      url: '/album/newest',
      method: 'get',
      data: {}
    })
  },
  // 获取专辑内容
  getAlbum (id) {
    return request({
      url: '/album',
      method: 'get',
      data: { id }
    })
  },
  // 推荐新音乐
  getNewSong () {
    return request({
      url: '/personalized/newsong',
      method: 'get',
      data: {}
    })
  },
  // 音乐详情
  getSongDetail (ids) {
    return request({
      url: '/song/detail',
      method: 'get',
      data: { ids }
    })
  },
  // 排行
  getRankDetail () {
    return request({
      url: '/toplist/detail',
      method: 'get'
    })
  },
  // 网友精选
  getTopPlaylist () {
    return request({
      url: '/top/playlist?limit=10',
      method: 'get'
    })
  }
}
