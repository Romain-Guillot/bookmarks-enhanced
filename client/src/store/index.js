import Vuex from 'vuex'
import Vue from 'vue'
import bookmarks from './bookmarks'
import uiConfig from './ui_config'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    bookmarks: bookmarks,
    uiConfig: uiConfig
  }
})