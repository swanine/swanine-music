export default {
  isFullScreen (state) {
    return state.isFullScreen
  },
  isShowMiniPlayer (state) {
    return state.isShowMiniPlayer
  },
  isShowSongList (state) {
    return state.isShowSongList
  },
  isPlaying (state) {
    return state.isPlaying
  },
  songs (state) {
    return state.songs
  },
  currentSong (state) {
    let obj = {
      name: '',
      singer: '',
      picUrl: ''
    }
    if (state.songs.length !== 0) {
      // eslint-disable-next-line no-const-assign
      obj = state.songs[state.currentIndex]
    }
    return obj
  }
}
