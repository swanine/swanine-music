/**
 * actions 用于保存触发mutations中保存的方法的方法
 *
 */
import api from '../api/index'
import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_IS_PLAYING,
  SET_SONGS_DETAIL,
  SET_IS_SHOW_SONGLIST,
  DEL_SONGS,
  SET_CURRENT_INDEX
} from './mutations-type'

export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setMiniPlayer ({ commit }, flag) {
    commit(SET_MINI_PLAYER, flag)
  },
  setIsPlaying ({ commit }, flag) {
    commit(SET_IS_PLAYING, flag)
  },
  setIsShowSongList ({ commit }, flag) {
    commit(SET_IS_SHOW_SONGLIST, flag)
  },
  async setSongsDetail ({ commit }, ids) {
    // const result = await api.getSongDetail(ids)
    // // eslint-disable-next-line prefer-const
    // let list = result.songs
    // console.log(result, list)
    // list.forEach(element => {
    //   // eslint-disable-next-line prefer-const
    //   let obj = {}
    //   obj.name = element.name
    //   let singer = ''
    //   element.ar.forEach((item, index) => {
    //     if (index === 0) {
    //       singer = item.name
    //     } else {
    //       singer += '-' + item.name
    //     }
    //   })
    //   obj.singer = singer
    //   // eslint-disable-next-line dot-notation
    //   obj.picUrl = element['al'].picUrl
    //   list.push(obj)
    // })
    // eslint-disable-next-line prefer-const
    let result = await api.getSongDetail(ids)
    // eslint-disable-next-line prefer-const
    let urls = await api.getSongUrl(ids)
    // eslint-disable-next-line prefer-const
    let list = []
    result.songs.forEach(function (value) {
      // eslint-disable-next-line prefer-const
      let music = {
        id: value.id,
        name: value.name
      }
      for (let j = 0; j < urls.length; j++) {
        // eslint-disable-next-line prefer-const
        let item = urls[j]
        if (value.id === item.id) {
          music.url = item.url
          break
        }
      }
      let singer = ''
      // eslint-disable-next-line dot-notation
      value['ar'].forEach(function (item, index) {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      music.singer = singer
      // eslint-disable-next-line dot-notation
      music.picUrl = value['al'].picUrl
      list.push(music)
    })
    commit(SET_SONGS_DETAIL, list)
  },
  setDelSongs ({ commit }, index) {
    commit(DEL_SONGS, index)
  },
  setCurrentIndex ({ commit }, index) {
    commit(SET_CURRENT_INDEX, index)
  }
}
