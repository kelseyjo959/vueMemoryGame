import '../css/main.css'
import Vue from 'vue'
import Game from './components/Game'
import { store } from './vuex/store.js'

// the main entrance
/* eslint-disable no-new */
new Vue({
  el: '#application',
  render(h) {
    return h(Game)
  },
  store: store
})
