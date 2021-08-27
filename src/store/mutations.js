/**
 * mutations用于保存修改全局共享的数据的方法
 */
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
  // changeFullScreen (state, flag) {
  //   state.isFullScreen = flag
  // }

  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
  },
  [SET_IS_PLAYING] (state, flag) {
    state.isPlaying = flag
  },
  [SET_SONGS_DETAIL] (state, list) {
    state.songs = list
  },
  [SET_IS_SHOW_SONGLIST] (state, flag) {
    state.isShowSongList = flag
  },
  [DEL_SONGS] (state, index) {
    if (index !== undefined) {
      state.songs.splice(index, 1)
    } else {
      state.songs = []
    }
    if (state.songs.length === 0) {
      state.isPlaying = false
    }
  },
  [SET_CURRENT_INDEX] (state, index) {
    if (index < 0) {
      index = state.songs.length - 1
    } else if (index > state.songs.length) {
      index = 0
    }
    state.currentIndex = index
  }
}
